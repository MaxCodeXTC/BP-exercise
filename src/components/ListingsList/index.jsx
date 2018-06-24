import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import ListingItem from '../ListingItem';

const ListingsList = (props) => {

  // render loading / no listings / current listings
  const renderListings = ()  => {
    const { listings, loading, onDeletePress } = props;

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
};

export default ListingsList;