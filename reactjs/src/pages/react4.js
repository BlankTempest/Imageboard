import React from "react";
import { useState } from "react";

//statefull components can be created only using class keyword
//here we learn abt stateless component-so this. isnt allowed
//creating component using function makes it stateless by default
//hooks are used to add state to stateless component
// function Hello(props){//this must be used 
//     return <h1>welcome to stateless component -{props.user}</h1>
// }

//arrow funcs always need const
const Hello=(props)=><h1 user="akshar1">welcome,{props.user}</h1>//idk why user here doesnt work
//or maybe i do its getting rendered in app.js

function One(props){
    const [shown,setShown]=React.useState("Hello everyone")
    return (<div><h1>
        {shown}<br></br>
        <button onClick={()=>setShown("Hello everybody")}>
        click on this for alert box
    </button></h1></div>)
}

function callalert(){

    
}
export default One;