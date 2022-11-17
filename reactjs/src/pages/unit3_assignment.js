import React from "react";
import burger from './l-intro-1653066580.jpg';
import pasta from './09112015_15minute_pastasauce_tomato.webp';
import pizza from './Cheese_Pizza.jpg';
export class Items extends React.Component
{
    constructor()
    {
        super()
        this.state = {form: {"burger_qty":"","pasta_qty":"","pizza_qty":""}}
        this.myref4=React.createRef()
        this.myref5=React.createRef()
    }
    render()
    {
        var arr=
        [{image:burger,food_item:"BURGER",cost:"200 Rupees",pos:1},
        {image:pasta,food_item:"PASTA",cost:"150 Rupees",pos:2},
        {image:pizza,food_item:"PIZZA",cost:"300 Rupees",pos:3},
        ]
        var div_style={
            display:"flex",
            flexDirection:"row",
        }
        var stylez=
        {
            width:"350px",
            height:"250px",
            marginTop:"10px",
            marginLeft:"55px"
        }   
        var i=0
        return(
            <div>
                 <div style={div_style}>
                {arr.map((item,key) => 
                (
                    <div>
                        <img src={item.image} style={stylez}></img>
                        <div style={{marginLeft:"55px"}}><b>Name: {item.food_item}</b></div><br></br>
                        <div style={{marginLeft:"55px"}}><b>Cost: {item.cost}</b></div><br/>
                        
                    </div>
                ))}<br></br>
                
            </div><br/>
            <form>
                <input placeholder="QTY" style={{marginLeft:"55px"}}  name="burger_qty" onKeyUp={this.change} onKeyDown={this.change} onKeyPress={this.change} onInput={this.change}></input>
                <input placeholder="QTY" style={{marginLeft:"235px"}} name="pasta_qty"  onKeyUp={this.change} onKeyDown={this.change} onKeyPress={this.change} onInput={this.change}></input>
                <input placeholder="QTY" style={{marginLeft:"235px"}} name="pizza_qty"  onKeyUp={this.change} onKeyDown={this.change} onKeyPress={this.change} onInput={this.change}></input><br/><br/>
            </form>
            {/* <button style={{marginLeft:"55px"}} onClick={this.place}>Place Order</button><br/><br/> */}
            <div ref={this.myref4} style={{marginLeft:"55px"}}>

            </div>
            <div ref={this.myref5} style={{marginLeft:"55px"}}>

            </div>
            </div>
           
           
        ) 
        
    }
    change=(e)=>
    { 
        var n = e.target.name
        var v = e.target.value
        this.setState({
        ...this.state.form,
        form:{
        ...this.state.form,
        [n]:[v]
        }
        
    })  
    var a=Number(this.state.form.burger_qty)*200+Number(this.state.form.pasta_qty)*150+Number(this.state.form.pizza_qty)*300
    this.myref4.current.innerHTML='<b>Total: '+a+' Rupees</b><br/><br/>'+"<b>Order Summary:</b>"+'<br/><br/>'
    this.myref5.current.innerHTML='<b>Current Time: '+new Date().getHours()+':'+new Date().getMinutes()+'</b><br/><br/>'+
    '<b>Delivery Time: '+(new Date().getHours()+1)+':'+new Date().getMinutes()+'</b>'}
}