import React, {Component} from 'react'


//prop=> button_text

class QuizQuestionButton extends Component{

    render(){
        return( 
        <li>
            <button>
                {this.props.button_text}
            </button>
        </li>
        )
    }
}

export default QuizQuestionButton;