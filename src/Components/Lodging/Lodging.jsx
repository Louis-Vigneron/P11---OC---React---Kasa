import logements from '../../logements.json';

function idRecovery() {
const search_id = window.location.search;
var idLodging = search_id.slice(1);
return logements.filter(el => el.id === idLodging);
}

function LodgingPage() {
    return (
        
        idRecovery().map((el) =>
            <div className="lodging" key={el.id}>
                <img className='lodging__carrousel' src={el.cover} alt={el.title} />
                <div className="lodging__box">
                    <div className='lodging__box__title'>
                        <h1 className='lodging__box__title__main'>{el.title}</h1>
                        <h2 className='lodging__box__title__sub'>{el.location}</h2>
                    </div>
                    <figure className='lodging__box__figure'>
                        <img className='lodging__box__figure__img' src={el.host.picture} alt={el.host.name} />
                        <figcaption className='lodging__box__figure__legend'>{el.host.name}</figcaption>
                    </figure>
                    <ul className='lodging__box__tags'>{el.tags.map((tag, index) => <li className='lodging__box__tags__list' key={`${tag}-${index}`}>{tag}</li>)}
                    </ul>
                    <p className='lodging__box__rate'>{el.rating}</p>
                </div>
                <div className='lodging__details'>
                    <details className='lodging__details__collapse'>
                        <summary className='lodging__details__collapse__title'>
                            Description
                        </summary>
                        <p className='lodging__details__collapse__text'>{el.description}</p>
                    </details>
                    <details className='lodging__details__collapse'>
                        <summary className='lodging__details__collapse__title'>
                            Équipements
                        </summary>
                        <ul className='lodging__details__collapse__text'>{el.equipments.map((equipment, index) => <li key={`${equipment}-${index}`}>{equipment}</li>)}
                        </ul>
                    </details>
                </div>
            </div>
        ))


}
export default LodgingPage 