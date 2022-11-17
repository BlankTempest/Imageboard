import React from 'react';
import CAR from './car.jpg'
export class Car_temp extends React.Component
{
    render()
    {
        return(
            <div>
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
            </div>
           
        )
    }
}



export class Car_temp1 extends React.Component
{
    render()
    {
        return(
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
        
        )
    }
}