const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const formFields = [
  ['name', 'Name', 100, true],
  ['email', 'Email', 254, true],
  ['organisation', 'School or organisation', 120, false],
  ['availability', 'Preferred times and time zone', 160, true],
  ['message', 'Message', 1000, false],
  ['topic', 'Enquiry', 120, true],
];

function result(status, error) {
  return Response.json(error ? {error} : {accepted: true}, {
    status,
    headers: {'Cache-Control': 'no-store'},
  });
}

export async function onRequestPost({request, env}) {
  if (request.headers.get('Origin') !== new URL(request.url).origin) {
    return result(403, 'origin');
  }
  if (request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    return result(415, 'format');
  }
  if (Number(request.headers.get('Content-Length')) > 8192) {
    return result(413, 'size');
  }

  let submission;
  try {
    const body = await request.text();
    if (body.length > 8192) return result(413, 'size');
    submission = JSON.parse(body);
  } catch {
    return result(400, 'format');
  }

  const id = submission?.id;
  if (typeof id !== 'string' || !/^[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}$/i.test(id)) {
    return result(400, 'id');
  }

  const details = [];
  for (const [field, label, maxLength, required] of formFields) {
    const value = submission[field];
    if (typeof value !== 'string' || value.length > maxLength || (required && !value.trim())) {
      return result(400, 'fields');
    }
    if (value.trim()) details.push(`${label}: ${value.trim()}`);
  }
  const replyTo = submission.email.trim();
  if (!emailPattern.test(replyTo)) return result(400, 'email');

  const recipients = [...new Set((env.BOOKING_RECIPIENTS || '').split(',').map(value => value.trim().toLowerCase()).filter(Boolean))];
  const sender = env.BOOKING_FROM?.trim();
  if (!env.RESEND_API_KEY || !emailPattern.test(sender || '') || recipients.length < 3 ||
      recipients.length > 50 || !recipients.every(address => emailPattern.test(address))) {
    return result(503, 'unconfigured');
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `academy-booking/${id}`,
      },
      body: JSON.stringify({
        from: `Key2Enable Academy <${sender}>`,
        to: recipients,
        reply_to: replyTo,
        subject: 'New Key2Enable Academy call request',
        text: details.join('\n\n'),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return result(502, 'delivery');
    return result(202);
  } catch {
    return result(502, 'delivery');
  }
}
