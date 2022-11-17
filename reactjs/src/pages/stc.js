import React from "react";
export class Calc extends React.Component
{
    constructor()
    {
        super()
        this.myref1=React.createRef()
        this.myref2=React.createRef()
        this.myref3=React.createRef()
    }
    render(){
        return(
            <div>
                    Number 1:<input type="text" ref={this.myref1}></input><br/><br/>
                    Number 2:<input type="text" ref={this.myref2}></input><br/><br/>
                <div>
                    <button name="+" onClick={this.handleClick}>+</button>
                    <button name="-" onClick={this.handleClick} style={{"marginLeft":"10px"}}>-</button>
                    <button name="*" onClick={this.handleClick} style={{"marginLeft":"10px"}}>*</button>
                    <button name="/" onClick={this.handleClick} style={{"marginLeft":"10px"}}>/</button>
                </div><br/><br/>
                <div ref={this.myref3}>

                </div>
            </div>
        )
    }
    handleClick=(e)=>{
        var ans
        var inp1=Number(this.myref1.current.value)
        var inp2=Number(this.myref2.current.value)
        if(e.target.name==="+") ans=inp1+inp2;
        else if(e.target.name==="-") ans=inp1-inp2;
        else if(e.target.name==="*") ans=inp1*inp2;
        else ans=inp1/inp2;
        this.myref3.current.innerHTML+='the answer is '+ans+'<br/>'
    }
}