import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import Icon from '../common/Icon';

class ListingItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, url } = this.props.listing;
    return (
      <article className={styles.listingItem}>
        <div className={styles.iconContainer}>
          <Icon iconClass="fas fa-pen" />
          <span onClick={() => this.props.onDeletePress(this.props.listing)}><Icon iconClass="fa fa-trash" /></span>
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
  url: PropTypes.string,
  onDeletePress: PropTypes.func
};

export default ListingItem;
