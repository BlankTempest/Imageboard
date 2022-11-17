import React from "react";
// export class Uncontrolled extends React.Component{
//     constructor()
//     {
//         super()
//         this.myref=React.createRef()
//         this.myref1=React.createRef()

//     }
//     render(){
//         return(
//             <form onSubmit={this.handlesubmit} >
//                 <label>
//                     Name:<input type="text" ref={this.myref} placeholder="enter name"></input>
//                     email:<input type="email" ref={this.myref1} placeholder="enter email"></input>
//                     <input type="submit" value="SUBMIT"></input>
//                 </label>
                
//             </form>
//         )
//     }
//     handlesubmit=(e)=>{
//         alert("name u wanted is "+this.myref.current.value+" e-mail is"+this.myref1.current.value);
//         //to prevent deafult in js u can use return false 
//         e.preventDefault()
//     }
// }


export class Controlled extends React.Component{
    constructor()
    {
        super()
        // this.state={value:""}
        this.state={name:"",email:""}

    }
    render(){
        return(
            <form onSubmit={this.handlesubmit} >
                <label>
                    Name:<input type="text"  name="names" onChange={this.handlechange} placeholder="enter name"></input>
                    email:<input type="email" name="emails" onChange={this.handlechange} placeholder="enter email"></input>
                    <input type="submit" value="SUBMIT"></input>
                </label>
                
            </form>
        )
    }
    handlesubmit=(e)=>{
        alert("name u wanted is "+this.state.name+",entered email is "+this.state.email);
        //to prevent deafult in js u can use return false 
        e.preventDefault()
    }
    handlechange=(event)=>
   {
    var key=event.target.name
    var value=event.target.value
    if(key=="names") this.setState({name:value})
    if(key=="emails") this.setState({email:value})
   }
}