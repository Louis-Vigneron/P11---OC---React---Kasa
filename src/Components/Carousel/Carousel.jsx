import React, { useState } from 'react';
import Cross from '../../Assets/VectorG.svg';
import CrossC from '../../Assets/VectorD.svg';

function Carousel(a) {
    const [index, setIndex] = useState(0);
    const length = a.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    if (length > 1) {
        return (
            <div className='carousel'>

                <div className='carousel__box'>
                    <button className='carousel__box__button' onClick={handlePrevious}><img src={Cross} alt="" /></button>
                    <button className='carousel__box__button' onClick={handleNext}><img src={CrossC} alt="" /></button>
                </div>

                <img className='carousel__img' src={a[index]} alt='' />
                <figcaption className='carousel__counter'><span>{index+1}</span>/<span>{length}</span></figcaption>
            </div>
        );
    } else {
        return (
            <div className='carousel'>
                <img className='carousel__img carousel__img--one' src={a[index]} alt='' />
            </div>
        );
    }


}

export default Carousel