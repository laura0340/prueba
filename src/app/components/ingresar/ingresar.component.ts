import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  user = {
    nombre : '',
    direccion : '',
    sexo : '',
    usuario : '',
    contrasena : ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  singIn(): void {
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          // localStorage.setItem('token', res.sexo);
          console.log(res.nombre, res.direccion, res.sexo);
          this.router.navigate(['/infoUsuario']);
          },
        err => console.log(err)
      ); // respuesta que me va a dar el servidor
  }

}
