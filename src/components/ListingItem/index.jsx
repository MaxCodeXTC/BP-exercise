import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import Icon from '../common/Icon';
import Modal from '../common/Modal';
import EditListingForm from '../EditListingForm';

class ListingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    
  }

  showEditModal() {
    return this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { title, url } = this.props.listing;
    return (
      <article className={styles.listingItem}>
        <div className={styles.iconContainer}>
          <span onClick={() => this.showEditModal()}><Icon iconClass="fas fa-pen" /></span>
          <span onClick={() => this.props.onDeletePress(this.props.listing)}><Icon iconClass="fa fa-trash" /></span>
        </div>
        <h2>{title}</h2> 
        <h3>{url}</h3>
      <Modal 
        showModal={this.state.showModal}
        modalClose={this.showEditModal.bind(this)}>
        <EditListingForm 
          listing={this.props.listing}
          handleEditSubmit={this.props.handleEditSubmit}
          modalClose={this.showEditModal.bind(this)}
        />
      </Modal>
      </article>
    );
  }
}

ListingItem.propTypes = {
  listing: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
  onDeletePress: PropTypes.func,
  handleEditSubmit: PropTypes.func,
};

export default ListingItem;
