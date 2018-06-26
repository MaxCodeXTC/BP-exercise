import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import Icon from '../common/Icon';
import Modal from '../common/Modal';

import EditListingForm from '../EditListingForm';
import DeleteListingDialogue from '../DeleteListingDialogue';

class ListingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      showEditModal: false,
      showDeleteModal: false
    };
    
  }

  componentDidMount() {
    this.setState({ listing: this.props.listing });
  }

  // rerender components one the parent containers state changes
  componentWillReceiveProps(nextProps) {
    this.setState({ listing: nextProps.listing, showDeleteModal: nextProps.showDeleteModal });
  }

  showEditModal() {
    return this.setState({ showEditModal: !this.state.showEditModal });
  }

  showDeleteModal() {
    return this.setState({ showDeleteModal: !this.state.showDeleteModal });
  }


  render() {
    const { title, url } = this.state.listing;
    
    return (
      <article className={styles.listingItem}>
        <div className={styles.iconContainer}>
          <a type="button" onClick={() => this.showEditModal()}><Icon iconClass="fas fa-pen" /></a>
          <a type="button" onClick={() => this.showDeleteModal()}><Icon iconClass="fa fa-trash" /></a>
        </div>
        <h2>{title}</h2> 
        <a href={url} target="_blank">{url}</a>

        <Modal 
          showModal={this.state.showEditModal}
          modalClose={this.showEditModal.bind(this)}>
          <EditListingForm 
            listing={this.state.listing}
            handleEditSubmit={this.props.handleEditSubmit}
            modalClose={this.showEditModal.bind(this)}
          />
        </Modal>

        <Modal
          showModal={this.state.showDeleteModal}
          modalClose={this.showDeleteModal.bind(this)}>
          <DeleteListingDialogue
            listing={this.state.listing} 
            onDeletePress={this.props.onDeletePress}
            modalClose={this.showDeleteModal.bind(this)}
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
  id: PropTypes.string,
  onDeletePress: PropTypes.func,
  handleEditSubmit: PropTypes.func,
  showDeleteModal: PropTypes.bool,
};

export default ListingItem;
