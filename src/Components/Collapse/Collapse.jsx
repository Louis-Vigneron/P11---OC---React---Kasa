function Collapse(props) {
    return (
        <details className='collapse'>
            <summary className='collapse__title'>{props.title}</summary>
            <p className='collapse__text'>{props.text}</p>
        </details>
    )
}

export default Collapse;