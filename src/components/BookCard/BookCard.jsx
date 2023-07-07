import './BookCard.scss'

const BookCard = ({
    imageValue,
    nameValue,
    ibdbValue,
    whichType
}) => {
    return (
        <div className='bookCard'>
            <div
                className="bookCardImg"
                style={{
                    backgroundImage: `url(${imageValue})`
                }}>
                    <button></button>
            </div>
            <div className="cardBottom">
                <h2 className='whichType'>{whichType}</h2>
                <h1 className='name'>{nameValue}</h1>
                <p className='ibdb'>{ibdbValue}</p>
            </div>

        </div>
    )
}

export default BookCard