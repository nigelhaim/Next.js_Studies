export class shift{
  private shift_id : number,
  private shift_sallary: number,
  private shift_in : Date,
  private shift_out: Date,
  private shift_hour: number,
  private shift_min: number,
  private shift_employee: number,

  constructor(id:number, shift_in: Date, shift_out: Date, shift_employee:number){
    this.shift_id = id;
    this.shift_in = shift_in;
    this.shift_out = shift_out;
    this.shift_employee = shift_employee;
  }
  public void MakeSallary(shift_hour:number, shift_min:number){
    let sallary = 0;

    sallary = 10 * shift_hour;
    if(shift_min > 30){
      sallary = sallary + 10;
    }
  }
}

