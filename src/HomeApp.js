import React from "react";
import axios from "axios";
import "./css/spreadem.css";

export default class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
    <div id="maindc">
        <div id="logo">
            <a href="./index.html"><img src="./img/logoTemplate.png" width="400" height="150"/></a>
        </div>
        <div>
            <div class="rect" id="whale">
                <div class="headrect">
                    <h2>Whale cum to our Imageboard!</h2>
                </div>
                <div class="content">
                    <p>Imageboard name is still pending but here's some wall of text to fill tis p tag up. Don't pay this any heed.</p><br/>
                    <p>An imageboard is a type of Internet forum that focuses on the posting of images, often alongside text and discussion.</p><br/>
                    <p>Imageboards, similar to bulletin board systems, are used for discussions of a variety of topics</p>
                </div>
            </div>
            <div class="rect" id="rule">
                <div class="headrect">
                    <h2>Rules</h2>
                </div>
                <div class="content">
                    <ul list-style-type = "circle">
                        <li>You may not use this site unless you are above the age of 18</li><br/>
                        <li>You may not post content that is considered nsfw</li><br/>
                        <li>Do not post personal information or try to expose other users' anonymity</li><br/>
                        <li>Abuse the report system will result in a ban</li><br/>
                        <li>Trying to evade a ban will instead result in a permanent one</li><br/>
                        <li>Spamming or embedding external sites is not allowed</li>
                    </ul>
                </div>
            </div>
            <div class="rect" id="boards">
                <div class="headrect">
                <h2>Boards</h2>
                </div>
                <div class="content">
                    <div class="block-bread">
                        <h3>Vidya</h3>
                        <ul>
                            <li><a href="./v/">Video Games</a></li>
                            <li><a href="./vm/">Multiplayer</a></li>
                            <li><a href="./vmmo/">MMORPG</a></li>
                            <li><a href="./vr/">Virtual Reality</a></li>
                        </ul>

                        <br/>

                        <h3>Weebland</h3>
                        <ul>
                            <li><a href="./a/">Anime</a></li>
                            <li><a href="./m/">Manga</a></li>
                            <li><a href="./ln/">Light Novels</a></li>
                            <li><a href="./jp/">Japan</a></li>
                            <li><a href="./vt/">VTubers</a></li>
                        </ul>
                    </div>

                    <div class="block-bread">
                        <h3>Hobbies</h3>
                        <ul>
                            <li><a href="./pg/">Programming</a></li>
                            <li><a href="./ca/">Cars</a></li>
                            <li><a href="./mv/">Movies</a></li>
                            <li><a href="./tv/">TV Shows</a></li>
                            <li><a href="./sp/">Sports</a></li>
                            <li><a href="./ma/">Math</a></li>
                            <li><a href="./sci/">Science</a></li>
                            <li><a href="./co/">Comics</a></li>
                        </ul>
                    </div>

                    <div class="block-bread">
                    <h3>Misc</h3>
                        <ul>
                            <li><a href="./gd/">Game Development</a></li>
                            <li><a href="./mu/">Music</a></li>
                            <li><a href="./p/">Photography</a></li>
                            <li><a href="./lit/">Literature</a></li>
                        </ul>
                    </div>
                    <br/>
                </div>
            </div>
            <div class="rect">
                <div class="headrect">
                    <h2>Popular Threads</h2>
                </div>
                <div class="content">

                    <script>
                        /*
                        The popular threads will need to be sorted by view count / bump count
                        Then we pick one of the  top 5 bumped posts and post the title and the desc below the image
                        The height and width of the image tag needs to be added by react after taking the dimension of the image and scaling it down
                        */
                    </script>

                    <div id="threads">
                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>

                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>

                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>

                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>

                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>
                        
                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>
                        
                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>
                        
                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>

                        <div class="thread">
                            <div class="board">Anime and Manga</div>
                            <a href="./a/thread/123456789">
                                <img src="./img/ImageTemplate.jpg" alt="" width="150" height="84"/>
                            </a>
                            <div class="desc">
                                <b>NGNL S2 Waiting Room</b>: Join us bros in our eternal wait for the second season.
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
            <div class="rect" id="stat">
                <div class="headrect">
                    <h2>Stats</h2>
                </div>

                <script>
                        /*
                        The stats can be constant and inserted using react but will need 
                        a state component and interval if it should update every few seconds.
                        */
                </script>

                <div class="content">
                    <div class="horsp"><b>Total Posts:</b> 0</div>
                    <div class="horsp"><b>Total Threads:</b> 1</div>
                    <div class="horsp"><b>Current Users:</b> 1</div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}