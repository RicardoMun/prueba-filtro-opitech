let status = ['landed', 'operating', 'delayed', 'cancelled'];

export class User {

  name: string;
  email: string;
  status: string;
  gender: string;

  constructor(name:string, email:string, status:string, gender:string){
    this.name = name;
    this.email = email;
    this.status = status[Math.floor(Math.random() * status.length)];
    this.gender = gender;
  }

}
