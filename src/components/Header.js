import React from 'react';
import '../styles/Header.css';
import NavTabs from './NavTabs';

function Header(props) {
  return (
    <header  className="header">
      <h1>Luke "The Duke" Durkin</h1>
      <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    </header>
  );
}

export default Header;