import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const DeleteListingDialogue = (props) => {
 const { listing, modalClose, onDeletePress } = props;
  return (
    <section className="deleteDialogueBody">
      <h3>Are you sure you want to delete this listing? </h3>
      <div className={styles.buttonsContainer}>
        <button className={`${styles.cancel} ${styles.button}`} onClick={() => modalClose()}>Cancel</button>
        <button className={`${styles.confirm} ${styles.button}`} onClick={() => onDeletePress(listing.id)} >Update</button>
      </div>
    </section>
  );
};

DeleteListingDialogue.propTypes = {
  listing: PropTypes.object,
  modalClose: PropTypes.func,
  onDeletePress: PropTypes.func,
};

export default DeleteListingDialogue;