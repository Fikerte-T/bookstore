import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Books = () => {
   const dispatch = useDispatch()
   const submitBookToStore = () => {
      const newBook = {
         id: 1,
         title: "Atse Minilik",
         author: "Paulos Ngongo"
      }
      dispatch(addBook(newBook))
   }

  return (
   <div>
   <h3>ADD NEW BOOK</h3>
   <input type="text" placeholder="Book title" />
   <select name="Category">
     <option value="">Category</option>
   </select>
   <button type="submit" onClick={submitBookToStore}>ADD BOOK</button>
 </div>
  )

  };
export default Books;
