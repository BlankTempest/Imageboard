import React from "react";
export class Todo extends React.Component
{
    constructor()
    {
        super()
        this.myref=React.createRef()
        this.state=(arr=[])
    }
    render(){
        return(
            <> <input ref={this.myref}></input>
            <button onClick={this.add}></button></>
           
        )
    }
    add=()=>{
        this.setState={arr:this.arr.push()}
    }
}
