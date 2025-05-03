const toggleBlurBtn = document.getElementById("toggleBlur");
const toggleMusicBtn = document.getElementById("toggleMusic");
const bgMusic = document.getElementById("bgMusic");

let blurActive = false;
let musicPlaying = true;

toggleBlurBtn.addEventListener("click", () => {
  blurActive = !blurActive;
  document.body.classList.toggle("blur-active", blurActive);
});

toggleMusicBtn.addEventListener("click", () => {
  musicPlaying = !musicPlaying;
  if (musicPlaying) {
    bgMusic.play();
    toggleMusicBtn.textContent = "🔊 Music On";
  } else {
    bgMusic.pause();
    toggleMusicBtn.textContent = "🔇 Music Off";
  }
});
