import React from 'react';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';
import firebase from '../Firebase'
import Login from './Login';

class App extends React.Component<{}, {}> {
  rerender = () => {
    this.forceUpdate();
  }

  render(){
    return (
      <div className="App">
        {firebase.isLogined()?
          <div>
            <TaskAdd />
            <TaskList /> 
          </div> : 
          <div>
            <Login rerenderApp = {this.rerender}/>
          </div>
        }
      </div>
    );  
  }
}

export default App;
