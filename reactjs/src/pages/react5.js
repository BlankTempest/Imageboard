import React from 'react';
class Increment extends React.Component
{
    // constructor()
    // {
    //     super()
    //     this.state={value:Number(0)}
    // }

    // constructor()
    // {
    //     super()
    //     this.myref=React.createRef()
    // }

    constructor()
    {
        super()
        this.myref=(ele)=>//th function must accept an argument
        {
            this.setref=ele
        }
    }
    render()
    {
        // return( <div>
        //     <button onClick={this.inc}>+</button>
        //     <input type="text"  ></input>
        //     <input type="text"  ></input>
        //     <input type="text"  ></input>
        //     <input type="text"  ></input>
        //     <input type="text"  ></input>
        //     {/* this is done to get focus only on 6th field.this is stupid cause we
        //     are just remove myref fro others */}
        //     <input type="text" ref={this.myref} ></input>

        //     {/* this value attribute sets immutable property -so remove it*/}
        //     <button onClick={this.dec}>-</button><br></br>
        //     <button onClick={this.getfocus}>click here for focus</button>
        // </div>)
        return(
            <div>
            <input type="text" onKeyPress={this.show} ref={this.myref}/>
            <h1 ref={this.myref}></h1></div>

        )
       
    }
    show=(e)=>{
        //var h1=document.querySelector("h1")
        var txt=e.key
        if(e.shiftKey) 
        {
            //h1.innerHTML=<span style='color:red'>this.setref.value</span>
            //h1.innerHTML=<span style='color:red'>+txt+</span>
            this.setref.innerHTML+='<span style="color:red">'+txt+'</span>'
        }
        else{
            //h1.innerHTML=this.setref.value
            //h1.innerHTML+=this.setref.value
            this.setref.innerHTML+=txt
        }
    }
    dec=()=>
    {
        //this.setState({value:this.state.value-1})

        // alert(this.myref)
        // alert(this.myref.current.value)

        this.myref.current.value--
    }
    inc=()=>
    {
        //this.setState({value:this.state.value+1})

        // alert(this.myref)
        // alert(this.myref.current)

        this.myref.current.value++
    }
    // getfocus=()=>{
    //     this.myref.current.focus()
    // }
    // componentDidMount()
    // {
    //     this.myref.current.focus()
    // }
}

export default Increment;