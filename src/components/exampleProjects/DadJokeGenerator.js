import React from 'react';
import "./../../css/Projects.css";
import dadJoke from './../../img/dadJoke.svg';

export default class DadJokeGenerator extends React.Component {
    render() {
        return (
            <div className='exampleProjects'>
                <img src={dadJoke} className="dadJokePic" />
                
            </div>    
        )
    }
}