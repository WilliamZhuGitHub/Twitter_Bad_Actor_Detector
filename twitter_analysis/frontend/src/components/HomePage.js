import React, { Component } from 'react' ; 
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import WelcomePage from './WelcomePage';
import AboutUs from './AboutUs';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Room from './Room';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
         <Router>
            <Switch>
                <Route path ='/join' component={RoomJoinPage}></Route>
                <Route path ='/create' component={CreateRoomPage}></Route>
                <Route path ='/about' component={AboutUs}></Route>

                <Route path = '/room/:roomCode' component={Room} />
                <Route exact path ='/' component={WelcomePage}></Route>     
            </Switch>
        </Router>);
    }
}