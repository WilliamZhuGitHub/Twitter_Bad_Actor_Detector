import React, { Component } from "react";
 
export default class Nav extends Component {
    constructor(props) {
        super(props);   
    }
    
    render() {
        return(
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#3297a8"}}>
                  <a className="navbar-brand" href="/"> 
            <img src ="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" height = '40' width = '60'/>
      Twitter Analysis
</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/search">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/api/get-twitter-user">Tech Stack</a>
      </li>
      
    
    </ul>
    
  </div>
</nav>

            </div>

            )
      
    
        }
    }
