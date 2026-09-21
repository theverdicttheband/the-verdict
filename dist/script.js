// REPLACE: Set each data-video-id in index.html to its YouTube ID.
// Also accepts standard youtube.com/watch, /shorts/, /embed/ and youtu.be URLs.
function youtubeId(value) {
  if (/^[A-Za-z0-9_-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, '');
    let id = '';
    if (host === 'youtu.be') id = url.pathname.split('/')[1];
    if (['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)) {
      id = url.searchParams.get('v') || (/^\/(embed|shorts)\//.test(url.pathname) ? url.pathname.split('/')[2] : '');
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id || '') ? id : null;
  } catch { return null; }
}
document.querySelectorAll('[data-video-id]').forEach(container => {
  const id = youtubeId(container.dataset.videoId.trim());
  if (!id) return;
  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
  frame.title = container.dataset.title;
  frame.loading = 'lazy';
  frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  container.replaceChildren(frame);
});
document.getElementById('year').textContent = new Date().getFullYear();
