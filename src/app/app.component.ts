import { Component} from '@angular/core';
import { User } from './models/user.model';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstUsers: Array<User> = [];
  users: Array<User> = [];
  selectedStatus = "all";
  selectedDeparture = "all";

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

  /* Creamos el filtro para la busqueda por estado de vuelo y
    por ciudad de despacho */

  public filter() {
    console.log(this.selectedStatus);

    this.users = this.firstUsers.filter(user => {

      if (this.selectedStatus == "all" && this.selectedDeparture == "all") {
        return true;
      }

      if (this.selectedDeparture != "all" && this.selectedStatus == "all") {
        return user.city == this.selectedDeparture;
      }

      if (this.selectedStatus != "all" && this.selectedDeparture == "all") {
        return user.flight == this.selectedStatus;
      }

      return user.flight === this.selectedStatus && user.city === this.selectedDeparture;

    });

  }

  onChangeStatus($event: any) {
    this.selectedStatus = $event.target.value;
  }

  onChangeCity($event: any) {
    this.selectedDeparture = $event.target.value;
  }


}

