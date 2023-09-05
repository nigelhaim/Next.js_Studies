
export class task{
  private t_id : number;
  private t_title : string; 
  private t_description: string; 
  private t_done : boolean;
  private t_status: string;
  private t_employee: number;

  constructor(id:number, task_title:string, task_description:string, task_done: boolean, task_status:string, task_employee:number){
    this.t_id = id;
    this.t_title = task_title;
    this.t_description = task_description;
    this.t_done = task_done;
    this.t_status = task_status;
    this.t_employee = task_employee;
  }
  
  public get task_id() : number{
    return this.t_id;
  }

  public get task_title() : string{
    return this.t_title;
  }

  public get task_description():string{
    return this.t_description;
  }

  public get task_done() : boolean {
    return this.t_done; 
  }

  public get task_status() : string {
    return this.t_status;
  }

  public get task_employee() : number {
    return this.t_employee;
  }
}
