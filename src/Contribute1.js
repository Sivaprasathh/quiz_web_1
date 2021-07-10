import React from 'react';
import Comments1 from './Comments1';

class Contribute1 extends React.Component{
    constructor(){
        super();
        this.state={
            QandA:[],
            Answers:[],
            index:0,
            status:0
        }
    }
    handleData = (e)=>{
        e.preventDefault();
        let arr = [...this.state.QandA,[e.target.elements.qa.value]];
        this.setState({
            QandA : arr
        },()=>{
            
            e.target.reset()
        })
    }
    handleAnswers=(e)=>{
        e.preventDefault()
     let arr= [[this.state.index,e.target.elements.answer.value],...this.state.Answers]
       this.setState({
           Answers:arr,
           status:1
       })
       e.target.reset()
    }
    trackInd=(ind)=>{
        this.setState({
            index:ind
        })
    }
    
    render(){
        return(
         <div>
             <form onSubmit = {this.handleData}>
            <label>Enter the Question</label>
            <input type = "text" name = "qa"></input>
            <button type = "submit" >Submit</button>
            </form>
            {this.state.QandA.length !==0 ? 
            <ul>
                {this.state.QandA.map((qna,index)=>{
                    return <div><h4>{qna}</h4>
                    <form onSubmit = {this.handleAnswers}>
                        
                    <label>
                    <input type = "text" name = "answer" ></input>
                    </label>
                    <button type = "submit"  onClick = {()=>{this.trackInd(index)}}>Submit</button>
                    </form>
                   {this.state.status === 1 ? 
                    
                   <Comments1 values = {this.state.Answers} ind = {index}/> : 
                   
                   " " } 
                    </div>
                })}
                
            </ul>
            :""}
         </div>
        )
    }
}
export default Contribute1;