import React from 'react';
import PropTypes from 'prop-types';

import ListingItem from '../ListingItem';

const ListingsList = (props) => {

  const renderListings = ()  => {
    const { listings, loading, onDeletePress, showEditModal, handleEditSubmit } = props;
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
            handleEditSubmit={handleEditSubmit}
          />
        );
      })
    );
  };

  return (
    <div>
      {renderListings()}
    </div>
  );
};

ListingsList.propTypes = {
  listings: PropTypes.array,
  loading: PropTypes.bool,
  className: PropTypes.string,
  renderListings: PropTypes.func,
  onDeletePress: PropTypes.func,
  showEditModal: PropTypes.func,
  handleEditSubmit: PropTypes.func,
};

export default ListingsList;