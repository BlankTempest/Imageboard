import React from 'react';
import { ReactDOM } from 'react';
class Home extends React.Component
{
    // render(){
    //     return <div><h1>welcome to react,{this.props.text}</h1></div>
    //     return <div><h1>{this.props.children}</h1></div>
    // }

}

var contentNode = document.getElementById('div1');
var component = <h1>Hello World!</h1>; // A simple JSX component
ReactDOM.render(component, contentNode);
class Home1 extends React.Component
{
    render(){
        return (
        <div><h1>{this.props.children}</h1>
        </div>)
    }
}
export default Home;
