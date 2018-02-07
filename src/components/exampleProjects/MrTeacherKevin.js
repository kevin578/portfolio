import React from 'react';
import "./../../css/Projects.css";
import mrtk from './../../img/mrtk.png';

export default class MrTeacherKevin extends React.Component {
    render() {
        return (
            <div className='exampleProjects'>
                <img src={mrtk} className="mrtkPic" />
                
            </div>    
        )
    }
}