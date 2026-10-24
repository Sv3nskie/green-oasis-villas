# Green Oasis Villas Borobudur — client preview site

Static one-page site (plain HTML, CSS, JS). No build step.

## Files
- `index.html` — page structure
- `styles.css` — design tokens and layout
- `script.js` — all copy (NL / EN / ID), photos, slideshow, gallery, calculator, forms
- `assets/` — photos and logos

## Run locally
Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Publish on GitHub Pages
1. Create a new GitHub repository and push this folder's contents to the root of the `main` branch.
2. In the repo: Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site appears at `https://<user>.github.io/<repo>/` after a minute.

## Placeholders still to replace
- WhatsApp number (`WA_NUMBER` in `script.js` and the link in `index.html`)
- Email address and social media links in `index.html`
- Photos: Borobudur Temple, rice fields, Menoreh Hills, six excursions, portrait of Jan & Maria (dashed boxes on the page)
- Jan & Maria's real story and quote (`storyP1`, `storyP2`, `storyQuote` in `script.js`)
- Holiday rates and extra-bed price
