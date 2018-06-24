import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class EditListingForm extends Component {
  constructor(props) {
    super(props);
    const { title, url, id } = this.props.listing;
    this.state = {
      title,
      url,
      id,
      showError: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, url, id } = this.state;

    return this.props.handleEditSubmit(title, url, id).then(() => {
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
      [name]: value
    });
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
          <div className={styles.buttonsContainer}>
            <button className={`${styles.cancel} ${styles.button}`} onClick={() => this.props.modalClose()}>Cancel</button>
            <button className={`${styles.create} ${styles.button}`}>Update</button>
          </div>
        </form>
      </div>
    );
  }
}

EditListingForm.propTypes = {
  className: PropTypes.string,
  listing: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  handleEditSubmit: PropTypes.func,
  modalClose: PropTypes.func,

};

export default EditListingForm;
