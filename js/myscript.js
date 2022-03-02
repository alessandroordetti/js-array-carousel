const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let carouselContent = '';

for (let i = 0; i < items.length; i++) {
    carouselContent += `
    <div class="bigger-img d-none">
    <img class="related-img" src="${items[i]}" alt=""></div>`
};

/* Seleziono il div container dell'immagine principale */
const carouselMainWrapper = document.querySelector('div.main-img-wrapper');

/* Scrivo in main-img-wrapper carouselContent che si ripeterà per 5 volte, per le 5 immagini divierse */
carouselMainWrapper.innerHTML += carouselContent;


/* Prendo tutti gli elementi carousel-element per poi utilizzarli nel div main-img-wrapper quando scorro con il bottone verso il basso */
const carouselElements = document.getElementsByClassName('carousel-element');


/* Selezione il bottone per scorrere le immagini verso il basso */
const downButton = document.getElementById('down-button');

/* Scrivo una variabile come indice contatore che partirà da 0 quando clicco il bottone verso il basso */
let activeElement = 0;

downButton.addEventListener('click', function(){
    
})