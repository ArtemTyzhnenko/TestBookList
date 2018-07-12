import * as actionTypes from './actionTypes';

export const handleBook = (book) => ({
    type: actionTypes.HANDLE_BOOK,
    book,
});