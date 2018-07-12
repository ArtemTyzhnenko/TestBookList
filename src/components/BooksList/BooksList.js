import React from 'react';

const BooksList = ({actions, books}) =>  {

    const renderList = () => {
        return books.map( book => (
            <li
                key={book.title}
                className="list-group-item book-item"
                onClick={()=> actions.handleBook(book)}
            >
                {book.title}
            </li>
        ))
    };

    return(
        <div>
           <ul className="list-group col-sm-4">
               { renderList() }
           </ul>
        </div>
    )
};

export default BooksList;