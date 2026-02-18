const logo = document.querySelector('.head__logo');
const video = document.querySelector('.logo-video');

logo.addEventListener('mouseenter', () => {
    video.play();
    video.style.opacity = "1";
});

logo.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    video.style.opacity = "0";
});