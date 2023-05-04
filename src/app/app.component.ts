import { Component, Input } from '@angular/core';
import { User } from './models/user.model';
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
  /* selectedUser: "all";
  selectedFlightStatus: "all"; */


  constructor(private ApiService: ApiService) { }

  public getJson() {
    //Llamamos al servicio que nos devuelve un Observable
    this.ApiService.getJsonUrl().subscribe(data => {
      this.firstUsers = data.results.map((result: any) => {
        return new User(
          result['name']['first'],
          result['email'],
          result['location']['city']
        );
      });
      this.users = this.firstUsers.map(user => user);
      this.showData();

    });
  }

  // Iniciamos el componente
  ngOnInit() {
    this.getJson();
  }

  public showData() {
    this.show = true;
  }


}

