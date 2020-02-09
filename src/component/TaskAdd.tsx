import React from "react";
import TaskAddProps from "./TaskAddProps";
import SaveIcon from '@material-ui/icons/Save';
import { IconButton, TextField } from "@material-ui/core";

class TaskAdd extends React.Component<TaskAddProps, {}> {
    render(){
        return (
            <form>
                <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                    onChange={this.props.onChangeHandler}/>
                <IconButton 
                    aria-label = "delete"
                    onClick = {this.props.onClickHandler}>
                    <SaveIcon />
                </IconButton>
            </form>
        );  
      }
}

export default TaskAdd;