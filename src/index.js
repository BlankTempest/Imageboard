import React from "react";
import ReactDOM from "react-dom";
import HomeApp from "./HomeApp";
import CatalogApp from "./CatalogApp";

var url = window.location.pathname

if(url.length == 1 && url == "/")
    ReactDOM.render(<HomeApp />, document.getElementById("root"));
else if(url.split('/')[2].toLowerCase() == "catalog")
    ReactDOM.render(<CatalogApp />, document.getElementById("root"));
    
//else render 404