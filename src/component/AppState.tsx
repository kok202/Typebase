import TaskEntity from "../entity/TaskEntity";

export default interface AppState{
    inputText : string;
    tasks : TaskEntity[];
}