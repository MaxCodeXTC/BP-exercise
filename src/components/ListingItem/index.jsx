import React, { Component } from 'react';
import PropTypes from 'prop-types';
import client from '../../services/client';
import styles from './styles.scss';

import Icon from '../common/Icon';
import Modal from '../common/Modal';
import EditListingForm from '../EditListingForm';

class ListingItem extends Component {
  constructor(props) {
    super(props);
    const { title, url, id } = props.listing;
    this.state = {
      title,
      url,
      id,
      showServerError: false,
      showModal: false,
    };
    
  }

  showEditModal() {
    return this.setState({ showModal: !this.state.showModal });
  }

  handleEditSubmit(title, url, id) {
    return client.editListing(title, url, id).then((response) => {

      const { title, url } = response;
      this.setState({ title, url });
      
      }).catch(() => {
        return this.setState({ showServerError: true });
      });
  }

  render() {
    const { title, url, id } = this.state;
    return (
      <article className={styles.listingItem}>
        <div className={styles.iconContainer}>
          <span onClick={() => this.showEditModal()}><Icon iconClass="fas fa-pen" /></span>
          <span onClick={() => this.props.onDeletePress(id)}><Icon iconClass="fa fa-trash" /></span>
        </div>
        <h2>{title}</h2> 
        <h3>{url}</h3>
      <Modal 
        showModal={this.state.showModal}
        modalClose={this.showEditModal.bind(this)}>
        <EditListingForm 
          listing={this.props.listing}
          handleEditSubmit={this.handleEditSubmit.bind(this)}
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
};

export default ListingItem;
