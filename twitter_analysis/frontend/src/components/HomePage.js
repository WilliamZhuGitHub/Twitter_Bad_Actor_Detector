import React, { Component } from 'react' ; 
import WelcomePage from './WelcomePage';
import AboutUs from './AboutUs';
import UserSearch from './UserSearch';
import TechStack from './TechStack';
import User from './User';
 
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
 
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
         <Router>
            <Switch>
                <Route path ='/about' component={AboutUs}></Route>
                <Route path ='/search' component={UserSearch}></Route>
                <Route path ='/tech' component={TechStack}></Route>
                <Route path = '/user/:userName' component={User} />
                 <Route exact path ='/' component={WelcomePage}></Route>     
            </Switch>
        </Router>);
    }
}