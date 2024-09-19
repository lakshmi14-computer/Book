import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/bookSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Book List</h3>
      {books.length === 0 && <p>No books added yet!</p>}
      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.listItem}>
            <div style={styles.bookInfo}>
              <span>{book.title}</span>
              <button onClick={() => dispatch(deleteBook(book.id))} style={styles.button}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '20px',
    textAlign: 'center',  // Center the whole content
  },
  bookInfo: {
    display: 'inline-flex',  // Make it inline to center both title and button together
    alignItems: 'center',  // Vertically center the text and button
    gap: '10px',  // Add space between the title and button
  },
  button: {
    padding: '8px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default BookList;
