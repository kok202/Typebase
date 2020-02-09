import React from "react";
import { Button } from "@material-ui/core";
import LoginProps from "./LoginProps";
import firebase from '../Firebase'

class Login extends React.Component<LoginProps, {}> {

    onClickLoginHandler = () => {
        firebase.signInWithGoogle()
            .then(response => {
                console.log(response);
                this.props.rerenderApp();
            });
    }

    render(){
        return (
            <div>
                <h3> You need to login first</h3>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.onClickLoginHandler}>
                    Login
                </Button>
            </div>
        );  
      }
}

export default Login;