import Arrow from '../../Assets/Vector.svg';

function Collapse(props) {
    const handleClick = (event) => {
        let summary = event.currentTarget
        let text = event.target.nextElementSibling
        if (summary.className === "collapse__title collapse__title--close") {
            summary.className = "collapse__title collapse__title--open"
            text.style.animation ="1s open forwards"
        } else {
            summary.className = "collapse__title collapse__title--close"
            text.style.animation ="1s close forwards"
        }
    };

    return (
        <div className='collapse'>
            <h2 className='collapse__title collapse__title--close' onClick={handleClick}>{props.title}<img className='collapse__title__img' src={Arrow} alt="" /></h2>
            <p className='collapse__text'>{props.text}</p>
        </div>
    )
}

export default Collapse;