import React from 'react';
import "./../css/Projects.css";
import "./../css/SingleProject.css"
import classNames from 'classnames';
    
export default class SingleProject extends React.Component {
    
    state = {
        isHovering: false
    }

    hoverEffect = (isHovering) => {
        this.setState(() => ({
            isHovering: isHovering
        }));

    }
    
    render() {

        let divClass = classNames({
            singleProject: true,
            singleProjectHover: this.state.isHovering
        });

        let imgClass = classNames({
            singleProject__img: true,
            singleProject__imgHover: this.state.isHovering
        })
        
        let textClass = classNames({
            singleProject__text: true,
            singleProject__textHover: this.state.isHovering
        }) 

        return (
            <a href = {this.props.projectURL} target = "_blank">
            <div className={divClass} onMouseLeave={()=> this.hoverEffect(false)} >
                <img src={this.props.projectIMG} className={imgClass} onMouseEnter={()=> this.hoverEffect(true)}/>
                <div className={textClass}>
                    <p className="singleProject__text__title">{this.props.projectTitle}</p>
                    <p className="singleProject__text__sub">{this.props.projectSubtitle}</p>
                </div>
                </div>   
            </a>    
        )
    }
}