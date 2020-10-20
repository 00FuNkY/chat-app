import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <div className="name">
            <h4>{this.props.name}</h4>
          </div>
          <div className="status">
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <p
              onClick={(event) => {
                const newStatus = !this.state.online;
                this.setState({online : newStatus})
              }}
              className="status-text"
            >
              {this.state.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
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
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  Online: PropTypes.bool,
};

export default Contact;
