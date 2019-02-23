import React, {Component} from 'react'

class QuizQuestion extends Component{

    render(){
        return (
            <main>
                <section>
                <p>{this.props.instruction_tex}t</p>
                </section>
                <section className="buttons">
                <ul>
                    //quiz question button logic goes here
                </ul>
                </section>
            </main>
        )   
    }
}

export default QuizQuestion