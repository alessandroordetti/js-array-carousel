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

console.log(carouselContent);

/* Seleziono il div container dell'immagine principale */
const carouselMainWrapper = document.querySelector('div.main-img-wrapper');

/* Scrivo in main-img-wrapper carouselContent che si ripeterà per 5 volte, per le 5 immagini divierse */
carouselMainWrapper.innerHTML = carouselContent;

document.getElementsByClassName('bigger-img')[0].classList.remove('d-none');

document.getElementsByClassName('bigger-img')[0].classList.add('active');


console.log(carouselMainWrapper);

/* Prendo tutti gli elementi carousel-element per poi utilizzarli nel div main-img-wrapper quando scorro con il bottone verso il basso */
const carouselElements = document.getElementsByClassName('carousel-element');

console.log(carouselElements);

/* Aggiungo alla prima immagine la classe active */
carouselElements[0].classList.add('active');

/* Selezione il bottone per scorrere le immagini verso il basso */
const downButton = document.getElementById('down-button');

/* Scrivo una variabile come indice contatore che partirà da 0 quando clicco il bottone verso il basso */
let activeElement = 0;


downButton.addEventListener('click', function(){
    
    document.getElementsByClassName('bigger-img')[activeElement].classList.remove('active');

    document.getElementsByClassName('bigger-img')[activeElement].classList.add('d-none');

    activeElement++;

    document.getElementsByClassName('bigger-img')[activeElement].classList.add('active');

    document.getElementsByClassName('bigger-img')[activeElement].classList.remove('d-none');
})

const upButton = document.getElementById('up-button');

let activeElement1 = 4;

upButton.addEventListener('click', function(){
    document.getElementsByClassName('bigger-img')[activeElement1].classList.remove('active');

    document.getElementsByClassName('bigger-img')[activeElement1].classList.add('d-none');   

    activeElement1--;

    document.getElementsByClassName('bigger-img')[activeElement1].classList.add('active');
    
    
    document.getElementsByClassName('bigger-img')[activeElement1].classList.remove('d-none');   
})