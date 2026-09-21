# The Verdict — electronic press kit

A complete static site: HTML, CSS, and a small video helper. No build, packages, backend, database, paid fonts, paid embeds, or subscription is needed to run the files. All website files are in `dist/`.

## 1. Run locally

Open `dist/index.html` in a browser. For a more realistic preview, run this from this folder with Python installed:

```sh
python -m http.server 8000 --directory dist
```

Visit `http://localhost:8000`. Stop with Ctrl+C. A local server is recommended when testing YouTube embeds.

## 2. Replace the hero

Replace `dist/images/hero.jpg` with a landscape live photo (recommended 1600×1000). Replace `hero-mobile.jpg` with a portrait crop (700×1000) keeping the people in the middle/right so the left-aligned text remains readable. Both files are required; otherwise phones will show the old placeholder. Alternatively remove the `<source>` in the hero `<picture>` to use one photo everywhere.

Search `REPLACE: Hero image` in `dist/index.html`. Update its `alt` description and remove the `Stock stage photo` caption. Adjust `.hero-photo` object-position in `styles.css` if the crop needs moving. Export JPEGs around 80% quality and preferably below 250 KB each. Existing images are clearly labeled stock placeholders, not photos of The Verdict.

## 3. Replace the band portrait

Overwrite `dist/images/band-photo.jpg` with your group photo, preferably 1400×650. Find `REPLACE: Band photo`, describe the real image in `alt`, and remove the placeholder `<figcaption>`. The phone layout crops this more tightly; keep all five people toward the center or change `.band-photo img` to `aspect-ratio:auto;height:auto` at the mobile breakpoint.

## 4. Replace the six live photos

Overwrite `dist/images/live-1.jpg` through `live-6.jpg`; 800×600 JPEGs work well. Find `REPLACE: images/live-1.jpg` in the HTML, write accurate alt text for each, and remove or replace each placeholder caption. Each image is already lazy loaded and linked to its full image. Browser Back returns to the page. For higher-resolution downloads, change the surrounding link's `href` to your larger image while keeping its thumbnail `src` lightweight.

## 5. Insert three real performance videos

Find the three `data-video-id=""` attributes in `dist/index.html`. Paste a YouTube video ID or URL between the quotes:

```html
data-video-id="YOUR_11_CHARACTER_ID"
```

Standard watch URLs, youtu.be links, Shorts URLs, and embed URLs are supported. Replace each `data-title` with a descriptive song/performance title. The JavaScript automatically replaces that placeholder with a responsive, lazy-loaded YouTube privacy-enhanced embed. Nothing autoplays. Keep the existing first-video `featured` class to preserve its larger layout. Confirm embedding is allowed for each video and test after publishing; YouTube privacy-enhanced mode still contacts YouTube when the embed loads. Empty or invalid values preserve the placeholder. Without JavaScript, placeholders remain visible and all navigation/contact links still work.

## 6. Edit the sample setlist

Find `EDIT: Sample setlist` in the HTML. There are 20 rows across four categories. Edit the song title and artist within each `<li>`. Keep the `<span>` around the artist for the muted style. Update category headings if needed. The current selection contains 20 verified tracks from the two supplied Spotify playlists. The full-setlist request already opens an email draft.

## 7. Edit the bio

Find `REPLACE: Bio` and edit the three paragraphs in `.bio`. Keep it concise; retain only claims you can support. The four-hour set, own PA, location, and five-piece lineup also appear elsewhere, so search for those phrases if they change.

## 8. Edit contact details

Search and replace every occurrence of `theverdictblonocu@gmail.com` in `dist/index.html`, including `mailto:` links. Likewise update every Instagram URL and `@theverdict_theband` label. There is no form or server: Email the band opens the visitor's email app. The email address remains visible for copying.

## Current hosting: GitHub Pages

Public website: https://liamcampbell-png.github.io/the-verdict/

Source: https://github.com/liamcampbell-png/the-verdict

Edit `dist/index.html`, `dist/styles.css`, `dist/script.js`, or `dist/images/` and push to `main`. The included Publish website workflow automatically publishes `dist/`. No build command or paid plan is required for this public repository. Check the repository Actions tab for deployment status.

## 9. Alternative free hosting: Cloudflare Pages

This portable version is independent of any Sites preview. Cloudflare documents free, unlimited requests to static assets on the Free plan: https://developers.cloudflare.com/pages/functions/pricing/

1. Use a free Cloudflare account. No custom domain is needed.
2. Open Workers & Pages → Create application → Get started → Drag and drop your files (look for Pages / Direct Upload).
3. Name the project, for example `the-verdict-band`, if available.
4. Upload the **contents of `dist/`** or a ZIP with `index.html`, `styles.css`, `script.js`, and `images/` directly at its root. Do not upload the outer project folder or the Sites `.openai` folder.
5. Choose Deploy site. Use the supplied `https://YOUR-PROJECT.pages.dev` address. This site needs no Functions, billing upgrade, build command, database, or domain purchase.
6. In `dist/index.html`, replace the `og:url` and `og:image` origin with your actual new address; keep `/images/social-preview.jpg` on the image URL. Redeploy.

Official current instructions: https://developers.cloudflare.com/pages/get-started/direct-upload/

The free plan has service limits and providers can change terms. Static requests are currently free; this project avoids paid runtime features. A Cloudflare account is required. Sites hosting available through this task is separate; its long-term pricing is not asserted here.

### Social sharing and favicon

Replace `images/social-preview.jpg` with a 1200×630 band photo or branded image. The included neutral title card is a placeholder. Update `og:image:alt` to describe your new image. Open Graph images require an absolute public HTTPS URL. Messaging apps may cache previous previews after updates. The inline SVG favicon is a simple V; replace the favicon `<link>` with `href="images/favicon.png"` and `type="image/png"` if you supply a logo.

## 10. Update later

Edit the same files and use Cloudflare Pages → your project → Create a new deployment. Upload the updated `dist` contents and choose the production environment. Keep the same project to retain the booking URL. No dependency maintenance or rebuild is necessary. The earlier Sites attempt was not deployed. The current site uses GitHub Pages.

## Before sending to bookers

- Replace both hero crops, the portrait, six gallery photos, and social image.
- Supply three videos, review the selected 20-song sample, and remove photo placeholder captions.
- Check phone and desktop layouts, image crops, navigation, email and Instagram links.
- Confirm real videos play on the public site, with no autoplay.
- Send yourself the public URL in a message to check its preview.

## Design and accessibility

System fonts eliminate third-party font requests. Below-fold images and video frames lazy load. The page has semantic landmarks, a skip link, keyboard focus styles, reduced-motion support, and no backend. The only JavaScript parses video IDs and updates the footer year. Images account for nearly all page weight, so optimize replacements. Lighthouse scores are not guaranteed and should be measured again with your final media.

## Placeholder image credit

Empty-stage stock photograph by Vladimir Mikhailov on Pexels: https://www.pexels.com/photo/drums-on-stage-8937014/

License: https://www.pexels.com/license/

The same monochrome stock image is intentionally reused in the photo slots as a clearly marked placeholder. It does not depict The Verdict or imply a past performance. Replace it with your own photos before booking outreach.

## Sample-setlist sources

- https://open.spotify.com/playlist/6WchMtfJsPjDLY1gptm4K1
- https://open.spotify.com/playlist/47DIR3caYWMw4EwlaPfxyk

The 20 selections favor recognizable songs and variety across eras and genres. Remaster labels were omitted for readability. Playlist names are not used as claims about previous gigs.
