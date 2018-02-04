import React from 'react';
import "./../../css/Projects.css";
import football from './../../img/football.svg'

    
export default class FantastFootball extends React.Component {
    render() {
        return (
            <div className = "exampleProjects">
                <img src={football} className = 'footballPic' />
            </div>    
        )
    }
}