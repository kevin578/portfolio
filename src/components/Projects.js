import React from 'react';
import "./../css/Projects.css";
import football from "./../img/football.svg";
import Project from './Project';
import simon from './../img/simon.svg';

const Projects = () => (
    <div className = "projects">
        <Project image={football}/>
        <Project textAnimation={true}/>
        <Project image={simon}/>
                        
    </div>    
)

export default Projects;