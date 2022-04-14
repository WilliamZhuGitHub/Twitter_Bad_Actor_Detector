import React, { Component } from 'react';

export default class AboutUs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div style = {{marginTop : '250px', overflow: 'auto'}}>
      <section class="jumbotron text-center" >
        <div class="container">
          <h1 class="jumbotron-heading">What Do We Do?</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light ">
        <div class="container" >

          <div class="row">
            
            
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://miro.medium.com/max/1200/1*njhuKpqziXtVFjykPV3yoQ.jpeg' ></img>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://netbasequid.com/wp-content/uploads/Social-Sentiment-Analysis.jpg' ></img>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://res.cloudinary.com/practicaldev/image/fetch/s--eORtghWj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5wn7oiysbt75cgc8cgv9.jpg' ></img>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>

   
            
          </div>
        </div>
      </div>
        </div>
        )
    }
}