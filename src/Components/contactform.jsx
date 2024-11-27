
import React from 'react';
import './style/contactform.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      contactNumber: '',
      message: '',
    };

    // Binding methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Log form data
    console.log('Form Data Submitted:', this.state);

    // Reset the form
    this.setState({
      name: '',
      email: '',
      contactNumber: '',
      message: '',
    });
  }

  render() {
    return (
      <div className="contact-form-container">
        <h2>Connect with Us</h2>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              value={this.state.contactNumber}
              onChange={this.handleInputChange}
              placeholder="Your Contact Number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              placeholder="Your Message"
              required
            />
          </div>

          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
