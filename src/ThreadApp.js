import React from "react";
import axios from "axios";

export default class ThreadApp extends React.Component {
    constructor()
    {
        super()
        this.state={data:[],boardName:'',names:'',comment:'',image:null,temps:'',posts:[],length:0}
    }

    getBoardName=()=>{
        var url = window.location.pathname
        //console.log(url)
        //console.log(url.split('/')[1].toLowerCase())
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
        //console.log(this.state.boardName)
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

    componentDidMount() {
        this.getBoardName()
        const params = {boardName:this.state.boardName}
        axios.get('/cat',{params})
            .then(response => {
                console.log(response)
                // console.log(response.data)
                this.setState({
                    data: response.data,
                })
                this.renderThreads();
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
            const postForm2 = document.getElementById("postReplyForm")
            postForm2.style.display = 'none';
            const btn2 = document.getElementById('toggleReply')
            btn2.style.display = 'block';
            this.componentDidUpdate()
        })

        
        this.componentDidUpdate()
    }

    componentDidUpdate() {
        //this.renderThreads();
    }

    render() {

        import ("./css/threadem.css");

        document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="./css/threadem.css">'

        this.getBoardName()

        var url_temp = window.location.pathname
        var catalogURL = '//' + window.location.host + '/' + url_temp.split('/')[1].toLowerCase() + '/catalog'

        var postcount = 0
        for(var i = 0; i < this.state.data.length; i++) {
            postcount+=this.state.data[i].postReplies.length
        }
        const threadID = this.state.data.length + 1000 + postcount

        var actionURL = '/uploadFile/' + url_temp.split('/')[1].toLowerCase() + '/' + threadID.toString() + '/' + url_temp.split('/')[3]
        //console.log(catalogURL)
        return (
    
<div>
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
</div>

<hr/>
<br/>

<div class="boardBanner">

<div class="boardTitle">{this.state.boardName}</div>
</div>
<br/>

<hr/>
<div class="navLinks">[<a href="../">Home</a>] [<a href={catalogURL}>Catalog</a>] [<a href="#bottom">Bottom</a>]</div>
<hr/>

<div id="thread">
    <div id="threadParent">
    </div>
    <div id="threadBody">
    </div>

    
    </div>

    <hr/>


    <div id="toggleReply">
        [<a href="#">Reply</a>]
    </div>


    <form method="post" action={actionURL} id='uploadForm' encType="multipart/form-data">
    <table id="postReplyForm">
    <tbody>
        <tr data-type="Name">
            <td>Name</td>
            <td><input name="names" type="text" tabindex="1" placeholder="Anonymous"/></td>
        </tr>
        <tr data-type="Comment">
            <td>Comment</td>
            <td>
                <textarea required name="comment" cols="48" rows="4" wrap="soft" tabindex="4"></textarea>
            </td>
        </tr>
        <tr data-type="File">
            <td>File</td>
            <td>
                <input id="postFile" name="sampleFile" type="file" tabindex="7"/>
                <input id="submitButton" type="submit" value="Post" tabindex="6"/>
            </td>
        </tr>
    </tbody>
    </table>
    </form>

<hr/>

<div class="navLinks">[<a href="../" accesskey="a">Home</a>] [<a href={catalogURL}>Catalog</a>] [<a href="#top">Top</a>] </div>

<hr class="desktop"/>


<div id="bottom"></div>
</div>

    );
  }

    renderThreads=()=>{
        var thread = document.getElementById("thread")
        thread.innerHTML = '<div id="threadParent"></div><div id="threadBody"></div>'
        var threadParent = document.getElementById("threadParent")
        var threadBody = document.getElementById("threadBody")
        threadBody.innerHTML = ''
        threadParent.innerHTML = ''


        var url = window.location.pathname

        var threadID_temp = url.split('/')[3]

        var threadIndex
        console.log(this.state.data)
        for(var i=0; i<this.state.data.length; i++) {
            console.log(this.state.data[i].threadID.toString())
            if(this.state.data[i].threadID.toString() == threadID_temp) {
                threadIndex = i;
                break;
            }
        }

        console.log(threadIndex)


        console.log(this.state.data[threadIndex])
        var fileName = (this.state.data[threadIndex].image).toString().replaceAll(' ','%20').split('\\')[2]
        var imageURL = '//' + window.location.host + '/uploads/'+(this.state.data[threadIndex].image).toString().replaceAll(' ','%20').split('\\')[2]
        imageURL.replaceAll(' ','%20')

        var img = new Image();
        var height
        var width

        img.onload = function(){
        height = img.height;
        width = img.width;
        }

        img.src = imageURL;
  
        var imgw = 150/height*width
        imgw = imgw.toString()

        var posterName;
            if (this.state.data[threadIndex].names)
                posterName = this.state.data[threadIndex].names
            else 
                posterName = 'Anonymous'

        var OpPost = `
        <div class="OP-Post" id=${threadID_temp}>
            <span class="OP-fileName">File: <span class="postFileName">
                <a href=${imageURL}>${fileName}</a></span>
            </span>
            <span class="postHeader">
                <span class="threadSubject">${this.state.data[threadIndex].subjects}</span>
                <span class="posterName">${posterName}</span>
                <span class="postDate">10/10/2010 10:10:10</span>
                <span class="postId">${threadID_temp}</span>
                <span class="replyIds">
                    ▶
                    <a href="#1234567891">&gt;&gt;1234567891</a>
                    <a href="#1234567892">&gt;&gt;1234567892</a>
                    <a href="#1234567893">&gt;&gt;1234567893</a>
                    <a href="#1234567894">&gt;&gt;1234567894</a>
                </span>
            </span>
            <div class="mainFlex">
                <div class="postImg">
                    <img src=${imageURL} height="150" width=${imgw}/>
                </div>
                <div class="postText">
                    ${this.state.data[threadIndex].comment}
                </div>
            </div>
        </div>`

        threadParent.insertAdjacentHTML('beforeend',OpPost)

        //render post replies
        for(var i=0; i<this.state.data[threadIndex].postReplies.length; i++) {
        
            var posterName;
            if (this.state.data[threadIndex].postReplies[i].names)
                posterName = this.state.data[threadIndex].postReplies[i].names
            else 
                posterName = 'Anonymous'

            var opThreadID = '>>'+threadID_temp.toString()
            var replaceText = '<a class="redirectPost" href="#'+ threadID_temp.toString() +'">&gt;&gt;' + threadID_temp.toString() +'(OP)</a>'
            var commentBody = this.state.data[threadIndex].postReplies[i].comment.replaceAll('\n','<br/>').replaceAll(opThreadID,replaceText)


            if(this.state.data[threadIndex].postReplies[i].image) {
            //console.log(typeof this.state.data[i].image)
            var imageURL = '//' + window.location.host + '/uploads/'+(this.state.data[threadIndex].postReplies[i].image).toString().replaceAll(' ','%20').split('\\')[2]
            imageURL.replaceAll(' ','%20')

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
            
            var url = window.location.pathname

            var fileName = (this.state.data[threadIndex].postReplies[i].image).toString().replaceAll(' ','%20').split('\\')[2]
            
            

            var postWithImage = `
            <div class="replyPost" id=${this.state.data[threadIndex].postReplies[i].postID}>
                <div class="postHeader">
                    <span class="posterName">${posterName}</span>
                    <span class="postDate">10/10/2010 10:10:10</span>
                    <span class="postId">${this.state.data[threadIndex].postReplies[i].postID}</span>
                    <span class="replyIds">
                        ▶
                        <a href="#1234567895">&gt;&gt;1234567895</a>
                        <a href="#1234567896">&gt;&gt;1234567896</a>
                    </span>
                </div>
                <div class="mainReply">
                    <div class="postImg">
                        <div>File: <span class="postFileName"><a href=${imageURL}>${fileName}</a></span></div>
                        <img src=${imageURL} height="110" width=${imgw}/>
                    </div>
                    <div class="postText">
                        ${commentBody}
                    </div>
                </div>
            </div>`

            threadBody.insertAdjacentHTML('beforeend',postWithImage)
            }
            else {
            
            var postWithoutImage = `
            <div class="replyPost" id=${this.state.data[threadIndex].postReplies[i].postID}>
                <div class="postHeader">
                    <div>
                        <span class="posterName">${posterName}</span>
                        <span class="postDate">10/10/2010 10:10:10</span>
                        <span class="postId">${this.state.data[threadIndex].postReplies[i].postID}</span>
        
                        <span class="replyIds">
                        </span>
                    </div>
                </div>
                <div class="mainReply">
                    <div class="postImg">
                    </div>
                    <div class="postText">
                        ${commentBody}
                    </div>
                </div>
                </div>`
                
            threadBody.insertAdjacentHTML('beforeend',postWithoutImage)
            }
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