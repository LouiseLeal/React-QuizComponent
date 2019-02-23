import React, {Component} from 'react'


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
                    <li>{this.props.quiz_question.answer_options[0]}</li>
                </ul>
                </section>
            </main>
        )   
    }
}

export default QuizQuestion