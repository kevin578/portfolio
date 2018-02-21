import React from "react";
import "./../css/Contact.css";
import FontAwesome from "react-fontawesome";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__info">
          <div className="contact__info__icons">
            <FontAwesome className="fas" name="github" />
            <FontAwesome className="fas" name="youtube" />
            <FontAwesome className="fas" name="linkedin" />
          </div>
          <p className="contact__info__text">kevinbriggs1@gmail.com</p>
          <p className="contact__info__text">Worcester, MA 01604</p>
        </div>

        <div className="contact__form">
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
