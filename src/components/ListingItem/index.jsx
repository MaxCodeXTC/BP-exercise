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
      title: '',
      url: '',
      id: '',
      showServerError: false,
      showModal: false,
    };
    
  }

  componentDidMount() {
    const { title, url, id } = this.props.listing;
    this.setState({ title, url, id });
  }

  // rerender components one the parent containers state changes
  componentWillReceiveProps(nextProps) {
    const { title, url, id } = nextProps.listing;
    this.setState({ title, url, id });  
  }

  showEditModal() {
    return this.setState({ showModal: !this.state.showModal });
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
          listing={this.state}
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
  id: PropTypes.string,
  onDeletePress: PropTypes.func,
  handleEditSubmit: PropTypes.func,
};

export default ListingItem;
