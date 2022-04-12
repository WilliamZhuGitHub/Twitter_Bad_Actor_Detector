import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
 
export default class UserSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      error: "",
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.searchButtonPressed = this.searchButtonPressed.bind(this);
  }

  render() {
    return (
      <Grid container spacing={1} align="center">
        <Grid item xs={12} >
          <Typography variant="h4" component="h4">
            Twitter User Lookup
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <TextField
            error={this.state.error}
            label="Enter a twitter handle"
            placeholder="Enter a twitter handle"
            value={this.state.userName}
            helperText={this.state.error}
            variant="outlined"
            onChange={this.handleTextFieldChange}
          />
        </Grid>
        <Grid item xs={12} >
          <Button
            variant="contained"
            color="primary"
            onClick={this.searchButtonPressed}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    );
  }

  handleTextFieldChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  searchButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: this.state.userName,
      }),
    };
    fetch("/api/get-twitter-user", requestOptions)
        //  .then((response) => response.json())
        //  .then((user) => {
        //     console.log(user.created_at)
        //     console.log(user.description)
        //     console.log(user.username)
        //  });
      .then((response) => {
        if (response.ok) {
          this.props.history.push(`user/${this.state.userName}`);
          //this.props.history.push('room/529582');
          console.log(response.json())
          } else {
          this.setState({ error: "User Not Found." });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}