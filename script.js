// Initialize Countdown
function updateCountdown() {
    const targetDate = new Date("May 26, 2026 00:00:00 GMT+0000").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    // Time calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update display
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    // If countdown ends
    if (diff < 0) {
        document.querySelector("h1").textContent = "GTA 6 IS OUT NOW!";
        document.querySelector(".release-info").textContent = "Available Worldwide";
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}

// Start countdown when page loads
window.addEventListener('load', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});