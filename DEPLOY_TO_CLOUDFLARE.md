# Put Key2Enable Academy on Cloudflare Pages

## Deploy the site

1. Extract this ZIP on your Mac.
2. Double-click `Deploy_to_Cloudflare.command`.
3. If prompted, sign in to Cloudflare in the browser on your own device. Do not share your password or API key in chat.
4. Enter the existing Pages project name, or keep `key2enableacademy`. If the project does not exist, answer `N` when asked whether it already exists.
5. Let the script build and upload the website. It prints the live `pages.dev` address when the upload completes.

The script deploys the built website and the booking function from `functions/api/bookings.js`.

## Connect key2enableacademy.com

In the Cloudflare dashboard, open **Workers & Pages → your Pages project → Custom domains → Set up a domain**. Add `key2enableacademy.com` and follow the DNS instructions shown there. Wait until Cloudflare reports the domain as active over HTTPS.

## Make “Book a call” deliver requests

The booking function will not send mail until these production settings are configured. In the Pages project, open **Settings → Variables and Secrets** and add:

- `BOOKING_RECIPIENTS` — all three complete recipient email addresses, separated by commas. The `rt2609` email address is not yet known; verify all three full addresses before adding them.
- `BOOKING_FROM` — a sender address on a domain verified in the Key2Enable Resend account.
- `RESEND_API_KEY` — a send-enabled Resend API key saved as an encrypted secret.

Save the settings and redeploy the project. Then submit one clearly labelled test booking and confirm that all three inboxes receive it. Do not advertise the booking form as operational until this succeeds.

The browser preview ZIP is only for local review. This deployment kit contains the application source, production build, and Cloudflare Pages function.
