import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListingItem from '../ListingItem';

class ListingsList extends Component {
  constructor(props) {
    super(props);
  }

  renderListings() {
    const { listings, loading } = this.props;
    if(loading) {
      return <h2>Loading...</h2>;
    }
    return (
      listings.map((listing, index) => {
        return(
          <ListingItem
            key={index}
            listing={listing}
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
  renderListings: PropTypes.func
};

export default ListingsList;