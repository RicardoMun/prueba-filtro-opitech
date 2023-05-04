let flightStatus = ['landed', 'operating', 'delayed', 'cancelled'];

export class User {

  name: string;
  email: string;
  flightStatus: string;
  gender: string;

  constructor(name:string, email:string, flightStatus:string, gender:string){
    this.name = name;
    this.email = email;
    this.flightStatus = flightStatus[Math.floor(Math.random() * flightStatus.length)];
    this.gender = gender;
  }

}
