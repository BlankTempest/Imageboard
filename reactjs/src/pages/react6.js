import React from 'react';
class Color extends React.Component
{
    constructor()
    {
        super()
        this.myref=(ele)=>{
            this.setref=ele
        }
    }
    render()
    {
        const arr=['pink','yellow','blue','red']
        return(
            
            <div>I like the <span onClick={this.change} ref={this.myref}>red</span> color</div>
        )

    }
    
    change=(e)=>{

       
        this.myref.value.style.color="pink";
       
        //this.myref.current
    }
    //learn abt map-it takes 1 element from the iterable
}
export default Color;