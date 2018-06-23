import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.scss';

//ToDO import ListingItem from '../ListingItem';

class ListingsList extends Component {
  constructor(props) {
    super(props);
  }

  renderListings() {
    const { loading } = this.props;
    if(loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>List Item Component Here</div>
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