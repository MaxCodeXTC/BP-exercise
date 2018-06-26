import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Header = (props) => {
  return (
  <header className={styles.header}>
    <h1 className={styles.title}>{props.title}</h1>
    <div className={styles.underline}></div>
  </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

export default Header;