// Splash screen animation
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.splash-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.splash-screen').style.display = 'none';
            document.querySelector('.countdown-container').style.opacity = '1';
            document.querySelector('.countdown-container').style.transform = 'translateY(0)';
        }, 1000);
    }, 3000); // 3 seconds splash screen
    
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

function updateCountdown() {
    // Set the countdown to May 26, 2026 at 12:00 AM UTC
    const countDownDate = new Date("May 26, 2026 00:00:00 GMT+0000").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    
    if (distance < 0) {
        document.querySelector(".countdown-header h1").textContent = "GTA VI IS OUT NOW!";
        document.querySelector(".release-date").textContent = "Available Worldwide";
    }
}