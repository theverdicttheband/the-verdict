# The Verdict — electronic press kit

Public website: https://theverdicttheband.github.io/the-verdict/
Source repository: https://github.com/theverdicttheband/the-verdict

## Run locally

Open `dist/index.html` or run `python -m http.server 8000 --directory dist` from this folder and visit http://localhost:8000.

## Edit the page

All content is in `dist/index.html`; appearance is in `dist/styles.css`. `dist/script.js` updates the copyright year and pauses other clips when one starts playing. No packages or build step are required.

- Hero: replace `dist/images/hero.jpg` and `hero-mobile.jpg`. Desktop currently uses a video frame; phones use the supplied guitarist photo. Update the image description in the HTML if needed.
- Band image: replace `dist/images/band-photo.jpg`. It currently uses a still from IMG_8340.MOV, rather than a posed portrait.
- Gallery: replace `dist/images/live-1.jpg`, `live-2.jpg`, and `live-3.jpg`. These are the three supplied photos, with orientation corrected and web-sized exports. Update their alt descriptions. Full images open when clicked.
- Videos: replace `dist/videos/performance-1.mp4` through `performance-3.mp4`, their matching `.webm` versions, and the matching `images/performance-1.jpg` through `performance-3.jpg` posters. Update durations in the HTML captions and accessible labels. WebM (VP9/Opus) is tried first for browser compatibility; MP4 (H.264/AAC) is the fallback. Use fast-start metadata, and no location metadata. Keep each file below GitHub's 100 MiB file limit. There is no autoplay, and `preload="none"` prevents loading whole clips before visitors press Play. The original MOV files remain untouched in Downloads.
- Setlist: edit the four lists below `EDIT: Sample setlist`. The 20 selections came from the two supplied Spotify playlists. They are samples, not the full repertoire.
- Bio: find `REPLACE: Bio` and edit the paragraphs.
- Contact: replace every occurrence of the booking email, Instagram address, or Facebook address if they change. Email uses mailto and needs no backend.
- Social preview: replace `images/social-preview.jpg` (1200×630) and update its alt text. Keep Open Graph URLs absolute and pointed at your live domain.
- Favicon: replace the inline V icon in the head if you have a band logo.

## Clip decisions

1. Featured: IMG_8340.MOV, 00:18–01:00, 42 seconds. The closest framing shows the performance more clearly; this excerpt covers vocals and the transition into instrumental playing.
2. Supporting: IMG_8318.MOV, 00:00.40–00:33.40, 33 seconds. Retains most of the short performance recording.
3. Supporting: IMG_8322.MOV, 00:00.30–00:28.30, 28 seconds. Retains nearly all of the short performance recording.

These are editorial selections, not a claim of an objectively perfect length. Outputs preserve the original live audio, with only 0.12-second opening and 0.45-second closing fades. No studio replacement audio or artificial performance changes. Clips are 720p/30fps to keep playback light. The recordings were reviewed through sampled frames, audio measurements, and automated vocal transcription; automatic transcription was unreliable, so no song titles or lyric captions were inferred from it. A human listening pass is still recommended to confirm musical phrasing and the final mix.

## Publish and update for free

Push changes to `main`. `.github/workflows/pages.yml` automatically publishes `dist/` to GitHub Pages. Check the Actions tab for completion, then refresh the browser. The public repository and GitHub Pages require no paid domain or hosting subscription. Never put private information in the public repository.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Alternative: upload the contents of `dist/` through Cloudflare Pages Direct Upload using a Free account. Use its supplied pages.dev address, and update the Open Graph URLs before uploading again. Instructions: https://developers.cloudflare.com/pages/get-started/direct-upload/

## Media provenance and verification limits

Photos and videos were supplied by the band. Original files are not modified. Web exports omit source metadata. The current gallery contains three real photos, with no duplicated stock placeholders. Social art and the band image use an actual video frame. No claims about venue history were added.

Check the final playback with sound on your phone before sending the link to bookers. Native controls provide play/pause, seeking, volume, and full-screen support. No verified lyric captions are available yet. The video files are served directly from GitHub Pages; heavy traffic can consume its hosting bandwidth allowance. They can later be moved to free YouTube embeds without redesigning the page.

Setlist sources:
- https://open.spotify.com/playlist/6WchMtfJsPjDLY1gptm4K1
- https://open.spotify.com/playlist/47DIR3caYWMw4EwlaPfxyk

## Pending media and band-owned hosting

Video 2 is intentionally a Coming soon placeholder. Its old exports have been removed from the published folder. Videos 1 and 3 remain. Two gallery placeholders reserve the next photographs; a circular hero placeholder reserves the third forthcoming image (the logo). Replace the logo div with an image using the same class and size, and set descriptive alt text. No unavailable image paths are loaded.

The repository is owned by theverdicttheband. The local Git remote and Open Graph URLs point to the band's account. The former owner remains a write collaborator for maintenance; repository ownership belongs to the band account. Use the new public URL above; GitHub Pages does not automatically redirect the old site address.
