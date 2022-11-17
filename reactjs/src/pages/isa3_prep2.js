import React from "react";
export default class Color extends React.Component{
    constructor()
    {
        super()
        // this.myref=React.createRef()
        this.myref=(ele)=>{
            this.myref=ele;
        }
    }
    render(){
        var i=0
        var arr=['red','blue','orange','yellow','green'];
        return(<>I like the color <span onClick={this.change(arr,i)} ref={this.myref}>red</span></>)
    }
    change=(arr,i)=>{
        arr=['red','blue','orange','yellow','green'];
        
        this.myref.style.color=arr[i]
        i=(i+1)%5
    }

}