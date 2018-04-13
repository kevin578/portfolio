import React from "react";
import "./../css/Contact.css";
import FontAwesome from "react-fontawesome";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__info">
          <div className="contact__info__icons">
            <a
              href="https://github.com/kevin578"
              target="_blank"
              className="contact__info__links"
              rel="noopener noreferrer"
            >
              <FontAwesome className="fas" name="github" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCeebzVOg5Iv4hVqKTFdaqUQ"
              target="_blank"
              className="contact__info__links"
              rel="noopener noreferrer"
            >
              <FontAwesome className="fas" name="youtube" />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-briggs-494b6354/"
              target="_blank"
              className="contact__info__links"
              rel="noopener noreferrer"
            >
              <FontAwesome className="fas" name="linkedin" />
            </a>
          </div>
          <p className="contact__info__text">kevinbriggs1@gmail.com</p>
          <p className="contact__info__text">Worcester, MA 01604</p>
        </div>

        <div className="contact__form">
          <form
            method="POST"
            action="https://formspree.io/kevinbriggs1@gmail.com"
          >
            <h2 className="contact__form__title">
              Wanna make something together?
            </h2>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="contact__form__input contact__form__email"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="contact__form__input contact__form__message"
            />
            <button type="submit" className="contact__form__button">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
