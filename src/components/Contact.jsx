import React from "react";
import PropTypes from 'prop-types';
import "./Contact.css";




function Contact({name,avatar,online}) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={avatar}
        alt={name}
      />
      <div>
        <div className="name">
          <h4>{name}</h4>
        </div>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}





/* function Contact({name,avatar,online}) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={avatar}
        alt={name}
      />
      <div>
        <div className="name">
          <h4>{name}</h4>
        </div>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
} */

Contact.propTypes = {
  name : PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  Online : PropTypes.bool,
}

export default Contact;
