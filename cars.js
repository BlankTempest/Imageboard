import React from 'react';
import CAR from './car.jpg'
export class Car extends React.Component
{
    constructor()
    {
        super()
        this.myref=React.createRef()
        this.myref1=React.createRef()
    }
    render()
    {
        return(
            <div style={{"marginLeft":"8px"}}>
                <span class="boardList">
                [ /
                <a href="/v/" title="Anime">a</a> / 
                <a href="/ca/" title="Cars">ca</a> / 
                <a href="/v/" title="Comics">co</a> / 
                <a href="/v/" title="Game Development">gd</a> / 
                <a href="/v/" title="Japan">jp</a> / 
                <a href="/v/" title="Literature">lit</a> 
                <a href="/v/" title="Light Novels">ln</a> / 
                <a href="/v/" title="Manga">m</a> / 
                <a href="/v/" title="Math">ma</a> / 
                <a href="/v/" title="Music">mu</a> / 
                <a href="/v/" title="Movies">mv</a> / 
                <a href="/v/" title="Photography">p</a> / 
                <a href="/v/" title="Programming">pg</a> / 
                <a href="/v/" title="Science">sci</a> / 
                <a href="/v/" title="Sports">sp</a> / 
                <a href="/v/" title="TV Shows">tv</a> / 
                <a href="/v/" title="Video Games">v</a> / 
                <a href="/v/" title="Multiplayer">vm</a> / 
                <a href="/v/" title="MMORPG">vmmo</a> / 
                <a href="/v/" title="Virtual Reality">vr</a> / 
                <a href="/v/" title="VTubers">vt</a> /
                ]
                </span>
                <span style={{"paddingLeft":"380px"}}>
                 [   <a href="/v/" title="setting">Setting</a> ]
                 [   <a href="/v/" title="Search">Search</a> ]
                 [   <a href="/v/" title="Mobile">Mobile</a> ]
                 [   <a href="/v/" title="Home">Home</a> ]
                </span><br/>
                <hr></hr>
                <h1 style={{"textAlign":"center"}}>/Ca/-Cars</h1>
                <hr/>
                <div ref={this.myref}>
                    <h1 style={{"textAlign":"center"}} onClick={this.append}>[Start a New Thread]</h1>
                </div>
                <hr style={{"width":"600px"}}></hr>
                <div class="navLinks">[<a href="/v/">Home</a>] [<a href="/v/catalog">Catalog</a>] [<a href="#bottom">Bottom</a>]</div>
                <hr></hr>
                {/* <button onClick={this.handleClick}>-</button> */}
                <span style={{"paddingLeft":"40px","display":"flex"}} ref={this.myref1}>
                    {/* <span>File:<a href="car.jpg">car.jpg</a></span> */}
                    <div >
                        <img src={CAR} style={{"width":"270px","height":"200px"}}></img><br/>
                        <div style={{"width":"270px"}}>/Ca/ is for discussions related to cars, reviews of various aspects
                        of the same like price,mielage,speed etc.</div>
                    </div>
                </span>
            </div>
           
        )
    }
    append=()=>{
        this.myref.current.innerHTML=
        `
            
            <div style="text-align:center">
            <span style="background-Color:blue;height:25px;width:100px;text-align:left;display:inline-block">Name</span>
                <input type="text" placeholder="Anonymous" style='height:20px;width:250px'></input><br/>
                <span style="background-Color:blue;height:25px;width:100px;text-align:left;display:inline-block">Subjects</span>
                <input type="text" style='height:20px;width:250px'></input><br/>
                <div style="display:flex;">
                    <div style="background-Color:blue;height:85px;width:100px;text-align:left;margin-left:441px">Comment</div>
                    <textarea rows=5 cols=40 style="margin-left:5px"></textarea><br/>
                </div>
                <span style="background-Color:blue;height:25px;width:100px;text-align:left;display:inline-block">File</span>
                <input type="file"></input><br/>
                <button id="b1">Post</button>
            </div>
            <script>
                b1obj=document.getElementById("b1")
                b1obj.addEventListener('click',function(){
                console.log("hello")
            })
        </script>
        `   
        
       
    }
    // post=()=>{
    //     this.myref1.current.innerHTML+=`he;;`
            
        
    // }
}