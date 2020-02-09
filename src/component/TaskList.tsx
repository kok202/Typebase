import React from "react";
import TaskListProps from "./TaskListProps";
import { observer, inject } from "mobx-react";
import TaskListItem from "./TaskListItem"
import { List } from "@material-ui/core";
import TaskStore from "../store/TaskStore";

@inject('taskStore')
@observer
class TaskDisplay extends React.Component<TaskListProps, {}> {
    private taskStore : TaskStore;

    constructor(props : TaskListProps){
        super(props);
        this.taskStore = this.props.taskStore as TaskStore;
    }

    displayTasks = () => {
      return this.taskStore.getTasks().map(task => {
        console.log(task.id);
          return(
            <TaskListItem 
              key = {task.id}
              task = {task}/>
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