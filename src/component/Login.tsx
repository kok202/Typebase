import React from "react";
import { Button, Box } from "@material-ui/core";
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
                <Box 
                    display="flex" 
                    justifyContent="center" >
                    <h3> You need to login first</h3>
                </Box>
                <Box 
                    display="flex"
                    justifyContent="center" >
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={this.onClickLoginHandler}>
                        Login
                    </Button>
                </Box>
            </div>
        );  
      }
}

export default Login;