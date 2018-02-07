import React from 'react';
import "./../../css/Projects.css";
import tomato from "./../../img/tomato.png";

export default class Pomodoro extends React.Component {
    render() {
        return (
            <div className='exampleProjects'>
                <img src={tomato} className="tomatoPic" />
                
            </div>    
        )
    }
}