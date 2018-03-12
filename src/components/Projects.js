import React from 'react';
import "./../css/Projects.css";
import SingleProject from './SingleProject.js'
import football from './../img/football.svg'
import scissors from './../img/scissors.svg';
import simon from './../img/simon.svg';
import mrtk from './../img/mrtk1.png';
import tomato from './../img/tomato.png';
import dadJoke from './../img/dadJoke.svg';
    
export default class Projects extends React.Component {
    
    render() {
        return (
        <div className="projects">
            <SingleProject
                projectIMG={football}
                projectTitle="Fantasy Football App"
                projectSubtitle = "A fantasy football scorekeeper made with React"   
                projectURL = "http://fireleaguefallout.surge.sh/" 
            />
            
            <SingleProject
                projectIMG={scissors}
                projectTitle="Link Shortener"
                projectSubtitle = "App to create custom short links. Built with Node.js and MongoDB" 
                projectURL = "https://kevins-kustom-links.herokuapp.com/"   
                />
            
            <SingleProject
                projectIMG={simon}
                projectTitle="Simon"
                projectSubtitle = "Remake of the classic game. Uses Promises and navigable SVGs."    
                projectURL = "http://simongamedekevin.surge.sh/"
            />
            <SingleProject
                projectIMG={mrtk}
                projectTitle="mrteacherkevin"
                projectSubtitle = "My educational site."   
                projectURL = "http://mrteacherkevin.com/" 
            />
            
            <SingleProject
                projectIMG={tomato}
                projectTitle="Pomodoro Clock"
                projectSubtitle = "Pomodoro clock programmed with Vue."   
                projectURL = "http://clockdepomodoro.surge.sh/" 
            />
            
            <SingleProject
                projectIMG={dadJoke}
                projectTitle="Dad Joke Generator"
                projectSubtitle = "Fun app that gives you a bunch of dad jokes."
                projectURL = "http://kevinsdadjokegenerator.surge.sh/"    

            />  
                
        </div>
    )   
    }

}