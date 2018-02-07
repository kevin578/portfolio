import React from "react";
import "./../css/Header.css";
import profile from "./../img/profile.jpg";
import arrow from "./../img/arrow1.svg"

const Header = () => (
    <div className="header">  
        <div className = "header__content">    
            <img src={profile} className="header__content__img" />
            <h1 className = "header__content__name">Kevin Briggs</h1>
            <h2 className="header__content__description">Front End Developer & Teacher</h2>
            <a href = "#" className = "cursor-hover-area">
                <object data={arrow} type="image/svg+xml" className="header__arrow"></object>
            </a>   
            
        </div>
    </div>
)

export default Header;