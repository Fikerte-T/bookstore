const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
    //   return { ...state, books: [...state.books, action.payload] };
      return [...state, action.payload];
    case REMOVE_BOOK:
    //   return state.books.filter((book, id) => book.id !== id);
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
