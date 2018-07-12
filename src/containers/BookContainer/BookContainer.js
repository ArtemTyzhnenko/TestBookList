import React from 'react';
import {connect} from "react-redux";
import {handleBook} from "../../reducers/books/actions";
import {bindActionCreators} from "redux";

import Book from '../../components/Book/Book';

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
        books: books.booksList,
        currentBook: books.currentBook,
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(Book);