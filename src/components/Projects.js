import React from "react";
import "./../css/Projects.css";
import SingleProject from "./SingleProject.js";
import football from "./../img/football.svg";
import gradCap from "./../img/grad.png";
import simon from "./../img/simon.svg";
import mrtk from "./../img/mrtk1.png";
import passport from "./../img/passport.png";
import pet from "./../img/pet.png";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        
        <SingleProject
          projectIMG={mrtk}
          projectTitle="mrteacherkevin"
          projectSubtitle="This is the educational site I created for my students. It's a social LMS that tracks student progress as they follow tutorials, allows them to submit finished work, and vote on other students’ projects. It's built with React, Redux, Node, Express, and MongoDB."
          projectURL="https://mrteacherkevin.herokuapp.com"
        />

        <SingleProject
          projectIMG={gradCap}
          projectTitle="Advisor App"
          projectSubtitle="This is a native iOS and Android app for Clark University's LEEP Center, allowing students to access personalized, Clark-specific information at any point. Built with React Native and a headless Wordpress backend."
          projectURL="https://github.com/kevin578/AdviserApp"
        />

        <SingleProject
          projectIMG={passport}
          projectTitle="Clark Predeparture"
          projectSubtitle="This app was built to help transition Clark University's Office of Study Abroad from an analog, in-person pre-departure process to a digital platform. It's built with a React frontend and a serverless AWS backend (Lambda, API Gateway, S3, DynamoDB, Cognito)."
          projectURL="https://clark-predeparture.surge.sh"
        />

        <SingleProject
          projectIMG={pet}
          projectTitle="Cute or Not"
          projectSubtitle="For this app, I served as the project manager for a remote development team. It's a full-stack MERN app that allows users to upload pictures of their pets and vote on which ones they think are the cutest."
          projectURL="http://cuteornotapp.herokuapp.com/"
        />
      </div>
    );
  }
}
