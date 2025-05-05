// Splash Screen Fade
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 3000); // 3 seconds
});

// Countdown Timer
const countdown = () => {
    const releaseDate = new Date('May 26, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = releaseDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.querySelector('.countdown').innerHTML = '<h2>GTA 6 is Out Now!</h2>';
    }
};

const timer = setInterval(countdown, 1000);
countdown(); // Initial call to avoid delay