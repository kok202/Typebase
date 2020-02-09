import React from 'react';
import AppState from './AppState'
import TaskEntity from '../entity/TaskEntity'
import TaskAdd from './TaskAdd';
import TaskDisplay from './TaskDisplay';
import firebase from '../Firebase'
import Login from './Login';

class App extends React.Component<any, AppState> {
  constructor(props : any){
    super(props);
    this.state={
      inputText:"",
      tasks:[]
    }
  }

  componentDidMount() {
    const tasks = [...this.state.tasks]
    firebase.getFirestore()
      .collection('todo')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          console.log(doc.data().content + " " + doc.id);
          tasks.push(new TaskEntity(doc.id, doc.data().content))
        })
        this.setState({
          tasks
        })
      });
  }
  
  rerender = () => {
    this.forceUpdate();
  }

  onChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputText: event.target.value
    })
  }

  onClickHandler = (event : React.MouseEvent)  => {
    event.preventDefault();
    let inputText = this.state.inputText;
    firebase.getFirestore()
      .collection('todo')
      .add({
        content : inputText
      })
      .then(response => {
        console.log(response);
        let newTask = new TaskEntity("", inputText);
        let tasks = [...this.state.tasks, newTask];
        this.setState({
          inputText : "",
          tasks : tasks
        })
      })
  }

  deleteHandler = (taskId : string) => {
    console.log(taskId);
    firebase.getFirestore()
      .collection('todo')
      .doc(taskId)
      .delete()
      .then(() => {
        const tasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState({
          tasks
        })
      })
  }

  render(){
    return (
      <div className="App">
        {firebase.isLogined()?
          <div>
            <TaskAdd
              inputText = {this.state.inputText}
              onChangeHandler = {this.onChangeHandler} 
              onClickHandler = {this.onClickHandler}/>
            <TaskDisplay 
              tasks = {this.state.tasks}
              deleteHandler = {this.deleteHandler}/> 
          </div> : 
          <div>
            <Login 
              rerenderApp = {this.rerender}/>
          </div>
        }
      </div>
    );  
  }
}

export default App;
