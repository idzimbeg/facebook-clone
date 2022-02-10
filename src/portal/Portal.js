import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import Messenger from "../components/Messenger/Messenger";

const portalElement = document.getElementById("portal");

const Portal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const portalContent = show ? <Messenger onClose={handleCloseClick} /> : null;
  if (isBrowser) {
    return (
      <Fragment>{ReactDOM.createPortal(portalContent, portalElement)}</Fragment>
    );
  } else {
    return null;
  }
};

export default Portal;
