import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    handleBook
} from "../../reducers/books/actions";


class BooksList extends Component{

    renderList = () => {
        return this.props.books.map( book => (
            <li
                key={book.title}
                className="list-group-item"
                onClick={()=>this.props.handleBook(book)}
            >
                {book.title}
            </li>
        ))
    };

    render(){
        return(
            <div>
               <ul className="list-group col-sm-4">
                   { this.renderList() }
               </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                handleBook,
            }
            ,dispatch)
    };
};

const mapStateToProps = ({books}) =>{
    return{
        books: books.booksList
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(BooksList);