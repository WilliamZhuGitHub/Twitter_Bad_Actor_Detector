import React, { Component } from 'react';

export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            votesToSkip:2 ,
            guestCanPause: false,
            isHost: false,
        };
        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetails();

    }
        getRoomDetails(){
            fetch('/api/get-room' + '?code=' + this.roomCode).then((response) => 
            response.json()
            ).then((data) =>{
                this.setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host,
                });
            });
        }

    render(){
        return <div>
            <h3>{this.roomCode}</h3>
            <p>PFP: {this.state.votesToSkip}</p>
            <p>Description : {this.state.guestCanPause.toString()}</p>
            <p>Follower Count: {this.state.votesToSkip}</p>
            <p>Test Score: {this.state.votesToSkip}</p>

        </div>
    }
}