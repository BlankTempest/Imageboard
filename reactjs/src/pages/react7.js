import React from "react";
export class Event1 extends React.Component{
    constructor()
    {
        super()
        this.myref=React.createRef()
        this.handler2=this.handler2.bind()
    }
    render()
    {
        let c;
        return(<h2 onMouseOver={this.handler1} onMouseOut={this.handler2} 
            onContextMenu={this.handler3} ref={this.myref}>please get here mouse pointer here</h2>)
    }
     c;
    handler1=()=>{
        this.c=this.myref.current.innerHTML
        this.myref.current.innerHTML="its here"
    }
    handler2(){
        this.myref.current.innerHTML=this.c
        //if it were functional component then we cant use this instead use event.target.innerHTML

    }
    handler3=(event)=>{
        alert("u right clicked")
        event.preventDefault()
    }
}