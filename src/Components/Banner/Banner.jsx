import Background_Banner from './Background_Banner.png'

function Banner() {
    return (
        <div className='banner'>
            <img className='banner__img' src = {Background_Banner} alt="Background Banner" />
            <p className='banner__text'>Chez vous, partout et ailleurs</p>
         </div>
    )
}

export default Banner