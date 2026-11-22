# Key2Enable Academy website preview

React and Vite site with the product catalogue, school and family pages, Academy membership, six games, and a classroom dashboard demo.

Run `npm ci` and `npm run dev` to develop locally. Run `npm run build` to produce the preview build, then `npm run preview` to serve it.

The demo dashboard opens from the Academy page and uses fictional learner records. The game previews link to the current hosted builds. The Academy membership price is proposed.

## Publish to key2enableacademy.com

1. In Cloudflare, use **Workers & Pages** to create a Pages project or select the existing project for this website. With a Git-connected project, use build command `npm run build` and output directory `dist/client`. For CLI deployment, run `npm ci`, `npm run build`, and `npx wrangler pages deploy dist/client --project-name <project-name>` from this directory with an authenticated Wrangler session. Cloudflare’s browser drag-and-drop upload omits the booking function. [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/get-started/)
2. In the Pages project’s **Settings → Variables and Secrets**, set the production values below, then deploy the build with `functions/api/bookings.js`. [Cloudflare Pages bindings](https://developers.cloudflare.com/pages/functions/bindings/)
3. In the Pages project, open **Custom domains → Set up a domain** and add `key2enableacademy.com`. Check that the domain is active over HTTPS. [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
4. Submit a clearly labelled test request from the live site and confirm receipt in all three inboxes. Replies should go to the email entered on the form.

| Setting | Production value |
| --- | --- |
| `BOOKING_RECIPIENTS` | `rubinger@key2enable.com,ernest@key2enable.com,<confirmed rt2609 address>` |
| `BOOKING_FROM` | A sender address on a domain verified in the Key2Enable Resend account |
| `RESEND_API_KEY` | A send-enabled API key saved as an encrypted secret |

The default booking form posts to the Pages function. It reports success after the email service accepts the request. A static preview reports delivery unavailable. Run `node --test tests/booking.test.mjs` for an isolated delivery test using sample addresses.

For another hosting or booking provider, set `VITE_BOOKING_ENDPOINT` to its HTTPS endpoint before building. The endpoint must accept a JSON POST with name, email, organisation, availability, message and topic, and return HTTP 2xx once the request is accepted for delivery. For a cross-origin endpoint, allow the production website origin in the service’s CORS configuration.

See [content sources](content-sources.md) for product information, photos and the lab figures.
