import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import ListingItem from '../ListingItem';

const ListingsList = (props) => {

  const renderListings = ()  => {
    const { listings, loading, onDeletePress, showEditModal } = props;
    if(loading) {
      return <h2>Loading...</h2>;
    } 
    
    else if(listings.length < 1 ) {
      return <h2>No Listings Available</h2>;
    }

    return (
      listings.map((listing, index) => {
        return(
          <ListingItem
            key={index}
            listing={listing}
            onDeletePress={onDeletePress}
            showEditModal={showEditModal}
          />
        );
      })
    );
  };

  return (
    <section className={styles.listingsContainer}>
      {renderListings()}
    </section>
  );
};

ListingsList.propTypes = {
  listings: PropTypes.array,
  loading: PropTypes.bool,
  className: PropTypes.string,
  renderListings: PropTypes.func,
  onDeletePress: PropTypes.func,
  showEditModal: PropTypes.func,
};

export default ListingsList;