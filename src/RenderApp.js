import React from "react";
import HomeApp from "./HomeApp";
import CatalogApp from "./CatalogApp";
import Error404 from "./Error404";
import ThreadApp from "./ThreadApp";
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default function App(){
            
        var url = window.location.pathname
        var valid = true

        if(url.length == 1 && url == "/"){
            return (
            <Router>
                    <Route>
                            <HomeApp />
                    </Route>
            </Router>  )
        }
        else if(url.split('/')[2] && url.split('/')[2].toLowerCase() == "catalog") {

            //if url is empty then it tried to send an empty object to mongodb
            //if url doens't match then it's better to render 404 before the catalogapp render
            
            var url = window.location.pathname
                switch(url.split('/')[1].toLowerCase()){
                    case "a": 
                        break;
                    case "ca": 
                        break;
                    case "co": 
                        break;
                    case "gd": 
                        break;
                    case "jp": 
                        break;
                    case "lit": 
                        break;
                    case "ln": 
                        break;
                    case "m": 
                        break;
                    case "ma": 
                        break;
                    case "mu": 
                        break;
                    case "mv": 
                        break;
                    case "p": 
                        break;
                    case "pg": 
                        break;
                    case "sci": 
                        break;
                    case "sp": 
                        break;
                    case "tv": 
                        break;
                    case "v": 
                        break;
                    case "vm": 
                        break;
                    case "vmmo": 
                        break;
                    case "vr": 
                        break;
                    case "vt": 
                        break;
                    default:
                        //url doesn't match, 404
                        valid = false
                        break;
                }
                if(valid)
                    //ReactDOM.render(<CatalogApp />, document.getElementById("root"));
                    return (
                    <Router>
                            <Route>
                            <       CatalogApp />
                            </Route>
                    </Router> )
        }

        else if(url.split('/')[1].toLowerCase() == 'thread')
            //ReactDOM.render(<ThreadApp />, document.getElementById("root"));
            return (
            <Router>
                    <Route>
                            <ThreadApp />
                    </Route>
            </Router> )

        //else render 404
        else 
            //ReactDOM.render(<Error404 />, document.getElementById("root"));
            return (
            <Router>
                    <Route>
                            <Error404 />
                    </Route>
            </Router> )

        if(!valid)
            //ReactDOM.render(<Error404 />, document.getElementById("root"));
            return (
            <Router>
                    <Route>
                            <Error404 />
                    </Route>
            </Router> )   
}