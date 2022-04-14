import React, { Component } from 'react';

export default class TechStack extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div style = {{marginTop : '650px', overflow: 'auto'}}>
      <section class="jumbotron text-center" >
        <div class="container">
          <h1 class="jumbotron-heading">Frameworks and Libraries</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Learn More</a>
            <a href="#" class="btn btn-secondary my-2">GitHub</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light ">
        <div class="container" >

          <div class="row">
            
            
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://i.pinimg.com/originals/2e/2f/45/2e2f45aa9fa7507bffa9527f06cdae51.jpg' ></img>
                <div class="card-body">
                  <p class="card-text">Djano Rest API Framework</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'http://www.giantstep.ca/wp/wp-content/uploads/2017/04/Twitter_API_Developers-300x164.jpg' ></img>
                <div class="card-body">
                  <p class="card-text">Twitter's API</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg' ></img>
                <div class="card-body">
                  <p class="card-text">React</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://analyticsindiamag.com/wp-content/uploads/2019/06/tf_logo_social.png' ></img>
                <div class="card-body">
                  <p class="card-text">TensorFlow</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://png.pngitem.com/pimgs/s/32-324790_keras-python-hd-png-download.png' ></img>
                <div class="card-body">
                  <p class="card-text">Keras</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img src = 'https://analyticsdrift.com/wp-content/uploads/2021/04/Scikit-learn-free-course.jpg' ></img>
                <div class="card-body">
                  <p class="card-text">Sci-kit-Learn</p>
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