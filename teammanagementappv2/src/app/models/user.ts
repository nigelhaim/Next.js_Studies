export class user{
  private user_id : number;
  private user_f_name : string;
  private user_l_name : string; 
  private user_role: boolean;
  private user_username: string; 
  private user_password: string;

  constructor(id:number, f_name:string, l_name:string, role:boolean, username:string, password:string){
    this.user_id = id;
    this.user_f_name = f_name;
    this.user_l_name = l_name;
    this.user_role = role;
    this.user_username = username;
    this.user_password = password;
  }

  public get id() : number {
    return this.user_id;
  }

  public get f_name() : string {
    return this.user_f_name;
  }

  public get l_name() : string {
    return this.user_l_name; 
  }

  public get role() : boolean {
    return this.user_role;
  }

  public get username() : string {
    return this.user_username;
  }

  public get password() : string {
    return this.user_password;
  }
}

/*

function createUser(){ 
}

function id(user:user){
  return user.id;
}

function f_name(user:user){
  return user.f_name;
}

function l_name(user:user){
  return user.l_name;
}

function role(user:user) {
  return user.role;
}

function username(user:user) {
  return user.username;
}

function password(user:user){
  return user.password;
}*/
