import React from 'react';
import "./../../css/Projects.css";
import classNames from 'classnames';
import football from './../../img/football.svg';
    
export default class FantastFootball extends React.Component {
    
    state = {
        footballHover: false
    }

    hoverEffect = (isHovering) => {
        this.setState(() => ({
            footballHover: isHovering
        }));

    }
    


    render() {

        let divClass = classNames({
            exampleProjects: true,
            football: true
        });

        let imgClass = classNames({
            football__img: true,
            footballHover: this.state.footballHover
        })
        
        let textClass = classNames({
            football__text: true,
            football__textHover: this.state.footballHover
        }) 

        return (
            <a href = "http://fireleaguefallout.surge.sh/" target = "_blank">
            <div className={divClass} onMouseLeave={()=> this.hoverEffect(false)} onMouseEnter={()=> this.hoverEffect(true)}>
                <img src={football} className={imgClass} />
                <div className={textClass}>
                    <p className="football__text__title">Fantasy Football App</p>
                    <p className = "football__text__sub">A fantasy football scorekeeper made with React</p>
                </div>
                </div>   
            </a>    
        )
    }
}