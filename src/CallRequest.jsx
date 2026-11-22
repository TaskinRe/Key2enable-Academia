import React, {useRef, useState} from 'react';

const bookingEndpoint = import.meta.env.VITE_BOOKING_ENDPOINT;

export function CallRequest({topic, onClose}) {
  const [state, setState] = useState('idle');
  const lastRequest = useRef(null);

  async function submit(event) {
    event.preventDefault();
    if (state === 'sending') return;

    const request = Object.fromEntries(new FormData(event.currentTarget));
    setState('sending');
    try {
      const payload = {...request, topic};
      const details = JSON.stringify(payload);
      if (!bookingEndpoint && lastRequest.current?.details !== details) {
        lastRequest.current = {details, id: crypto.randomUUID()};
      }
      const body = bookingEndpoint ? details : JSON.stringify({...payload, id: lastRequest.current.id});
      const response = await fetch(bookingEndpoint || '/api/bookings', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body,
      });
      if (!bookingEndpoint) {
        const outcome = await response.json().catch(() => null);
        if ([404, 405, 501, 503].includes(response.status) || (response.ok && !outcome?.accepted)) {
          setState('unconfigured');
          return;
        }
      }
      if (!response.ok) throw new Error('Booking request failed');
      setState('sent');
    } catch {
      setState('error');
    }
  }

  return <>
    <button className="close" onClick={onClose}>Close</button>
    <h2 id="enquiry-title">{topic}</h2>
    {state === 'sent'
      ? <p role="status">Your request is in. The Key2Enable team will email you to arrange a time.</p>
      : <form onSubmit={submit}>
        <p>Tell us what you’d like to discuss. We’ll follow up by email to arrange a time.</p>
        <label>Name<input name="name" autoComplete="name" maxLength={100} autoFocus required/></label>
        <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required/></label>
        <label>School or organisation <small>Optional</small><input name="organisation" autoComplete="organization" maxLength={120}/></label>
        <label>Preferred times and time zone<input name="availability" placeholder="e.g. Tuesday afternoon, UAE time" maxLength={160} required/></label>
        <label>What would you like to discuss? <small>Optional</small><textarea name="message" rows="3" maxLength={1000}/></label>
        <button className="action action-prominent" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Request a call'}</button>
        {state === 'unconfigured' && <p role="status">Call requests are currently unavailable. Your request was not sent.</p>}
        {state === 'error' && <p role="alert">Your request could not be delivered. Please try again.</p>}
      </form>}
  </>;
}
