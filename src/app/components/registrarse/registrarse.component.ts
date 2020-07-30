import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  user = {
    nombre : '',
    direccion : '',
    sexo : '',
    usuario : '',
    contrasena : ''
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  singUp(): void {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/ingresar']);
          },
        err => console.log(err)
      ); // respuesta que me va a dar el servidor
  }

}
