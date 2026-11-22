// Key2Enable Academy: serves the website and emails "Book a call" requests.
import { EmailMessage } from "cloudflare:email";

const LIMITS = { name: 100, email: 254, organisation: 120, availability: 160, message: 1000, topic: 80 };
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
const clean = (value, max) => String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
const isEmail = value => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);

function encodeHeader(text) {
  if (/^[\x20-\x7E]*$/.test(text)) return text;
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach(b => (binary += String.fromCharCode(b)));
  return "=?UTF-8?B?" + btoa(binary) + "?=";
}

async function handleBooking(request, env) {
  if (request.method !== "POST") return json({ accepted: false }, 405);
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ accepted: false }, 403);
  if (Number(request.headers.get("content-length") || 0) > 8000) return json({ accepted: false }, 413);

  let data;
  try { data = await request.json(); } catch { return json({ accepted: false }, 400); }

  const f = {};
  for (const [key, max] of Object.entries(LIMITS)) f[key] = clean(data[key], max);
  if (!f.name || !isEmail(f.email) || !f.availability) return json({ accepted: false, error: "missing" }, 400);

  const recipients = String(env.BOOKING_RECIPIENTS || "").split(",").map(s => s.trim()).filter(Boolean);
  const from = String(env.BOOKING_FROM || "").trim();
  if (!env.BOOKING_EMAIL || !recipients.length || !from) return json({ accepted: false }, 503);

  const body = [
    "New call request from key2enableacademy.com",
    "",
    "Topic: " + (f.topic || "Book a call"),
    "Name: " + f.name,
    "Email: " + f.email,
    "School or organisation: " + (f.organisation || "Not given"),
    "Preferred times: " + f.availability,
    "",
    "Message:",
    String(data.message ?? "").slice(0, LIMITS.message) || "None",
    "",
    "Reply to this email to answer " + f.name + " directly.",
  ].join("\r\n");

  let delivered = 0;
  for (const to of recipients) {
    const raw = [
      "From: Key2Enable Academy <" + from + ">",
      "To: <" + to + ">",
      "Reply-To: <" + f.email + ">",
      "Subject: " + encodeHeader("Book a call: " + f.name),
      "Date: " + new Date().toUTCString(),
      "Message-ID: <" + crypto.randomUUID() + "@" + from.split("@")[1] + ">",
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      body,
    ].join("\r\n");
    try {
      await env.BOOKING_EMAIL.send(new EmailMessage(from, to, raw));
      delivered++;
    } catch (err) {
      // e.g. an address that is not verified yet; keep sending to the others
      console.error("Email to " + to + " failed:", err && err.message);
    }
  }
  return delivered ? json({ accepted: true }) : json({ accepted: false }, 502);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/bookings") return handleBooking(request, env);

    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes("text/html");
    if (response.status !== 404 || !acceptsHtml || !["GET", "HEAD"].includes(request.method)) return response;
    url.pathname = "/index.html";
    url.search = "";
    return env.ASSETS.fetch(new Request(url, request));
  },
};
