import React from 'react';
import "./../../css/Projects.css";
import simon from './../../img/simon.svg';

export default class DadJokeGenerator extends React.Component {
    render() {
        return (
            <div className='exampleProjects'>
                <img src={simon} className="simonPic" />
                
            </div>    
        )
    }
}