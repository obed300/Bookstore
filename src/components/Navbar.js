import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Bookstore CMS</h1>
      <NavLink to="/" activeClassName={styles.activeLink} className={styles.Books}>Books</NavLink>
      <NavLink to="/Category" activeClassName={styles.activeLink} className={styles.category}>Categories</NavLink>
    </nav>
  );
}

export default Navbar;
