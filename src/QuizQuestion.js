import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'



//props => quiz_qqiestion = {instruction_text: string,
//                            answer_options: []
//                             answer: string}

class QuizQuestion extends Component{

    render(){
        return (
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} />
                </ul>
                </section>
            </main>
        )   
    }
}

export default QuizQuestion