import React from 'react';
import "./../css/Project.css";

export default class Project extends React.Component {
    state = {
        textToAnimate: ""
    }
    componentDidMount() {
        if (this.props.textAnimation) {
            this.animateText();    
        }
    }
    animateText = () => {
        const textLine1 = "http://someSuperLongAnnoyingURL.com/aCrazyCodeThatNoOneCouldPossilbyRemeber";
        const textLine2 = "kevins-kustom-links.com/soothingShortURL"
        let counter = 0;
        let text = textLine1;

        const addLetter = () => {
            this.setState((prevState) => {
                const newText = text.slice(0, counter);
                counter++;
                if (counter > text.length) {
                    setTimeout(() => {
                        counter = 0;
                        text = textLine2;
                    }, 1000)
                    
                }
                return {
                    textToAnimate: newText
                }

            });
        }

        let typeURL = setInterval(addLetter, 100);
    }

    checkForImage = () => {
        if (this.props.image) {
            return <img src={this.props.image} alt={this.props.image} />
        }
        if (this.props.textAnimation) {
            return <p>{this.state.textToAnimate}</p>
        }

    }

    render() {
        return(
        <div className="project">
                {this.checkForImage()}
        </div>
        )    
    }  
}

