import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class NewListingForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: '',
      showError: false,
      error: ''
    };
  }

  // creates a new listing
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    const url = this.state.url;

    return this.props.onSubmit(title, url).then(() => {
      return this.setState({ title: '', url: '', showError: false });
    }).catch(() => {
      return this.setState({ showError: true });
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      showError: false
    });
  }

  renderError() {
    if(!this.state.showError) {
      return null;
    }

    return (
      <p className={styles.error}>Please fill in all form fields*</p>
    );
  }

  render() {
    return(
      <div className={this.props.className}>
        <form className={styles.newListing} onSubmit={(event) => this.handleSubmit(event)}>
          <fieldset>
            <input
              type="text"
              placeholder="Name"
              name="title"
              value={this.state.title}
              onChange={(event) => this.handleInputChange(event)}
              aria-label="Name"
              aria-required="true"
            />
            <input
              type="url"
              placeholder="URL"
              name="url"
              value={this.state.url}
              onChange={(event) => this.handleInputChange(event)}
              aria-label="URL"
              aria-required="true"
            />
          </fieldset>
          <button className={`${styles.create} ${styles.button}`}>Enter</button>
          {this.renderError()}
        </form>
      </div>
    );
  }
}

NewListingForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

export default NewListingForm;
