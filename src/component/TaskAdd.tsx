import React from "react";
import TaskAddProps from "./TaskAddProps";
import SaveIcon from '@material-ui/icons/Save';
import { IconButton, TextField } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import TaskStore from "../store/TaskStore";

@inject('taskStore')
@observer
class TaskAdd extends React.Component<TaskAddProps, {}> {
    private input? : HTMLInputElement;
    private taskStore : TaskStore;

    constructor(props : TaskAddProps){
        super(props);
        this.taskStore = this.props.taskStore as TaskStore;
    }

    onClickHandler = (event : React.MouseEvent)  => {
        event.preventDefault();
        this.input = this.input as HTMLInputElement;
        const content = this.input.value;
        console.log("request conent : " + content);
        if(content !== ''){
            this.taskStore.addTask(content);
        }
      }

    render(){
        return (
            <form>
                <TextField 
                    id = "outlined-basic" 
                    label = "Outlined" 
                    variant = "outlined" 
                    inputRef = {ref => {this.input = ref as HTMLInputElement}}/>
                <IconButton 
                    aria-label = "delete"
                    onClick = {this.onClickHandler}>
                    <SaveIcon />
                </IconButton>
            </form>
        );  
      }
}

export default TaskAdd;