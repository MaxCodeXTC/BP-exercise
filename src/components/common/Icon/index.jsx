import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Icon = (props) => {
  return (
    <i className={`${props.iconClass} ${styles.icon}`}></i>
  );
};

Icon.propTypes = {
  iconClass: PropTypes.string
};

export default Icon;