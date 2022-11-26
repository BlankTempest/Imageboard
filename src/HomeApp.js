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
            <a href="../"><img src="./img/logoTemplate.png" width="400" height="150"/></a>
        </div>
        <div>
            <div class="rect" id="whale">
                <div class="headrect">
                    <h2>Welcome to our Imageboard!</h2>
                </div>
                <div class="content">
                    <p>An imageboard is a type of Internet forum that focuses on the posting of images, often alongside text and discussion.</p><br/>
                    <p>Imageboards, similar to bulletin board systems, are used for discussions of a variety of topics</p><br/>
                    <p>Our Imageboard has a wide variety of boards for you to have discussions in.</p>
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
                            <li><a href="./v/catalog/">Video Games</a></li>
                            <li><a href="./vm/catalog/">Multiplayer</a></li>
                            <li><a href="./vmmo/catalog/">MMORPG</a></li>
                            <li><a href="./vr/catalog/">Virtual Reality</a></li>
                        </ul>

                        <br/>

                        <h3>Weebland</h3>
                        <ul>
                            <li><a href="./a/catalog/">Anime</a></li>
                            <li><a href="./m/catalog/">Manga</a></li>
                            <li><a href="./ln/catalog/">Light Novels</a></li>
                            <li><a href="./jp/catalog/">Japan</a></li>
                            <li><a href="./vt/catalog/">VTubers</a></li>
                        </ul>
                    </div>

                    <div class="block-bread">
                        <h3>Hobbies</h3>
                        <ul>
                            <li><a href="./pg/catalog/">Programming</a></li>
                            <li><a href="./ca/catalog/">Cars</a></li>
                            <li><a href="./mv/catalog/">Movies</a></li>
                            <li><a href="./tv/catalog/">TV Shows</a></li>
                            <li><a href="./sp/catalog/">Sports</a></li>
                            <li><a href="./ma/catalog/">Math</a></li>
                            <li><a href="./sci/catalog/">Science</a></li>
                            <li><a href="./co/catalog/">Comics</a></li>
                        </ul>
                    </div>

                    <div class="block-bread">
                    <h3>Misc</h3>
                        <ul>
                            <li><a href="./gd/catalog/">Game Development</a></li>
                            <li><a href="./mu/catalog/">Music</a></li>
                            <li><a href="./p/catalog/">Photography</a></li>
                            <li><a href="./lit/catalog/">Literature</a></li>
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