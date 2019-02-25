import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }

    render(){
        const isQuizEnd = ((this.state.quz_position -1) === quizData.quiz_questions.length)
        return(
            <div>
                {isQuizEnd ? <QuizEnd /> : 
                <div className="QuizQuestion">
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
                </div>
                }
            </div>
        )
    }
        
}

export default Quiz