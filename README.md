# AI Futures: static website

Scroll-driven 3D city (Three.js r128 + GSAP 3.12.5 ScrollTrigger), glass interface, event programme, three enquiry routes. No build step. All libraries are vendored in `vendor/`. Only Google Fonts load from the network (fallback fonts are set).

## Files
- `index.html` page shell and form markup
- `css/style.css` styles
- `js/config.js` **edit this first**: dates, venue, contacts, form endpoint, analytics ID, enquiry routes
- `js/content.js` **programme copy**: hackathon, competitions, workshop, sessions, announcements (`CFG.NEWS`)
- `js/main.js` 3D city, mascot, scroll choreography, forms
- `vendor/` three.min.js, gsap.min.js, ScrollTrigger.min.js
- `previews/` screenshots from the test run

## Run locally
    cd ai-futures
    python3 -m http.server 8000     # open http://localhost:8000
Opening index.html directly also works in most browsers.

## Deploy to GitHub Pages
1. Create a repository, copy the contents of this folder to its root, commit and push.
2. Settings > Pages > Deploy from a branch > `main` / root.
3. Open `https://<user>.github.io/<repo>/`. All paths are relative, so a sub-path works.

## Replace placeholders (js/config.js)
`DATES`, `VENUE` (js/content.js: `CFG.VENUE`), `REG_URL`, `CONTACT_EMAIL`, `FORM_ENDPOINT`, `GA_ID`, `COLLEGE`.
Anything still reading "To be announced" is a placeholder in `js/content.js`; replace the text when confirmed.
Add announcements: `CFG.NEWS=[{t:'Title',d:'Details'}]`.

## Forms
One form, three routes (students, collaborate, partner). If `FORM_ENDPOINT` is set (Formspree, Getform, your API) it POSTs JSON `{name,org,email,area,msg,route}` and only reports success when the server returns 2xx. Otherwise, if `CONTACT_EMAIL` is set it opens a mailto draft. With neither, it says the form is not connected. Never a false success.

## Analytics
If `GA_ID` is set and a gtag script is loaded by you, events fire: chapter_progress, audience_path, *_cta_click, form_start, form_submit_success. Add a consent banner before enabling in production.

## Replace the mascot or logos
The mascot is built in code (`main.js`, section "mascot"). A GLB can replace it by loading it with GLTFLoader and removing that group. No logos are included; add `<img>` tags in `index.html`.

## v2 changes
District gates (one per district) and extra skybridges in the city, six-part nav with mobile menu, hackathon detail block, three audience pathways, partnerships and contact sections, noscript fallback. Display font Fraunces, mono JetBrains Mono (Google Fonts, with fallbacks). Contact email: set `CONTACT_EMAIL` in js/config.js.
