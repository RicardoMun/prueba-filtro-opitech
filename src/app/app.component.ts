import { Component, Input } from '@angular/core';
import { User } from './models/user.model';
import { City } from './models/city.model';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show = false;
  firstUsers: Array<User> = [];
  users: Array<User> = [];
  constructor(private ApiService: ApiService) { }

  public getJson() {
    //Llamamos al servicio que nos devuelve un Observable
    this.ApiService.getJsonUrl().subscribe(data => {
      this.firstUsers = data.results.map((result: any) => {
        return new User(
          result.name.first,
          result.email,
          result.location.city
        );
      });
      this.users = this.firstUsers.map(user => user);
      //console.log(this.users);
    })
  }

  // Iniciamos el componente
  ngOnInit() {
    this.getJson();
  }

  /* public filterUsers(city: string) {
    this.users = this.firstUsers.filter(user => user.city === city);
  } */


}

