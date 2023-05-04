import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  http = inject(HttpClient);

  // Iniciamos el componente para
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data);
    });
  }
}
