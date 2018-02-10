
import React from 'react';
import "./../css/Navbar.css";




export default class Navbar extends React.Component {


    render() {
        return (
            <div className="navbar">
                <div className="navbar__links">
                    <span className = "navbar__link" onClick={()=>this.props.scrollDown('Header')}>Home</span>
                    <span className="navbar__link" onClick={()=>this.props.scrollDown('Projects')}>Projects</span>
                    <span className="navbar__link" onClick={()=>this.props.scrollDown('About')}>About</span>
                    <span className="navbar__link">Contact</span>
                </div>
            </div>
        )
    }
}    