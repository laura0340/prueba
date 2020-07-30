import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoUsuarioService {

  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getInfo(){
    return this.http.get<any>(this.url + '/infoUsuario');
  }
}
