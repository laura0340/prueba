import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){ }
  // para validar si el token existe
  canActivate(): boolean{
    if (this.authService.logedIn()) {
      return true;
      // si existe retorna un true
    }
    this.router.navigate(['/ingresar']);
    return false;
    // si no existe nos enruta a ingresar
  }

}
