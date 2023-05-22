

import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center pb-3 mb-3'>
           
      
          <li>Github</li><li>LinkdIn</li><li>StackOF</li>
 
          
    </footer>
  );
}

export default Footer;