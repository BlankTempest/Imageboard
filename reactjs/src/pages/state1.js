import React from 'react';
class Home extends React.Component{
    constructor(props)
    {
        super(props)//cALLS THE CONSTRUCTOR OF REACT.component
        console.log(this.props)
        // this.state={name:this.props.user,addr:"sdfwe",company:"pes"}
        this.state={name:"asd",addr:"sdfwe",company:"pes"}
        //this obviously doesnt work u knob because name cant be changed as its a prop which is immutable
       // this.changeName=this.changeName.bind(this)//bind is used to bind property around the object
    }

    render(){

         //this.props.stae={name:this.props.user,addr:"a",company:"pes"}
         //has to say super(props) first
       
        //this.props.stae={name:this.props.user,addr:"a",company:"pes"}
        //this is also an error because 
        return (
            <div><h1>Hello,{this.state.name}</h1>
            <h1 id="h1">ur address is { this.state.addr}</h1>
            <button onClick={this.changeName}>click here to change the name</button><br></br>
            <button onClick={this.unmount}>click here to delete h1</button>
            
        
        </div>)

    }
    changeName=()=>{
        //this.state.name="akshar"//this is also an error cant change state like this
        //use setState
        this.setState({name:prompt("enter the name"),addr:"qwedqwe"})
       
        //this.props.user="wefwde"//error because props are immutable,so we use state

    }
}


// class Counter extends React.Component
// {
//     constructor(){//no passing arg as props as it isnt used 
//         super()
//         this.state={d:new Date()}
//     }
//     render()
//     {
//         return (<h1>{this.state.d.toLocaleTimeString()}</h1>)
//     }
// }
export default Home;