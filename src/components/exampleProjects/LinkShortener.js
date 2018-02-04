import React from 'react';
import './../../css/Projects.css';
import classNames from 'classnames';

export default class LinkShortener extends React.Component {

    state = {
        textToAnimate: "",
        showButton: false,
        buttonIsPressed: false,
    }
    componentDidMount() {
        this.animateText();    
    }
    
    animateText = () => {
        const textLine1 = "http://someSuperLongAnnoyingURL.com/PlusAnIllegibleCodeWhereOand0LookExactlyTheSame";
        let counter = 0;
        let text = textLine1;

        const addLetter = () => {
            this.setState((prevState) => {
                const newText = text.slice(0, counter);
                counter++;
                if (counter > text.length + 1) {
                    this.buttonPress();
                    clearInterval(typeURL);
                    return {showButton: true}                    
                }
                return {
                    textToAnimate: newText
                }

            });
        }

        let typeURL = setInterval(addLetter, 100);
    }

    buttonPress = () => {

        const buttonDownWait = 600;
        const buttonUpWait = 400 + buttonDownWait;
        const textWait = 500 + buttonUpWait;
        const resetWait = 8000 + textWait;
        
        this.setState(() => ({
            showButton: true,
        }));

        setTimeout(() => {
            this.setState(() => ({
                buttonIsPressed: true,
                
            }));
        }, buttonDownWait);


        setTimeout(() => {
            this.setState(() => ({
                buttonIsPressed: false,     
            }));
        }, buttonUpWait);

        setTimeout(() => {
            this.setState(() => ({
                textToAnimate: `kevins${String.fromCharCode(8209)}kustom${String.fromCharCode(8209)}links.com/soothingShortURL`
            }));
        }, textWait);

        setTimeout(() => {
            this.setState(() => ({
                showButton: false
            }));
            this.animateText();
        }, resetWait);

    }


    render() {

        let btnClass = classNames({
            'button': true,
            'button-pressed': this.state.buttonIsPressed
        })


        return (
            <div className='exampleProjects'>
                <div className = 'urlShortener'>    
                    <p>{this.state.textToAnimate}</p>
                     {   this.state.showButton &&
                        <div className={btnClass}>Shorten!</div>
                     }         
                </div>
            </div>    
        )
    }
}