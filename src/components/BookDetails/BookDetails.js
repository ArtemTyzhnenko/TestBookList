import React, {Component} from 'react';

class BookDetails extends Component{

    render(){
        const {currentBook} = this.props;
        return(
            currentBook ?
            <div>
                <h3>{currentBook.title}</h3>
                <h4>Pages: {currentBook.pages}</h4>
                <p>Descriptions: {currentBook.description}</p>
            </div>
            :
            <div>Select a book to get started</div>
        )
    };
};


export default BookDetails;