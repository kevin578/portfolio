import React from "react";
import classNames from "classnames";
import "./../css/Navbar.css";

export default class Navbar extends React.Component {
  state = {
    navShrink: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.isScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isScrolling);
  }

  isScrolling = () => {
    if (window.scrollY > 140) {
      this.setState(() => ({
        navShrink: true
      }));
    } else {
      this.setState(() => ({
        navShrink: false
      }));
    }
  };

  render() {
    let navClass = classNames({
      navbar: true,
      navbar_shrink: this.state.navShrink
    });

    let navItemClass = classNames({
      navbar__links: true,
      navbar_link_shrink: this.state.navShrink
    });

    return (
      <div className={navClass}>
        <div className={navItemClass}>
          <span
            className="navbar__link"
            onClick={() => this.props.scrollDown("Header")}
          >
            Home
          </span>
          <span
            className="navbar__link"
            onClick={() => this.props.scrollDown("Projects")}
          >
            Projects
          </span>
          <span
            className="navbar__link"
            onClick={() => this.props.scrollDown("About")}
          >
            About
          </span>
          <span
            className="navbar__link"
            onClick={() => this.props.scrollDown("Contact")}
          >
            Contact
          </span>
        </div>
      </div>
    );
  }
}
