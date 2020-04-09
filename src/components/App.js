import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { CSSTransition } from "react-transition-group";
import style from "./App.module.css";
import logo from "../transition/slide.module.css";
import Allert from "./allert/Allert";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    inUp: false,
    alert: false,
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : [];
    this.setState({ contacts, inUp: true });
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = (data) => {
    const isNameExist = this.state.contacts.some(
      (contact) => contact.name === data.name
    );
    if (!isNameExist) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, data],
      }));
    } else {
      this.setState({ alert: true });
    }
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterByName = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };
  toLoverCase;
  render() {
    return (
      <div className={style.container}>
        <CSSTransition in={this.state.inUp} timeout={500} classNames={logo}>
          <h1 className={style.logo}>Phonebook</h1>
        </CSSTransition>
        <ContactForm submitContact={this.submitContact} />

        <h2>Contacts</h2>

        <Filter
          flag={this.state.contacts.length > 2 ? true : false}
          filterByName={this.filterByName}
        />

        <ContactList
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />

        <Allert
          active={this.state.alert ? true : false}
          submitContact={this.submitContact}
        />
      </div>
    );
  }
}

export default App;
