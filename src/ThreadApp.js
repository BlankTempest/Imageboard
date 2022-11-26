import React from "react";
import axios from 'axios';
import './css/threadem.css'
import e from "cors";
export class Thread extends React.Component
{
    constructor(){
        super()
        this.state={boardName:'/v/ - Video Games',new_thread:0,sampleFile:null,name:'',com:''}
        this.myref=React.createRef()
    }


    getBoardName=()=>{
        var url = window.location.pathname
        switch(url.split('/')[1].toLowerCase()){
            case "a": 
                this.setState({boardName:"/a/ - Anime"})
                break;
            case "ca": 
            this.setState({boardName:"/ca/ - Cars"})
                break;
            case "co": 
            this.setState({boardName:"/co/ - Comics"})
                break;
            case "gd": 
            this.setState({boardName:"/gd/ - Game Development"})
                break;
            case "jp": 
            this.setState({boardName:"/jp/ - Japan"})
                break;
            case "lit": 
            this.setState({boardName:"/lit/ - Literature"})
                break;
            case "ln": 
            this.setState({boardName:"/ln/ - Light Novels"})
                break;
            case "m": 
            this.setState({boardName:"/m/ - Manga"})
                break;
            case "ma": 
            this.setState({boardName:"/ma/ - Math"})
                break;
            case "mu": 
            this.setState({boardName:"/mu/ - Music"})
                break;
            case "mv": 
            this.setState({boardName:"/mv/ - Movies"})
                break;
            case "p": 
            this.setState({boardName:"/p/ - Photography"})
                break;
            case "pg": 
            this.setState({boardName:"/pg/ - Programming"})
                break;
            case "sci": 
            this.setState({boardName:"/sci/ - Science"})
                break;
            case "sp": 
            this.setState({boardName:"/sp/ - Sports"})
                break;
            case "tv": 
            this.setState({boardName:"/tv/ - TV Shows"})
                break;
            case "v": 
            this.setState({boardName:"/v/ - Video Games"})
                break;
            case "vm": 
            this.setState({boardName:"/vm/ - Multiplayer"})
                break;
            case "vmmo": 
            this.setState({boardName:"/vmmo/ - MMORPG"})
                break;
            case "vr": 
            this.setState({boardName:"/vr/ - Virtual Reality"})
                break;
            case "vt": 
            this.setState({boardName:"/vt/ - VTubers"})
                break;
            default:
                //url doesn't match, 404
                break;
        }
    }
     
    render()
    {
        const children=[]
        
        var ac=String(this.state.boardName).split(' ').join('').split('/').join('')
        var postlink="http://localhost:3000/uploadFile/"+ac
        // console.log(postlink)
        return(
            <body>

        <span class="boardList">
            [ /
            <a href="/a/catalog" title="Anime">a</a> / 
            <a href="/ca/catalog" title="Cars">ca</a> / 
            <a href="/co/catalog" title="Comics">co</a> / 
            <a href="/gd/catalog" title="Game Development">gd</a> / 
            <a href="/jp/catalog" title="Japan">jp</a> / 
            <a href="/lit/catalog" title="Literature">lit</a> /
            <a href="/ln/catalog" title="Light Novels">ln</a> / 
            <a href="/m/catalog" title="Manga">m</a> / 
            <a href="/ma/catalog" title="Math">ma</a> / 
            <a href="/mu/catalog" title="Music">mu</a> / 
            <a href="/mv/catalog" title="Movies">mv</a> / 
            <a href="/p/catalog" title="Photography">p</a> / 
            <a href="/pg/catalog" title="Programming">pg</a> / 
            <a href="/sci/catalog" title="Science">sci</a> / 
            <a href="/sp/catalog" title="Sports">sp</a> / 
            <a href="/tv/catalog" title="TV Shows">tv</a> / 
            <a href="/v/catalog" title="Video Games">v</a> / 
            <a href="/vm/catalog" title="Multiplayer">vm</a> / 
            <a href="/vmmo/catalog" title="MMORPG">vmmo</a> / 
            <a href="/vr/catalog" title="Virtual Reality">vr</a> / 
            <a href="/vt/catalog" title="VTubers">vt</a> /
            ]
        </span>
    
        <hr/>
    <br/>
    {/* <!--Replace the title with whatever the board name is--> */}
    <div class="boardBanner">
        {/* <!--Maybe a banner here--> */}
        <div class="boardTitle">/v/ - Video Games</div>
    </div>
    <br/>

    <hr/>
    <div class="navLinks">[<a href="/v/">Home</a>] [<a href="/v/catalog">Catalog</a>] [<a href="#bottom">Bottom</a>]</div>
    <hr/>
    <div id='threadBody' class='threadBody' ref={this.myref}>

    </div>

    <form name="threadform" id="threadform" action={postlink} method="post" encType="multipart/form-data">
        
            
            {this.initialise(children)}

            <div id="toggleReply" onClick={this.new_thread}>
                [<a href="#">Reply</a>]
            </div>


            {/* <!--Clicking the above reply button should replace it with the bottom content--> */}
            {   (this.state.new_thread)?
            
                 <table id="postReplyForm">
                
            
                 <tbody>
                     <tr data-type="Name">
                         <td>Name</td>
                         <td><input name="name" type="text" tabindex="1" placeholder="Anonymous" onChange={this.handleChange}/></td>
                     </tr>
                     <tr data-type="Comment">
                         <td>Comment</td>
                         <td>
                             <textarea required name="com" cols="48" rows="4" wrap="soft" tabindex="4" onChange={this.handleChange}></textarea>
                         </td>
                     </tr>
                     <tr data-type="File">
                         <td>File</td>
                         <td>
                             <input id="postFile" name="sampleFile" type="file" tabindex="7" onChange={this.handleChange}/>
                             <input type="submit" value="Post" tabindex="6" />
                         </td>
                     </tr>
                 </tbody>
             </table>:<div/>
            }
           
        {/* </div> */}
    
        
    </form>
    
    </body>
        )
    }
    new_thread=()=>{
        this.setState({new_thread:1})

    }

    initialise=(children)=>{
        // console.log('here')
        const {boardName}=this.state
        const obj=new Object({boardName})
        // console.log(obj)
        axios.post('/init',obj).then((res)=>{
            children=res.data
            this.renderThreads(children)
            // console.log(children)
        })
        
    }

    push_thread=(e)=>{
        e.preventDefault()
        const {name,com,sampleFile}=this.state
        // this.getBoardName()
        const boardName = this.state.boardName;
        var img=0
        if(this.state.sampleFile!=null) img=1
        
        const new_post=new Object({boardName,name,com,sampleFile,img})
        console.log(new_post)
        axios.post('/push_thread',new_post).then((res)=>{console.log(res.data)})
    }

    handleChange=(event)=>{
        var change=event.target.name
        switch(change)
        {
            case 'name':this.setState({name:event.target.value});
                break;
            case 'com':this.setState({com:event.target.value});
            break;
            case 'sampleFile':this.setState({sampleFile:event.target.value});
            break;
        }
        // console.log(change,event.target.value)
    }

    renderThreads=(children)=>{
        var threadBody = document.getElementById("threadBody")
        threadBody.innerHTML = ''
        for(var i=0; i<children.length; i++) {
        
            if(children[i].img!=0)
            {
                // console.log(typeof children[i].sampleFile)
                // var imageURL = '//' + window.location.host +'/uploads/'+(children[i].sampleFile).toString().split('\\')[2]
                var imageURL=children[i].sampleFile
                console.log(imageURL)
                var threadsContent=`  <div>
                    <div class="thread">
                        <div class="OP-Post" id="1234567890">
                            <span class="OP-fileName">File: <span class="postFileName">
                                <a href=${imageURL}>${imageURL}</a></span>
                            </span>
                            <span class="postHeader">
                                <span class="threadSubject">NGNL S2 Waiting Room</span>
                                <span class="posterName">Anonymous</span>
                                <span class="postDate">${children[i].post_date}</span>
                                <span class="postId">>>1234567890</span>
                                <span class="replyIds">
                                    ▶
                                    <a href="#1234567891">>>1234567891</a>
                                    <a href="#1234567892">>>1234567892</a>
                                    <a href="#1234567893">>>1234567893</a>
                                    <a href="#1234567894">>>1234567894</a>
                                </span>
                            </span>
                            <div class="mainFlex">
                                // {/* <!--img must be resizable to original size, directly edit the img tag across the page--> */}
                                <div class="postImg">
                                    <img src=${imageURL} height="150" width="240"/>
                                </div>
                                <div class="postText">
                                    Join us bros in our eternal wait for the second season.
                                </div>
                            </div>
                        </div>
                    </div>
            
                        {/* <!--The links that point to other posts, >>1234567890 for example will need to be automatically
                            formatted into anchor tags. They also need a check to see if it's OP's post, 
                            and then add the (OP) dynamically--> */}
                        
            
                        <hr/>
            
                </div>
                
                
                
                
                `
                threadBody.insertAdjacentHTML('beforeend',threadsContent)
            }
            // console.log(typeof children[i].sampleFile)
            // var imageURL = '//' + window.location.host + '/uploads/'+(children[i].sampleFile).toString().split('\\')[2]

            // console.log(imageURL)
            // var threadsContent = `
            // <div class="catalogThread">
            //     <div>
            //         <a href=${imageURL}><img src=${imageURL} height="110" width="170"/></a>
            //     </div>
            //     <div class="catalogThreadcontents">
            //         <span class="catalogReplyCount">Replies: ${this.state.data[i].replies}</span><br/>
            //         <span class="catalogSubject">${this.state.data[i].subjects}</span>
            //         :&nbsp
            //         <span class="catalogText">
            //         ${this.state.data[i].comment}
            //         </span>

            //     </div>
            // </div>
            // `         
            // threadbody.insertAdjacentHTML('beforeend',threadsContent)
        }
    }
}




const Parent1=props=>(
   
   <div>
        <h1>Hello</h1>
   </div>
)


const Parent2=props=>(
    
    <div class="replyPost" id="1234567891">
                <div class="postHeader">
                    <span class="posterName">Anonymous</span>
                    <span class="postDate">10/10/2010 10:10:10</span>
                    <span class="postId">1234567891</span>
                    <span class="replyIds">
                        ▶
                        {/* <a href="#1234567895">1234567895</a>
                        <a href="#1234567896">1234567896</a> */}
                    </span>
                </div>
                <div class="mainReply">
                    <div class="postImg">

                    </div>
                    <div class="postText">
                        <a class="redirectPost" href="#1234567890">1234567890 (OP)</a>  <br/>
                        I'm waiting with you bro
                    </div>
                </div>
    </div>
      
            // {/* <!--For posts without the img, just remove everything from the postImg class div tag--> */}
            
)

