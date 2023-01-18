function Banner(props) {
    return (
        <div className='banner'>
            <img className='banner__img' src = {props.img} alt="Background Banner" />
            <p className='banner__text'>{props.title}</p>
         </div>
    )
}

export default Banner