import React from 'react';


class Comments extends React.Component{
    constructor(){
        super();
        
    }
    
  sendValue=(e)=>{
      e.preventDefault();
    const {insertAnswers} = this.props;
     insertAnswers(e.target.elements.answer.value);
  }

    render(){
        const {ques} = this.props;
        
        return(
         <div>
          {ques.question.map((q)=>{
              return <div><h4>{q}</h4>
              <form onSubmit = {this.sendValue}>
                  <label>Answers</label>
                  <input type = "text" name = "answer"></input>
                  <button type = "submit">Submit Your Answer</button>
             </form> 
             {ques.answer.length!==0 ? <ul>{ques.answer.map((a)=>{
                 return <h5>{a}</h5>
             })}</ul>:""}
             </div>
              
          })} 
         </div>
        )
    }
}
export default Comments;