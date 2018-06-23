import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class ListingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.listing.title,
      url: props.listing.url
    };
  }

  render() {
    const { title, url } = this.state;
    return (
      <article className={styles.listingItem}>
        <h2>{title}</h2> 
        <h3>{url}</h3>
      </article>
    );
  }
}

ListingItem.propTypes = {
  listing: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string
};

export default ListingItem;
