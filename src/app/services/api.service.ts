import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Consultamos el api para obtener datos (get)
  public getJsonUrl() {
    return this.http.get<any>('https://randomuser.me/api/?results=100');
  }
}
