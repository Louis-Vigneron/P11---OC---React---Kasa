import Arrow from '../../Assets/Vector.svg';

function Collapse(props) {
    const handleClick = (event) => {
        let test = event.currentTarget
        let testt = event.target.nextElementSibling
        console.log(testt)
        if (test.className === "collapse__title collapse__title--close") {
            test.className = "collapse__title collapse__title--open"
            testt.style.animation ="1s open forwards"
        } else {
            test.className = "collapse__title collapse__title--close"
            testt.style.animation ="1s close forwards"
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