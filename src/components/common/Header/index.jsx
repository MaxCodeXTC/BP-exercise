import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Header = (props) => {
  return (
  <header>
    <h1 className={styles.title}>{props.title}</h1>
  </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

export default Header;