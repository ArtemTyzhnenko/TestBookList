import * as actionTypes from './actionTypes';

let initialState = {
    booksList:[{
            title: 'Witcher',
        }, {
            title: 'Harry Potter',
        }, {
            title: 'Flowers for Algernon',
        }, {
            title: 'Javascript',
        },
    ],
    currentBook: null,

};

const books = (state = initialState, action) =>{
    switch (action.type){

        case actionTypes.HANDLE_BOOK:
            return{
                ...state,
                currentBook: action.book,
            };

        default:
            return state;
    }
};

export default books;