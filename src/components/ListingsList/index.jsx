import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import Spinner from '../common/Spinner';
import ListingItem from '../ListingItem';

const ListingsList = (props) => {

  // render loading / no listings / error / current listings
  const renderListings = ()  => {
    const { listings, loading, showServerError, showDeleteModal, onDeletePress, handleEditSubmit } = props;

    if(loading) {
      return <Spinner />;
    } 
    
    else if(listings.length < 1 ) {
      return <h2>No Listings Available</h2>;
    }

    else if(showServerError) {
      return <h2>We are having trouble retrieving your listings at this time.</h2>;
    }

    return (
      listings.map((listing, index) => {
        return(
          <ListingItem
            key={index}
            listing={listing}
            onDeletePress={onDeletePress}
            handleEditSubmit={handleEditSubmit}
            showDeleteModal={showDeleteModal}
          />
        );
      })
    );
  };

  return (
    <section className={styles.listingsList}>
      {renderListings()}
    </section>
  );
};

ListingsList.propTypes = {
  listings: PropTypes.array,
  loading: PropTypes.bool,
  showServerError: PropTypes.bool,
  className: PropTypes.string,
  renderListings: PropTypes.func,
  onDeletePress: PropTypes.func,
  handleEditSubmit: PropTypes.func,
  showDeleteModal: PropTypes.bool,
};

export default ListingsList;