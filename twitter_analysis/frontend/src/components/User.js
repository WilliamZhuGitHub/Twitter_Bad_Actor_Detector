import React, { Component } from 'react';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            twitterPFP: "",
            isVerified: "",
            name: "",
            description: "",
            username: "",
            createdAt: "",
            id: "",
            followersCount: "",
            followingCount: "",
            tweet_count: "",
            listedCount: ""
        
        };
        this.userName = this.props.match.params.userName;
        this.getUserDetails()
     }

    getUserTweets(){ 
         const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              code: this.state.id
            }),
          };
        fetch("/api/get-user-tweets", requestOptions)
         .then((response) => response.json())
         .then((user) => {
               //console.log("Code" + this.state.id)
                user = JSON.stringify(user)
                //console.log(user)
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      code: user
                    }),
                  };
                fetch("/api/get-sentiment", requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    //console.log("reached")
                    console.log(data)
                })

          });
    }

    getUserDetails(){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              code: this.userName,
            }),
          };
        fetch("/api/get-twitter-user", requestOptions)
         .then((response) => response.json())
         .then((user) => {
            this.setState({
            twitterPFP: user.profile_image_url,
            isVerified: user.verified,
            name: user.name,
            description: user.description,
            username: user.username,
            createdAt: user.created_at,
            id: user.id,
            followersCount: user.public_metrics.followers_count,
            followingCount: user.public_metrics.following_count,
            tweet_count: user.public_metrics.tweet_count,
            listedCount: user.public_metrics.listed_count
            }, () => this.getUserTweets());
         });
         };
    
    render(){
        return (<div style = {{marginTop: '100px', overflow: 'auto', backgroundColor: '#eee'}}>
                <section class ="background-color: #eee">
                <div class="container py-5">
                    <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                        <div class="card-body text-center">
                        <img src={this.state.twitterPFP}/>  

                             <h5 class="my-3">{this.userName}</h5>
                            <p class="text-muted mb-4"> {this.state.description}</p>
                            
                    
                            <div class="row">
                            <div class="col">
                                <p class="mb">NGram: </p>
                            </div>
                            <div class="col">
                                <p class="text-muted mb-0">XXXX</p>
                            </div>
                            </div>

                            <div class="row">
                            <div class="col">
                                <p class="mb">Sentiment: </p>
                            </div>
                            <div class="col">
                                <p class="text-muted mb-0">XXXX</p>
                            </div>
                            </div>


                        </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-8">
                        <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Full Name</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{this.state.name}</p>
                            </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Follower Count</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{this.state.followersCount}</p>
                            </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Following Count</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{this.state.followingCount}</p>
                            </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Tweet Count</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{this.state.tweet_count}</p>
                            </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Listed Count</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{this.state.listedCount}</p>
                            </div>
                            </div>

                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Created At</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{this.state.createdAt}</p>
                            </div>
                            </div>
                            
                            <hr/>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">ID</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{this.state.id}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </section>
        </div>) 
    }
}