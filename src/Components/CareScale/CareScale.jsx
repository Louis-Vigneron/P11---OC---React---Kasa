import Good from '../../Assets/stargood.svg'
import Bad from '../../Assets/starbad.svg'

function CareScale({ scaleValue}) {
	const range = [1, 2, 3, 4, 5]
	const scaleTypeGood = <img src={Good} alt='Orange Star' />;
	const scaleTypeBad = <img src={Bad} alt='Grey Star' />;
    var scaleValueBad = 5 - scaleValue;
		

	return (
		<div className='rate'>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span className='rate__star' key={rangeElem.toString()}>{scaleTypeGood}</span> 
                    
				) : null
			)}
		
			{range.map((rangeElem) =>
				scaleValueBad >= rangeElem ? (
					<span className='rate__star' key={rangeElem.toString()}>{scaleTypeBad}</span> 
				) : null
			)}
		</div>
	)
}

export default CareScale