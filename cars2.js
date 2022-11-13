import React from "react";
import CAR from './car.jpg'
import {Car_temp} from './cars_template.js'
// var fetch=require('node-fetch')
import axios from 'axios';


export class Car2a extends React.Component
{
    constructor()
    {
        super()
        this.state={disp:0,push:0,names:'',subjects:'',comment:'',image:''}
    }
    
    
    render(){
        
        if(this.state.disp)
        {
            return(
            
                <>
                <Car_temp/>
                <div style={{"text-align":"center"}}>
                 <form onSubmit={this.push} method="GET">
                    <span style={{"backgroundColor":"blue","height":"25px","width":"100px","textAlign":"left","display":"inline-block"}}>Name</span>
                    <input name="names" onChange={this.handleChange} type="text" placeholder="Anonymous" style={{'height':'20px','width':'250px'}}></input><br/>
                    <span style={{"backgroundColor":"blue","height":"25px","width":"100px","textAlign":"left","display":"inline-block"}}>Subjects</span>
                    <input name="subjects" onChange={this.handleChange} type="text" style={{'height':'20px','width':'250px'}}></input><br/>
                    <div style={{"display":"flex"}}>
                        <div style={{"backgroundColor":"blue","height":"85px","width":"100px","textAlign":"left","marginLeft":"441px"}}>Comment</div>
                        <textarea name='comment' onChange={this.handleChange} rows="5" cols="50" style={{"marginLeft":"5px"}}></textarea><br/>
                    </div>
                    <span style={{"backgroundColor":"blue","height":"25px","width":"100px","textAlign":"left","display":"inline-block"}}>File</span>
                    <input name='image' onChange={this.handleChange} type="file"></input><br/>
                    <button type="submit">Post</button>

                    </form>
                </div>
                <div>
                    <hr style={{"width":"600px"}}></hr>
                    <div class="navLinks">[<a href="/v/">Home</a>] [<a href="/v/catalog">Catalog</a>] [<a href="#bottom">Bottom</a>]</div>
                    <hr></hr>
                    <span style={{paddingLeft:"40px",display:"flex"}} id="span1">
          
                            `1<div >
                            <span>File:<a href={CAR}>car.jpg</a></span><br/>
                            <img src={CAR} style={{width:"270px",height:"200px"}}></img><br/>
                            <div style={{width:"270px"}}>/Ca/ is for discussions related to cars, reviews of various aspects
                            of the same like price,mielage,speed etc.</div>
                        </div>
                    </span>
                </div>
                </>
               )
        }
        else
        {
            return(
            <>
            <Car_temp/>
            <div ref={this.myref} id='div1' onClick={this.append}>
                    <h1 style={{"textAlign":"center"}}>[Start a New Thread]</h1>
                 </div><br></br>

            <div>
                <hr style={{"width":"600px"}}></hr>
                <div class="navLinks">[<a href="/v/">Home</a>] [<a href="/v/catalog">Catalog</a>] [<a href="#bottom">Bottom</a>]</div>
                <hr></hr>
                <span style={{paddingLeft:"40px",display:"flex"}} id="span1">
      
                    <div >
                        <span>File:<a href={CAR}>car.jpg</a></span><br/>
                        <img src={CAR} style={{width:"270px",height:"200px"}}></img><br/>
                        <div style={{width:"270px"}}>/Ca/ is for discussions related to cars, reviews of various aspects
                        of the same like price,mielage,speed etc.</div>
                    </div>
                </span>
            </div>
            </>
           )
        }
        
        
    }
    append=()=>{
        this.setState({disp:1})
    }
    push= async (e)=>{
        e.preventDefault()
        document.getElementById('span1').innerHTML+=`<h1>heelo</h1>`
        const {disp,push,names,subjects,comment,image}=this.state;
        const new_post={names,subjects,comment,image}
        // console.log(new_post)
        let res=await axios.post('/',new_post).then((response)=>{console.log(new_post)})
        .catch((err)=>console.log("err"))
        console.log(res)
        
        
    }
    handleChange=(event)=>{
        var change=event.target.name
        switch(change)
        {
            case 'names':this.setState({names:event.target.value});
                break;
            case 'subjects':this.setState({subjects:event.target.value});
            break;
            case 'comment':this.setState({comments:event.target.value});
            break;
            case 'image':this.setState({image:event.target.value});
            break;
        }
        // console.log(change,event.target.value)
    }
    // handleSubmit=(e)=>{

    //     document.getElementById('span1').innerHTML+=`<h1>heelo</h1>`
    //     // this.setState({disp:0})
    // }
}











// append=()=>{
    //     this.setState({disp:1})
    //     document.getElementById('div1').innerHTML+=`<div style="text-align:center">
    //     <span style="background-color:blue;height:25px;width:100px;text-align:left;display:inline-block">Name</span>
    //     <input type="text" placeholder="Anonymous" style="height:20px;width:250px;"></input><br/>
    //     <span style="background-color:blue;height:25px;width:100px;text-align:left;display:inline-block">Subjects</span>
    //     <input type="text" style="height:20px;width:250px"}}></input><br/>
    //     <div style="display:flex">
    //         <div style="background-color:blue;height:85px;width:100px;text-align:left;margin-left:441px">Comment</div>
    //         <textarea rows="5" cols="50" style="margin-left:5px"></textarea><br/>
    //     </div>
    //     <span style="background-color:blue;height:25px;width:100px;text-align:left;display:inline-block"}}>File</span>
    //     <input type="file"></input><br/>
        
    // </div>`



