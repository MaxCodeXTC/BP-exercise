import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import Icon from '../common/Icon';
import EditListingForm from '../EditListingForm';

const ListingItem =  (props) => {
  
  const { title, url } = props.listing;
  return (
    <div>
    <article className={styles.listingItem}>
      <div className={styles.iconContainer}>
        <span onClick={() => this.props.showEditModal()}><Icon iconClass="fas fa-pen" /></span>
        <span onClick={() => this.props.onDeletePress(this.props.listing)}><Icon iconClass="fa fa-trash" /></span>
      </div>
      <h2>{title}</h2> 
      <h3>{url}</h3>
    </article>
    <EditListingForm 
      listing={props.listing}
      handleEditSubmit={props.handleEditSubmit}
    />
    </div>
  );

};

ListingItem.propTypes = {
  listing: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
  onDeletePress: PropTypes.func,
  showEditModal: PropTypes.func,
  handleEditSubmit: PropTypes.func,
};

export default ListingItem;
