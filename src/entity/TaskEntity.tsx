export default class TaskEntity{
    id: string;
    content : string;
    
    constructor(id : string, content : string){
        this.id = id;
        this.content = content;
    }
}