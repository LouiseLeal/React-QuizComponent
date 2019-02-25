import React, {Component} from 'react'


//prop=> button_text
 //       key
 //      clickHandler()

class QuizQuestionButton extends Component{

    handleClick(){
        this.props.clickHandler(this.props.button_text)
    }

    render(){
        return( 
        <li key={this.props.key}>
            <button value={this.props.button_text} onClick={this.handleClick.bind(this)}>{this.props.button_text} </button>
        </li>
        )
    }
}

export default QuizQuestionButton;