import React from 'react';
import "./../css/Projects.css";
import FantasyFootball from './exampleProjects/FantasyFootball';
import LinkShortener from './exampleProjects/LinkShortener';
import Simon from './exampleProjects/Simon';

export default class Projects extends React.Component {
    
    render() {
        return (
        <div className="projects">
                <FantasyFootball /> 
                <LinkShortener />
                <Simon />
        </div>
    )   
    }

}