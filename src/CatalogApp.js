import React from "react";
import axios from "axios";
import "./css/logem.css";

export default class App extends React.Component {
    constructor()
    {
        super()
        this.state={data:[],boardName:'',names:'',subjects:'',comment:'',image:null,temps:'',posts:[],length:0}
    }

    getBoardName=()=>{
        var url = window.location.pathname
        switch(url.split('/')[1].toLowerCase()){
            case "a": 
                this.state.boardName="/a/ - Anime"
                break;
            case "ca": 
                this.state.boardName="/ca/ - Cars"
                break;
            case "co": 
                this.state.boardName="/co/ - Comics"
                break;
            case "gd": 
                this.state.boardName="/gd/ - Game Development"
                break;
            case "jp": 
                this.state.boardName="/jp/ - Japan"
                break;
            case "lit": 
                this.state.boardName="/lit/ - Literature"
                break;
            case "ln": 
                this.state.boardName="/ln/ - Light Novels"
                break;
            case "m": 
                this.state.boardName="/m/ - Manga"
                break;
            case "ma": 
                this.state.boardName="/ma/ - Math"
                break;
            case "mu": 
                this.state.boardName="/mu/ - Music"
                break;
            case "mv": 
                this.state.boardName="/mv/ - Movies"
                break;
            case "p": 
                this.state.boardName="/p/ - Photography"
                break;
            case "pg": 
                this.state.boardName="/pg/ - Programming"
                break;
            case "sci": 
                this.state.boardName="/sci/ - Science"
                break;
            case "sp": 
                this.state.boardName="/sp/ - Sports"
                break;
            case "tv": 
                this.state.boardName="/tv/ - TV Shows"
                break;
            case "v": 
                this.state.boardName="/v/ - Video Games"
                break;
            case "vm": 
                this.state.boardName="/vm/ - Multiplayer"
                break;
            case "vmmo": 
                this.state.boardName="/vmmo/ - MMORPG"
                break;
            case "vr": 
                this.state.boardName="/vr/ - Virtual Reality"
                break;
            case "vt": 
                this.state.boardName="/vt/ - VTubers"
                break;
            default:
                //url doesn't match, 404

                break;
        }
    }
    /*
    getBoardName=()=>{
        var url = window.location.pathname
        switch(url.split('/')[1].toLowerCase()){
            case "a": 
                this.setState({ boardName: "/a/ - Anime"});
                break;
            case "ca": 
                this.setState({ boardName: "/ca/ - Cars"});
                break;
            case "co": 
                this.setState({ boardName: "/co/ - Comics"});
                break;
            case "gd": 
                this.setState({ boardName: "/gd/ - Game Development"});
                break;
            case "jp": 
                this.setState({ boardName: "/jp/ - Japan"});
                break;
            case "lit": 
                this.setState({ boardName: "/lit/ - Literature"});
                break;
            case "ln": 
                this.setState({ boardName: "/ln/ - Light Novels"});
                break;
            case "m": 
                this.setState({ boardName: "/m/ - Manga"});
                break;
            case "ma": 
                this.setState({ boardName: "/ma/ - Math"});
                break;
            case "mu": 
                this.setState({ boardName: "/mu/ - Music"});
                break;
            case "mv": 
                this.setState({ boardName: "/mv/ - Movies"});
                break;
            case "p": 
                this.setState({ boardName: "/p/ - Photography"});
                break;
            case "pg": 
                this.setState({ boardName: "/pg/ - Programming"});
                break;
            case "sci": 
                this.setState({ boardName: "/sci/ - Science"});
                break;
            case "sp": 
                this.setState({ boardName: "/sp/ - Sports"});
                break;
            case "tv": 
                this.setState({ boardName: "/tv/ - TV Shows"});
                break;
            case "v": 
                this.setState({ boardName: "/v/ - Video Games"});
                break;
            case "vm": 
                this.setState({ boardName: "/vm/ - Multiplayer"});
                break;
            case "vmmo": 
                this.setState({ boardName: "/vmmo/ - MMORPG"});
                break;
            case "vr": 
                this.setState({ boardName: "/vr/ - Virtual Reality"});
                break;
            case "vt": 
                this.setState({ boardName: "/vt/ - VTubers"});
                break;
            default:
                //url doesn't match, 404
                var Body = document.getElementsByTagName("body")
                Body.innerHTML = `<div>
                                    <center>
                                        <h2>404 Page not found</h2>
                                    </center>
                                </div>`
                break;
        }
    }
    */

    getThreads = () => {
        axios.get('/catalog')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data});
                console.log('Data has been received')
                //console.log(response)
            })
            .catch(()=> {
                alert('Error loading page data')
            })
    }

    componentDidMount() {
        this.getBoardName()
        const params = {boardName:this.state.boardName}
        axios.get('/cat',{params})
            .then(response => {
                // console.log(response.data)
                this.setState({
                    data: response.data,
                })
                //console.log(this.state.data)
            })
            .catch((error) => {
                console.log(error);
            })

        const postForm = document.getElementById("postReplyForm")
        postForm.style.display = 'none';

        
        const btn = document.getElementById('toggleReply')
        btn.addEventListener('click',()=>{
            const postForm = document.getElementById("postReplyForm")
            postForm.style.display = 'flex';
            btn.style.display = 'none';
        })

        const submitBtn = document.getElementById('submitButton')
        submitBtn.addEventListener('click',()=>{
            if(!this.state.comment){
                alert("Comment body cannot be empty!")
                return;
            }
            if(!this.state.image){
                alert("All threads must be accompanied by an image!")
                return;
            }
            this.push();
            const postForm2 = document.getElementById("postReplyForm")
            postForm2.style.display = 'none';
            const btn2 = document.getElementById('toggleReply')
            btn2.style.display = 'block';
            this.componentDidMount()
        })

        
        this.componentDidUpdate()
    }

    componentDidUpdate() {
        this.renderThreads();
    }

    render() {
        this.getBoardName()

        var url_temp = window.location.pathname
        var catalogURL = '//' + window.location.host + '/' + url_temp.split('/')[1].toLowerCase() + '/catalog'
        //console.log(catalogURL)
        return (
    
<div>

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

<div class="boardBanner">

<div class="boardTitle">{this.state.boardName}</div>
</div>
<br/>

<hr class="shortHeader"/>

<div id="toggleReply">
[<a href="#">Start a New Thread</a>]
</div>



<form method="post" action='/uploadFile' id='uploadForm' encType="multipart/form-data">
<table id="postReplyForm">
<tbody>
    <tr data-type="Name">
        <td>Name</td>
        <td><input onChange={this.handleChange} name="names" type="text" tabindex="1" placeholder="Anonymous"/></td>
    </tr>
    <tr data-type="Subject">
        <td>Subject</td>
        <td><input onChange={this.handleChange} name="subjects" type="text" tabindex="1"/></td>
    </tr>
    <tr data-type="Comment">
        <td>Comment</td>
        <td>
            <textarea onChange={this.handleChange} required name="comment" cols="48" rows="4" wrap="soft" tabindex="4"></textarea>
        </td>
    </tr>
    <tr data-type="File">
        <td>File</td>
        <td>
            <input id="postFile" required onChange={this.handleChange} name="sampleFile" type="file" tabindex="7"/>
            <input id="submitButton" type="submit" value="Post" tabindex="6"/>
        </td>
    </tr>
</tbody>
</table>
</form>


<hr/>
<div class="navLinks">[<a href="../">Home</a>] [<a href="${catalogURL}">Catalog</a>] [<a href="#bottom">Bottom</a>]</div>
<hr/>

<div class="catalogBody" id="catalogBody">
    
</div>

<hr/>

<div class="navLinks">[<a href="../" accesskey="a">Home</a>] [<a href="${catalogURL}">Catalog</a>] [<a href="#top">Top</a>] </div>

<hr class="desktop"/>


<div id="bottom"></div>
</div>

    );
  }

    push= async (e)=>{
        const {names,subjects,comment,image}=this.state;
        //reset states
        this.setState({names:''});
        this.setState({subjects:''});
        this.setState({comment:''});
        this.setState({image:null});
        
        this.getBoardName()
        const boardName = this.state.boardName;
        const replies = 0
        const postReplies =[]
        var postcount = 0
        for(var i = 0; i < this.state.data.length; i++) {
            postcount+=this.state.data[i].postReplies.length
        }
        const threadID = this.state.data.length + 1000 + postcount
        const new_post=new Object({boardName,names,subjects,comment,image,replies,postReplies,threadID})
        // console.log(new_post)
        axios.post('/uploadMongo',new_post).then((response)=>{console.log(response.data)})
        .catch((err)=>console.log("err"))
        // console.log(res)
        
    }
    handleChange=(event)=>{
        var change=event.target.name
        switch(change)
        {
            case 'names':this.setState({names:event.target.value});
                break;
            case 'subjects':this.setState({subjects:event.target.value});
            break;
            case 'comment':this.setState({comment:event.target.value});
            break;
            case 'sampleFile':this.setState({image:event.target.value});
            break;
            default:
            break;
        }
        // console.log(change,event.target.value)
    }

    renderThreads=()=>{
        var catalogBody = document.getElementById("catalogBody")
        catalogBody.innerHTML = ''
        for(var i=0; i<this.state.data.length; i++) {
        
            //console.log(typeof this.state.data[i].image)
            var imageURL = '//' + window.location.host + '/uploads/'+(this.state.data[i].image).toString().replace(' ','%20').split('\\')[2]
            imageURL.replace(' ','%20')

            var img = new Image();
            var height
            var width

            img.onload = function(){
            height = img.height;
            width = img.width;
            }

            img.src = imageURL;

            var imgw = 110/height*width
            imgw = imgw.toString()

            var threadURL = '//' + window.location.host + '/thread/'+(this.state.data[i].threadID)

            var threadsContent = `
            <div class="catalogThread">
                <div>
                    <a href=${threadURL}><img src=${imageURL} height="110" width=${imgw}/></a>
                </div>
                <div class="catalogThreadcontents">
                    <span class="catalogReplyCount">Replies: ${this.state.data[i].replies}</span><br/>
                    <span class="catalogSubject">${this.state.data[i].subjects}</span>
                    :&nbsp
                    <span class="catalogText">
                    ${this.state.data[i].comment}
                    </span>

                </div>
            </div>
            `         
            catalogBody.insertAdjacentHTML('beforeend',threadsContent)
        }
    }

    /*
    print_posts=(posts,index)=>{
        posts.map(()=>{
            <div key={index}>
                            <span>File:<a href={CAR}>{posts.image}</a></span><br/>
                            <img src={CAR} style={{width:"270px",height:"200px"}}></img><br/>
                            <div style={{width:"270px"}}>{posts.names}-{posts.comment}</div>
                            
            </div>
        })
    }
    */
}