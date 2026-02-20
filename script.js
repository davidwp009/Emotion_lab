const hero = document.querySelector('.hero-content__back');

// масив твоїх фонів
const backgrounds = [
  './images/projects/projects-7.svg',
  './images/projects/projects-8.svg',
  './images/projects/projects-9.svg'
];

let index = 0;

setInterval(() => {
  index = (index + 1) % backgrounds.length;
  hero.style.backgroundImage = `url(${backgrounds[index]})`;
}, 5000); // 5000 = 5 секунд









newFunction();

function newFunction() {
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
}
