import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListingItem from '../ListingItem';

class ListingsList extends Component {
  constructor(props) {
    super(props);
  }

  renderListings() {
    const { listings, loading, onDeletePress } = this.props;
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
  }

  render() {
    return (
      <div>
        {this.renderListings()}
      </div>
    );
  }
}

ListingsList.propTypes = {
  listings: PropTypes.array,
  loading: PropTypes.bool,
  className: PropTypes.string,
  renderListings: PropTypes.func,
  onDeletePress: PropTypes.func,
};

export default ListingsList;