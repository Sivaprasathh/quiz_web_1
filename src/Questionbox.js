import quizService from "./quizService.js"
import './App.css';
import React from 'react'

class QuestionBox extends React.Component {
  
  render(){
      const {question} = this.props;
      const {options} = this.props;
      const {calculate} = this.props;
      const {correct} = this.props;
      const {Qkey} = this.props;
      const {response} = this.props;
      const {btn} = this.props;
    return(
     <div>
     <h4>{question}</h4>
     {options.map((text,index) => (
           <button 
           key =  {index}
           className = "answerBtn"
           onClick = {() =>{
             calculate(text,correct,Qkey)
             response(index)

           }}
           disabled={btn}
        >
            {text}
            </button>
        ))}
        
     </div>
    )
  }
}

export default QuestionBox;