import React from 'react';
import CAR from './car.jpg'
// import {Car_temp,Car_temp1} from './pages/cars_template.js'
import {Car2a} from './pages/cars2.js'
export class App extends React.Component
{
    constructor()
    {
        super()
        this.state={disp:0}
        this.myref=React.createRef()
        this.myref1=React.createRef()
        // this.append.bind(this);
    }
  
    render()
    {
        console.log(this.state.disp)
        return(
            <Car2a/>
        )
        
    }
    // append=()=>{
    //     this.setState({disp:1})
    // }
      


}

export default App;