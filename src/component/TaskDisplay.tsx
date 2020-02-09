import React from "react";
import TaskDisplayProps from "./TaskDisplayProps";
import { ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, ListItemText, List } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder"
import DeleteIcon from "@material-ui/icons/Delete"

class TaskDisplay extends React.Component<TaskDisplayProps, {}> {
    displayTasks = () => {
      return this.props.tasks.map(task => {
        console.log(task.id);
        return(
          <ListItem key={task.id}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            
            <ListItemText
              primary = {task['content']}
              secondary = {null}>
            </ListItemText>
            
            <ListItemSecondaryAction>
              <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => {this.props.deleteHandler(task.id)}}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })
    }

    render(){
        return (
            <List>
                {this.displayTasks()}
            </List>
        );  
      }
}

export default TaskDisplay;