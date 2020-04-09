import React from "react";
import { CSSTransition } from "react-transition-group";
import slide from "../../transition/slide.module.css";

const Filter = ({ filterByName, flag }) => (
  <CSSTransition timeout={250} in={flag} classNames={slide} unmountOnExit>
    <div>
      <p>Find contact by name</p>
      <input type="text" onChange={filterByName} />
    </div>
  </CSSTransition>
);

export default Filter;
