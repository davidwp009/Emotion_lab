const hero = document.querySelector('.hero-content__back');


const backgrounds = [
  './images/projects/projects-7.svg',
  './images/projects/projects-8.svg',
  './images/projects/projects-9.svg'
];

let index = 0;

setInterval(() => {
  index = (index + 1) % backgrounds.length;
  hero.style.backgroundImage = `url(${backgrounds[index]})`;
}, 5000); 



const buttons = document.querySelectorAll('.gallery__item-btn');
const cards = document.querySelectorAll('.gallery__item');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === "all" || filter === category) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });

        // toggle active button
        buttons.forEach(b => b.classList.remove('active-filter'));
        btn.classList.add('active-filter');
    });
});










