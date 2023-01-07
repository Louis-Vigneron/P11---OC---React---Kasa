import logements from '../../logements.json'
const galleryList = logements;
const gallery = document.querySelector ('.box');

function createCard (){
    galleryList.forEach(logement => {
        gallery.innerHTML +=
        `
        <figure class="box__card">
        <img class="box__card__img" src= ${logement.cover} alt="" />
        <figcaption class="box__card__text">${logement.title}</figcaption>
        </figure>
        `
    })
}

function Gallery() {
    return createCard()
}
export default Gallery 