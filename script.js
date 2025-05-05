// Splash screen transition
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main-content").style.opacity = "1";
  }, 2500);
});

// Countdown function
function updateCountdown() {
  const release = new Date("May 26, 2026 00:00:00 GMT+0000");
  const now = new Date();
  const diff = release - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = 
      `<h2 style="font-size:2rem">GTA 6 IS OUT NOW!</h2>`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Initialize
updateCountdown();
setInterval(updateCountdown, 1000);