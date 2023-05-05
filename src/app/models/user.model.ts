let flightStatus = ['Landed', 'Operating', 'Delayed', 'Cancelled'];

export class User {

  name: string;
  email: string;
  flight: string;
  city: string;

  constructor(name:string, email:string, city:string){
    this.name = name;
    this.email = email;
    this.flight = flightStatus[Math.floor(Math.random() * flightStatus.length)];
    this.city = city;
  }

}
