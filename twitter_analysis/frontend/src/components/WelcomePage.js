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
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/create" role="button">Learn more</a>
                </p>
                 </div>
                
            </div>
            
        )
      
    
    }
}