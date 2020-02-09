import TaskEntity from "../entity/TaskEntity";
import TaskStore from "../store/TaskStore";

export default interface TaskListItemProps {
    taskStore? : TaskStore;
    task : TaskEntity;
}