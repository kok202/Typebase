import TaskEntity from "../entity/TaskEntity";

export default interface TaskDisplayProps{
    tasks : TaskEntity[];
    deleteHandler : (taskId : string) => void;
}