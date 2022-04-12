import React, { Component } from 'react' ; 
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import WelcomePage from './WelcomePage';
import AboutUs from './AboutUs';
import UserSearch from './UserSearch';
import User from './User';
import Room from './Room';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
 
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
                <Route path ='/search' component={UserSearch}></Route>

                <Route path = '/user/:userName' component={User} />
                <Route path = '/room/:roomCode' component={Room} />
                <Route exact path ='/' component={WelcomePage}></Route>     
            </Switch>
        </Router>);
    }
}