import React from "react";
import "./../css/Contact.css";
import FontAwesome from "react-fontawesome";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__icons">
          <FontAwesome name="github" />
          <FontAwesome name="youtube" />
          <FontAwesome name="linkedin" />
          <FontAwesome className="fas" name="envelope" />
        </div>

        <div className="contact_form">
          <form
            method="POST"
            action="https://formspree.io/kevinbriggs1@gmail.com"
          >
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}
