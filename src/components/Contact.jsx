import React from "react";

import "./Contact.css";

const Online = true;

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/65.jpg"
        alt="avatarphoto"
      />
      <div>
        <div className="name">
          <h4>Willie Stone</h4>
        </div>
        <div className="status">
          <div className={Online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{Online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
