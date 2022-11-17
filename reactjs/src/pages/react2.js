import React from 'react';
// class Counter extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={second:0}
//     }
//     componentDidMount()
//     {
//         setInterval(this.tick,1000)
//         //putting it here is better than putting it at render
//         //cause render updates each time
//     }
//     tick=()=>
//     {
//         this.setState({second:this.state.second+1})
//     }
//     render(){
//         return(
//             <div><h1>this.state.second ,{thi.state.second}</h1></div>
//         )
//     }
// }


class Counter extends React.Component{
    constructor()
    {
        super()
        this.state={second:35,min:20,max:35}
    }
    componentDidMount()
    {
        setInterval(this.tick,1000)
        //putting it here is better than putting it at render
        //cause render updates each time
    }
    tick=()=>
    {
        if(this.state.second>this.state.min)
        {
            this.setState({second:this.state.second-1})
        }
       if(this.state.second==this.state.min) 
       {
        this.setState({second:this.state.max})
       }
    }
    render(){
        return(
            <div><h1>time left ,{this.state.second}</h1></div>
        )
    }
}
class CounterDisplay extends React.Component{
    render(){
        return <h1>hello,<Counter start={this.props.second}></Counter></h1>
    }
}
export default CounterDisplay;