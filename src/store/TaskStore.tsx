import { observable, action } from 'mobx';
import TaskEntity from '../entity/TaskEntity';
import firebase from '../Firebase'


class TaskStore{
    @observable
    public tasks : TaskEntity[] = [];

    constructor(){
        const tasks = [...this.tasks]
        firebase.getFirestore()
        .collection('todo')
        .get()
        .then(docs => {
            docs.forEach(doc => {
                console.log(doc.data().content + " " + doc.id);
                tasks.push(new TaskEntity(doc.id, doc.data().content))
            })
            this.setTasks(tasks);
        });
    }

    @action
    public addTask = (content : string) : void => {
        firebase.getFirestore()
          .collection('todo')
          .add({
            content : content
          })
          .then(response => {
            console.log(response);
            this.appendTask(new TaskEntity(response.id, content));
          })
    }

    @action
    public deleteTask = (taskId : string) : void => {
        console.log(taskId);
        firebase.getFirestore()
            .collection('todo')
            .doc(taskId)
            .delete()
            .then(() => {
                const tasks = this.tasks.filter(task => task.id !== taskId);
                this.setTasks(tasks);
            });
    }

    @action
    private setTasks = (tasks : TaskEntity[]) : void => {
        this.tasks = tasks;
    }

    @action
    private appendTask = (task : TaskEntity) : void => {
        this.tasks.push(task);
    }

    public getTasks = () : TaskEntity[] => {
        return this.tasks;
    }
}

const taskStore  = new TaskStore();
export { taskStore };
export default TaskStore;