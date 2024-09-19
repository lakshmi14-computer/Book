import React from 'react';
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <AddBook />
        <BookList />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default App;
