import './TextPart.scss'

const TextPart = (
    {
        p1Value,
        p2Value,
        h1Value,
        displayValue1 = "block",
        displayValue2 = "block",
        p1FontSize,
        p2FontSize,
        h1FontSize,
        marginTopValue
    }
) => {
    return (
        <div
            className='textPart'
            style={{
                marginTop: `${marginTopValue}`
            }}
        >
            <p
                className='textPartP'
                style={{
                    display: `${displayValue1}`,
                    fontSize: `${p1FontSize}`
                }}
            >{p1Value}</p>
            <h1
                className='textPartP'
                style={{
                    fontSize: `${h1FontSize}`
                }}
            >{h1Value}</h1>
            <p
                className='textPartP'
                style={{
                    display: `${displayValue2}`,
                    fontSize: `${p2FontSize}`
                }}
            >{p2Value}</p>
        </div >
    )
}

export default TextPart