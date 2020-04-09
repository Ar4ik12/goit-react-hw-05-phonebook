import React, { Component } from "react";
import { uuid } from "uuidv4";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuid(),
    });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <br />
          <h2>Number</h2>
          <input
            placeholder="___-___-____"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
