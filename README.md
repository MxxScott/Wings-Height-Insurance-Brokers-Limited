# Wing-Heights Insurance Brokers

A multi-page website for **Wing-Heights Insurance Brokers** — a brokerage marketing and
self-service site built with plain HTML, CSS and JavaScript. Visitors can browse insurance
products, learn about the company, book an appointment, and file a claim.

## Pages

| Page | File | What's on it |
|------|------|--------------|
| Home | `index.html` | Hero, company overview, featured products |
| About Us | `about.html` | Company background and team |
| Insurance Solutions | `insurance.html` | Product catalogue — auto, home, life, health, travel, pet, business and more |
| Bookings | `bookings.html` | Appointment / consultation booking form |
| File a Claim | `claim.html` | Claims submission form |

## Tech stack

`HTML` · `CSS` · `JavaScript` — vanilla, multi-page, with per-page styles and scripts.

## Run locally

Static site, no build step. Open `index.html`, or serve the folder:

```bash
npx serve .
```

## Project structure

```
index.html  about.html  insurance.html  bookings.html  claim.html
index_docs/      style + script for the home page
about_docs/      style + script (+ team images) for About
insurance_docs/  style + script for the product pages
bookings_docs/   style + script for the booking form
claim_docs/      style + script for the claims form
media/           shared images + video
public/          shared script
```

## License

MIT
