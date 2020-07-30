import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }
  // aca hará la peticion de nuestro servidor
  // tslint:disable-next-line: typedef
  signUp(user) {
    return this.http.post<any>(this.url + '/registrarse', user);
  }
  // tslint:disable-next-line: typedef
  signIn(user) {
    return this.http.post<any>(this.url + '/ingresar', user);
  }

  // tslint:disable-next-line: typedef
  logedIn() {
    return !!localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  getToken() {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/ingresar']);
  }



}
