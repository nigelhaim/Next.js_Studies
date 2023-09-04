
export class task{
  private task_id : number,
  private task_title : string, 
  private task_description: string, 
  private task_done : boolean, 
  private task_status: string,
  private task_employee: number,

  constructor(id:number, task_title:string, task_description:string, task_done: boolean, task_status:string, task_employee:number){
    this.task_id = id;
    this.task_title = task_title;
    this.task_description = task_description;
    this.task_done = task_done;
    this.task_status = task_status;
    this.task_employee = task_employee;
  }
  
  public get task_id() : number{
    return this.task_id;
  }

  public get task_title() : number{
    return this.task_title;
  }

  public get task_description():string{
    return this.task_description;
  }

  public get task_done() : boolean {
    return this.task_done; 
  }

  public get task_status() : string {
    return this.task_status;
  }

  public get task_employee() : number {
    return 
  }
}
