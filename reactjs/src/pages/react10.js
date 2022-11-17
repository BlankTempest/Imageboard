import React from "react";
class Bmi extends React.Component
{
    constructor()
    {
        super()
        this.myref1=React.createRef()
        this.myref2=React.createRef()

    }
    render(){
        return(
            <form onSubmit={this.handleS}>
                <label>
                    Weight:<input type="text" ref={this.myref1}></input>
                    Height:<input type="text" ref={this.myref2}></input>
                </label>
            </form>
        )
    }
    handleS=()=>
    [
        bmi=(Number(this.myref1.current.value)/(Number(this.myref2.current.value)*Number(this.myref2.current.value)))
        
    ]
}