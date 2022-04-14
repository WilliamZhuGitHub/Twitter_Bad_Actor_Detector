import React, { Component } from 'react' ; 

export default class HomePage extends Component {
    constructor(props) {
        super(props);   
    }
    
    render() {
        return(
            
            <div>
                <div class="jumbotron">
                <h1 class="display-4">Welcome, To Twitter Bad Actor Detector!</h1>
                <p class="lead">Bad Actors are people that use “throwaway” or fake accounts to facilitate this spread of misinformation. </p>
                <p>The Twitter Bad-Actor Detector is an application that goes right to the source of bad information… </p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/search" role="button">Start Searching</a>
 
                </p>
                 </div>
                
            </div>
            
        )
      
    
    }
}