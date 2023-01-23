import { Link } from 'react-router-dom';
import logements from '../../logements.json';
const galleryList = logements;

function Gallery() {
    return (
        <div className='box'>
            {galleryList.map((lodging) => (
                <Link to= {"lodging/" + lodging.id} key={lodging.id} className="box__card">
                    <img className="box__card__img" src={lodging.cover} alt={lodging.title} />
                    <figcaption className="box__card__text">{lodging.title}</figcaption>
                </Link>
            ))}</div>
    )
}
export default Gallery 