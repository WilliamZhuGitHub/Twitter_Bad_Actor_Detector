import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Nav from "./Nav";
 
 
export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        //return(<h1>Temp React Webpage ( HOME )</h1>)
        
         return(
             <div>
            <Nav/>
                 <div className="center">
                    <HomePage />
                </div>
 
          </div>
        );
    }
 
    
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);