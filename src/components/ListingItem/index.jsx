import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import Icon from '../common/Icon';

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
        <div className={styles.iconContainer}>
          <Icon iconClass="fas fa-pen" />
          <Icon iconClass="fa fa-trash" />
        </div>
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
