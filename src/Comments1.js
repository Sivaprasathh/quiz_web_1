import React from 'react';


class Comments1 extends React.Component{
    constructor(){
        super();
        
    }
    

    render(){
        const {values} = this.props;
        console.log(values);
        const {ind} = this.props;
        let len = values.length;
        let arr=[];
        for(let i = 0 ; i < len ; i++)
        {
            if(values[i][0] === ind){
                arr = values[i][1];
            }
        }
        
        return(
         <div>
            {values.map((val)=>{
                return <div>{val[0] === ind ? val[1]: " "}</div>
            })}
         </div>
        )
    }
}
export default Comments1;