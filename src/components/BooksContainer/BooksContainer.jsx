import { useState } from 'react'
import TextPart from '../TextPart/TextPart'
import './BooksContainer.scss'
import BookCard from '../BookCard/BookCard'

const BooksContainer = () => {
    const [books, setBooks] = useState([])

    fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(data => setBooks(data))

    function function1() {
        books.map(card => (
            console.log(card.img)
        ))
    }
    return (
        <div className='booksContainer'>
            <TextPart
                h1Value="Kitablar"
                p1Value="Bizdən alın"
                displayValue2='none'
                p1FontSize='18px'
                h1FontSize='45px'
                marginTopValue="20px"
            />
            <div className="books">
                {/* <button onClick={function1}>Elcin</button> */}
                {
                    books.map(card => (
                        <BookCard
                            key={card.id}
                            imageValue={card.img}
                            nameValue={card.name}
                            ibdbValue={card.ibdb}
                            whichType={card.whichType}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BooksContainer