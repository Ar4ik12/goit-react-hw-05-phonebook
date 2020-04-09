import React from "react";
import style from "./ContactListItem.module.css";

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => (
  <li className={style.item}>
    <span> {name}: </span>
    <span> {number}</span>
    <button
      type="button"
      id={id}
      onClick={deleteContact}
      className={style.button}
    >
      delete
    </button>
  </li>
);

export default ContactListItem;
