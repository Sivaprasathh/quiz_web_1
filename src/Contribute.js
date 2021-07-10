import React from 'react';
import Comments from './Comments';

class Contribute extends React.Component{
    constructor(){
        super();
        this.state={
            question:[],
            answer :[]
        }
    }
    handleData = (e)=>{
        e.preventDefault()
        let arr = [e.target.elements.question.value,...this.state.question];
       this.setState({
              question:arr
       })
    }
    insertAnswers = (answers)=>{
    //  let arr = [{answer:answers},...this.state.answer]
      let arr = [[answers],...this.state.answer];
      console.log(arr);
      this.setState({
          answer:arr,

      })
    }
    render(){
        return(
         <div>
            <h5>Contribute here</h5>
            <form onSubmit = {this.handleData}>
                <input type = "text" name = "question" id = "question"></input>
                <button type = "submit">Submit here</button>
            </form>
            {this.state.question.length != 0 ? 
            <Comments ques = {this.state} insertAnswers = {this.insertAnswers}/>
            :"No question added"}
         </div>
        )
    }
}
export default Contribute;