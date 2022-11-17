import React from "react";
export class C extends React.Component{
    constructor()
    {
        super()
        this.myref=React.createRef()
        this.myref1=React.createRef()
    }
    render(){
       
        return(
           <div> <h1 onClick={this.change} ref={this.myref}>I am <span ref={this.myref1}>{this.props.name}</span></h1></div>
        )
        }
        change=()=>{
            this.myref1.current.innerHTML="sachin"
        }
}