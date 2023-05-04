import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Obtenemos el JSON
  public getJsonUrl() {
    return this.http.get<any>('https://randomuser.me/api/?results=100');
  }
}
