document.getElementById('year').textContent = new Date().getFullYear();
const performances = [...document.querySelectorAll('video')];
performances.forEach(video => video.addEventListener('play', () => {
  performances.forEach(other => { if (other !== video) other.pause(); });
}));
