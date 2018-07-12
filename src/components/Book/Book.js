import React, {Component} from 'react';
import BooksList from '../BooksList/BooksList';
import BookDetails from '../BookDetails/BookDetails';

class Book extends Component {

    render(){
        const {currentBook, ...bookListProps} = this.props;
        return(
            <div>
                <BooksList
                    {...bookListProps}
                />
                <BookDetails
                    currentBook={currentBook}
                />
            </div>
        )
    };
};

export default Book;