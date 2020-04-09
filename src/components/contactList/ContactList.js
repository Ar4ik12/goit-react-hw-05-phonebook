import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slide from "../../transition/contact.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <>
    <TransitionGroup component="ul">
      {contacts.map((contact) => (
        <CSSTransition
          key={contact.id}
          timeout={2500}
          classNames={slide}
          unmountOnExit
        >
          <ContactListItem
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default ContactList;
