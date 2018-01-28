import React from "react";
import "./../css/Header.css";
import profile from "./../img/profile.jpg";

const Header = () => (
    <div className="header">  
        <div className = "header__content">    
            <img src={profile} class="header__content__img" />
            <h1 className = "header__content__name">Kevin Briggs</h1>
            <h2 className = "header__content__description">Front End Developer & Teacher</h2> 
        </div>
    </div>
)

export default Header;