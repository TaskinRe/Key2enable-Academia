import assert from 'node:assert/strict';
import test from 'node:test';
import {onRequestPost} from '../functions/api/bookings.js';

const url = 'https://academy.example.test/api/bookings';
const env = {
  BOOKING_FROM: 'academy@example.test',
  BOOKING_RECIPIENTS: 'rubinger@example.test, ernest@example.test, rt2609@example.test',
  RESEND_API_KEY: 'test-key',
};
const form = {
  id: '8ecae163-a36d-4c3e-a489-e7830569ea8b',
  name: 'Demo Visitor',
  email: 'visitor@example.test',
  topic: 'Book a call',
  availability: 'Tuesday afternoon, UAE time',
  organisation: '',
  message: '',
};
function request(body = form, origin = new URL(url).origin) {
  return new Request(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Origin: origin},
    body: JSON.stringify(body),
  });
}

test('uses server-side recipients, visitor reply-to and a stable delivery key', async t => {
  const send = t.mock.method(globalThis, 'fetch', async () => new Response('{"id":"test-delivery"}'));
  const response = await onRequestPost({request: request({...form, to: 'injected@example.test'}), env});
  assert.equal(response.status, 202);
  assert.deepEqual(await response.json(), {accepted: true});
  const [url, options] = send.mock.calls[0].arguments;
  assert.equal(url, 'https://api.resend.com/emails');
  const message = JSON.parse(options.body);
  assert.deepEqual(message.to, env.BOOKING_RECIPIENTS.split(', '));
  assert.equal(message.reply_to, form.email);
  assert.equal(options.headers['Idempotency-Key'], 'academy-booking/' + form.id);
});

test('rejects invalid, cross-origin, and partially configured booking requests before sending', async t => {
  const send = t.mock.method(globalThis, 'fetch', async () => new Response(null, {status: 200}));
  assert.equal((await onRequestPost({request: request({...form, email: 'invalid'}), env})).status, 400);
  assert.equal((await onRequestPost({request: request(form, 'https://elsewhere.test'), env})).status, 403);
  assert.equal((await onRequestPost({request: request(), env: {...env, BOOKING_RECIPIENTS: 'one@example.test,two@example.test'}})).status, 503);
  assert.equal(send.mock.callCount(), 0);
});

test('does not report success if the provider rejects the email', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response(null, {status: 429}));
  const response = await onRequestPost({request: request(), env});
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), {error: 'delivery'});
});
