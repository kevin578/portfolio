import React from 'react';
import "./../css/Projects.css";
import SingleProject from './SingleProject.js'
import football from './../img/football.svg'
import scissors from './../img/scissors.svg';
import simon from './../img/simon.svg';
import mrtk from './../img/mrtk1.png';
import tomato from './../img/tomato.png';
import pet from './../img/pet.png';


export default class Projects extends React.Component {
    
    render() {
        return (

        <div className="projects">

            <SingleProject
            projectIMG={pet}
            projectTitle="Cute or Not"
            projectSubtitle = "For this app, I served as the project manager for a remote development team. It's a full stack MERN app that allows users to upload pictures of their pets and vote on which ones they think are the cutest."
            projectURL = "http://cuteornotapp.herokuapp.com/"    

            />  


            <SingleProject
                projectIMG={football}
                projectTitle="Fantasy Football App"
                projectSubtitle = "My friend was doing our fantasy football league scoring by hand, so I built this instead. It uses React to call the NFL's API and update live. I was nervous during game time deployment, but it worked like a charm."   
                projectURL = "http://fireleaguefallout.surge.sh/" 
            />
            
            <SingleProject
                projectIMG={scissors}
                projectTitle="Link Shortener"
                projectSubtitle = "This app allows users to create custom links, similar to the site tinyurl.com. The backend uses Node.js and stores links in MongoDB." 
                projectURL = "https://kevins-kustom-links.herokuapp.com/"   
                />
            
            <SingleProject
                projectIMG={simon}
                projectTitle="Simon"
                projectSubtitle = "Remake of the classic game. This was the first project where I learned I could design an SVG in Illustrator and then instert each shape into the DOM. Mind blown. Given the sequential nature of the game, it also made me get my hands real dirty with Promises."    
                projectURL = "http://simongamedekevin.surge.sh/"
            />
            <SingleProject
                projectIMG={mrtk}
                projectTitle="mrteacherkevin"
                projectSubtitle = "When I started teaching technology, I would run around continuously trying to put out technical fires. I eventually started to make guides the students could follow without needing me. This is where they all lived. It's made with Wordpress."   
                projectURL = "http://mrteacherkevin.com/" 
            />
            
            <SingleProject
                projectIMG={tomato}
                projectTitle="Pomodoro Clock"
                projectSubtitle = "This is a Pomodoro clock to help increase productivity. Made with Vue, it was my first time using a framework. It's definitely not the most elegant use of Vue, but it works and is an app that I use in my daily life."   
                projectURL = "http://clockdepomodoro.surge.sh/" 
            />
            
                
        </div>
    )   
    }

}