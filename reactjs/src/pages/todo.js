import React from "react";
export class Todo extends React.Component
{
    constructor(){
        super()
        this.myref=React.createRef()
        this.myref1=React.createRef()
    }
    render()
    {
        return(
            <div>
                <input placeholder="ur task" ref={this.myref1}></input>
                <button onClick={this.append}>click</button>
                <ul ref={this.myref}></ul>
            </div>

        )
    }
    append=()=>{
        this.myref.current.innerHTML+="<li>"+this.myref1.current.value+"</li>"
    }
}