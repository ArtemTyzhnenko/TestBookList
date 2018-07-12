import * as actionTypes from './actionTypes';

let initialState = {
    booksList:[{
            title: 'Witcher',
            pages: 162,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis deleniti ' +
            'eos error laudantium minus mollitia necessitatibus nemo nihil nisi, officiis praesentium quaerat' +
            ' quasi quidem quisquam rem rerum ut veniam?',
        }, {
            title: 'Harry Potter',
            pages: 262,
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis cupiditate' +
            ' deleniti facere minima molestias, soluta unde voluptas. Aliquam autem dolorem ex facere ' +
            'laudantium nulla provident quam repellendus sint soluta.',
        }, {
            title: 'Flowers for Algernon',
            pages: 362,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis deleniti ' +
            'eos error laudantium minus mollitia necessitatibus nemo nihil nisi, officiis praesentium quaerat' +
            ' quasi quidem quisquam rem rerum ut veniam?',
        }, {
            title: 'Javascript',
            pages: 462,
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis cupiditate' +
            ' deleniti facere minima molestias, soluta unde voluptas. Aliquam autem dolorem ex facere ' +
            'laudantium nulla provident quam repellendus sint soluta.',
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