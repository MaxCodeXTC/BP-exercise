import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class EditListingForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      url: '',
      id: '',
      showError: false
    };

  }

  componentDidMount() {
    const { title, url, id } = this.props.listing;
    this.setState({ title, url, id });
  }

  componentWillReceiveProps(nextProps) {
    const { title, url, id } = nextProps.listing;
    this.setState({ title, url, id });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, url, id } = this.state;

    this.props.handleEditSubmit(title, url, id).then(() => {

      // alow modal to close if submit is successful
      if(!this.state.showError) {
        this.props.modalClose();
      }

      // keep modal upoen and render error
    }).catch(() => {
      return this.setState({ showError: true });
    });
    
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // clear the error and allow submision once text starts to fill a field
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
      <p className={styles.error}>All fields must be filled to update this listing*</p>
    );
  }

  render() {

    return(
      <div>
        <h2 className={styles.editFormTitle}>Edit Listing</h2>
        <form className={styles.editListing} onSubmit={(event) => this.handleSubmit(event)}>
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
          {this.renderError()}

          <div className={styles.buttonsContainer}>
            <button className={`${styles.cancel} ${styles.button}`} onClick={() => this.props.modalClose()}>Cancel</button>
            <button className={`${styles.confirm} ${styles.button}`}>Update</button>
          </div>

        </form>
      </div>
    );
  }
}

EditListingForm.propTypes = {
  listing: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  handleEditSubmit: PropTypes.func,
  modalClose: PropTypes.func,
};

export default EditListingForm;
