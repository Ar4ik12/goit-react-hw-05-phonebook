import React from "react";
import styles from "./Allert.module.css";
import { CSSTransition } from "react-transition-group";
import allert from "../../transition/allert.module.css";

const Allert = ({ submitContact, active }) => (
  <CSSTransition
    timeout={250}
    in={active}
    classNames={allert}
    transition-duration={1000}
    unmountOnExit
  >
    <div onChange={submitContact} className={styles.allertDiv}>
      <p>Name already taken!</p>
    </div>
  </CSSTransition>
);

export default Allert;
