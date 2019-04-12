import React from "react";
import "./../css/Header.css";
import profile from "./../img/profile.jpg";
import arrow from "./../img/arrow1.svg"

export default class Header extends React.Component {

    render() {

        return  (
            <div className="header">  
                <div className = "header__content">    
                    <img src={profile} className="header__content__img"  alt = ""/>
                    <h1 className = "header__content__name">Kevin Briggs</h1>
                    <h2 className="header__content__description">Web Developer</h2>
                    <div className = "cursor-hover-area" onClick={()=>this.props.scrollDown('Projects')}>
                        <object data={arrow}  aria-label = "" type="image/svg+xml" className="header__arrow"></object>
                    </div>   
                    
                </div>
            </div>
        )
        


    }

}