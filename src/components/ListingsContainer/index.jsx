import React, { Component } from 'react';
import client from '../../services/client';
import styles from './styles.scss';
import Header from '../common/Header';
import NewListingForm from '../NewListingForm';
import ListingsList from '../ListingsList';

class ListingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      loading: true,
      showServerError: false,
      showModal: false,
    };
  }

  componentDidMount() {
    return client.getListings().then(listings => {
      return this.setState({ listings: listings, loading: false, showServerError: false });
    }).catch(() => {
      return this.setState({ showServerError: true });
    });
  }

  handleSubmit(title, url) {
    let listings = this.state.listings.slice();

    return client.createListing(title, url).then(listing => {
      listings.push(listing);

      return this.setState({
        listings: listings,
        showServerError: false
      });
    });
  }

  handleEditSubmit(title, url, id) {
    return client.editListing(title, url, id).then(() => {
      return client.getListings().then(listings => {
        return this.setState({ listings: listings, loading: false, showServerError: false });
      }).catch(() => {
        return this.setState({ showServerError: true });
      });
    });
  }

  onDeletePress(listing) {
    this.setState({ loading: true });
    return client.deleteListing(listing).then(() => {
      return client.getListings().then(listings => {
        return this.setState({ listings: listings, loading: false, showServerError: false });
      }).catch(() => {
        return this.setState({ showServerError: true });
      });
    });
  }

  showEditModal() {
    return this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return(
      <div className={styles.container}>
      <Header title="Listings" />
        <main>
          <NewListingForm
            className={styles.newListingForm}
            onSubmit={(title, url) => this.handleSubmit(title, url)}
          />
        </main>
        <ListingsList
          className={styles.listings}
          listings={this.state.listings}
          loading={this.state.loading}
          onDeletePress={this.onDeletePress.bind(this)}
          showEditModal={this.showEditModal.bind(this)}
          handleEditSubmit={this.handleEditSubmit.bind(this)}
        />
      </div>
    );
  }

}

export default ListingsContainer;