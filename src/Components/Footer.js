import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Book Cart &copy; 2024</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: '0',
  },
};

export default Footer;
