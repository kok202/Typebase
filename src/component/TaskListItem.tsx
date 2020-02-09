import React from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, ListItemText } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder"
import DeleteIcon from "@material-ui/icons/Delete"
import { observer, inject } from "mobx-react";
import TaskListItemProps from './TaskListItemProps';
import TaskStore from "../store/TaskStore";

@inject('taskStore')
@observer
class TaskDisplay extends React.Component<TaskListItemProps, {}> {
    private taskStore : TaskStore;

    constructor(props : TaskListItemProps){
        super(props);
        this.taskStore = this.props.taskStore as TaskStore;
    }

    deleteHandler = (taskId : string) => {
        this.taskStore.deleteTask(taskId);
    }

    render(){
        return(
          <ListItem key={this.props.task.id}>
            <ListItemAvatar>
                <Avatar>
                <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            
            <ListItemText
                primary = {this.props.task.content}
                secondary = {null}>
            </ListItemText>
            
            <ListItemSecondaryAction>
                <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => {this.deleteHandler(this.props.task.id)}}>
                <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      }
}

export default TaskDisplay;