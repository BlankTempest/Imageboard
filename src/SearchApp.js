import React from "react";
import "./css/search.css";

export default class App extends React.Component {


    render() {
        return (


<div>
    <center><h1>Imageboard Search</h1></center> 
    <center><h1>`imageboard` 0 comments</h1></center>
    <center>
        <input type="search" size="30" maxlength="50" required/>
        &nbsp;<button type="submit">Search</button>
    </center>
    <hr/>

    <div class="noSearchResults">
        <center><h1>No Search Results</h1></center>
    </div>


    <span style="background-color:yellow;">word that matched search</span>
    <div class="searchResults">
        <div>
            <div class="OP-Post" id="1234567890">
                <span class="OP-fileName">File: <span class="postFileName">
                    <a href="./img/ImageTemplate.jpg">ImageTemplate.jpg</a></span>
                </span>
                <span class="postHeader">
                    <span class="threadSubject">NGNL S2 Waiting Room</span>
                    <span class="posterName">Anonymous</span>
                    <span class="postDate">10/10/2010 10:10:10</span>
                    <span class="postId">1234567890</span>
                </span>
                <div class="mainFlex">

                    <div class="postImg">
                        <img src="./img/ImageTemplate.jpg" height="150" width="240"/>
                    </div>
                    <div class="flexInsideMainReply">
                        <div class="postText">
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.
                            Join us bros in our eternal wait for the second season.
                            Join us bros in our eternal wait for the second season.
                            Join us bros in our eternal wait for the second season.
                            Join us bros in our eternal wait for the second season.
                            Join us bros in our eternal wait for the second season.
                            Join us bros in our eternal wait for the second season.

                        </div>

                        <div class="replyPost" id="1234567892">
                            <div class="postHeader">
                                <div>
                                    <span class="posterName">Anonymous</span>
                                    <span class="postDate">10/10/2010 10:10:10</span>
                                    <span class="postId">1234567892</span>


                                </div>
                            </div>
                            <div class="mainReply">
                                <div class="postImg">
                                    <div>File: <span class="postFileName"><a href="./img/ImageTemplate.jpg">ImageTemplate.jpg</a></span></div>
                                    <img src="./img/ImageTemplate.jpg" height="110" width="170"/>
                                </div>
                                <div class="postText">

                                    <a class="redirectPost" href="./vg/1234567890#1234567891">&lt;&lt;1234567891</a>  <br/>
                                    I'm waiting <span style="background-color:yellow;">with</span> you too bro
                                </div>
                            </div>
                        </div>

                        <div class="replyPost" id="1234567892">
                            <div class="postHeader">
                                <div>
                                    <span class="posterName">Anonymous</span>
                                    <span class="postDate">10/10/2010 10:10:10</span>
                                    <span class="postId">1234567892</span>


                                </div>
                            </div>
                            <div class="mainReply">
                                <div class="postImg">
                                    <div>File: <span class="postFileName"><a href="./img/ImageTemplate.jpg">ImageTemplate.jpg</a></span></div>
                                    <img src="./img/ImageTemplate.jpg" height="110" width="170"/>
                                </div>
                                <div class="postText">

                                    <a class="redirectPost" href="./vg/1234567890#1234567891">&lt;&lt;1234567891</a>  <br/>
                                    I'm waiting <span style="background-color:yellow;">with</span> you too bro
                                    Join us bros in our eternal wait for the second season.
                                    Join us bros in our eternal wait for the second season.
                                    Join us bros in our eternal wait for the second season.
                                    Join us bros in our eternal wait for the second season.
 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <hr/>
            <br/>


            <div class="OP-Post" id="1234567890">
                <span class="OP-fileName">File: <span class="postFileName">
                    <a href="./img/ImageTemplate.jpg">ImageTemplate.jpg</a></span>
                </span>
                <span class="postHeader">
                    <span class="threadSubject">NGNL S2 Waiting Room</span>
                    <span class="posterName">Anonymous</span>
                    <span class="postDate">10/10/2010 10:10:10</span>
                    <span class="postId">1234567890</span>

                </span>
                <div class="mainFlex">

                    <div class="postImg">
                        <img src="./img/ImageTemplate.jpg" height="150" width="240"/>
                    </div>
                    <div class="flexInsideMainReply">
                        <div class="postText">
                            Join us bros in our eternal wait for the second season.<br/>
                            Join us bros in our eternal wait for the second season.<br/>

                        </div>

                        <div class="replyPost" id="1234567892">
                            <div class="postHeader">
                                <div>
                                    <span class="posterName">Anonymous</span>
                                    <span class="postDate">10/10/2010 10:10:10</span>
                                    <span class="postId">1234567892</span>


                                </div>
                            </div>
                            <div class="mainReply">
                                <div class="postImg">
                                    <div>File: <span class="postFileName"><a href="./img/ImageTemplate.jpg">ImageTemplate.jpg</a></span></div>
                                    <img src="./img/ImageTemplate.jpg" height="110" width="170"/>
                                </div>
                                <div class="postText">

                                    <a class="redirectPost" href="./vg/1234567890#1234567891">&lt;&lt;1234567891</a>  <br/>
                                    I'm waiting <span style="background-color:yellow;">with</span> you too bro
                                </div>
                            </div>
                        </div>

                        <div class="replyPost" id="1234567892">
                            <div class="postHeader">
                                <div>
                                    <span class="posterName">Anonymous</span>
                                    <span class="postDate">10/10/2010 10:10:10</span>
                                    <span class="postId">1234567892</span>

                                </div>
                            </div>
                            <div class="mainReply">
                                <div class="postImg">
                                </div>
                                <div class="postText">

                                    <a class="redirectPost" href="./vg/1234567890#1234567891">&lt;&lt;1234567891</a>  <br/>
                                    I'm waiting <span style="background-color:yellow;">with</span> you too bro
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    



    <hr/>
    <div class="foot">
        <span>[<a href="">Previous</a>]</span>
        <span>
            [
            <a href="index.html">
                Home
            </a>
            ]
        </span>
        <span>
            [<a href="">Next</a>]
        </span>
    </div>
</div>

    );
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