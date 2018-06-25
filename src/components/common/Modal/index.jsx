import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Modal = (props) => {

    if(!props.showModal) {
      return null;
    }
    return (
      <div className={styles.modalBackDrop}>
        <div className={styles.modal}>
          <a type="button" onClick={() => props.modalClose() }><i className={`${styles.modalClose} fas fa-times`}></i></a>
          {props.children}
        </div>
      </div>
    );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  showModal: PropTypes.bool,
  showEditModal: PropTypes.func,
  modalClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;

    {/* <div className={styles.modalContainer}>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
        {props.children}
        </div>
      </div>
    </div> */}