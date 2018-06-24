import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Modal = (props) => {
  console.log(props);
    if(!props.showModal) {
      return null;
    }
    
    return (
      <div className={styles.modalBackDrop}>
        <div className={styles.modal}>
        <button onClick={() => props.showEditModal()} className={styles.modalClose}>
              x
        </button>
          {props.children}
        </div>
      </div>
    );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  showModal: PropTypes.bool,
  showEditModal: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
