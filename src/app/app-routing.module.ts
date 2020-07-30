import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

// componentes que vamos a usar
import {IngresarComponent} from './components/ingresar/ingresar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
//import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';

import { AuthGuard } from './auth.guard';


// creamos la ruta de los componentes
const routes: Routes = [
  {
    path: '',
    redirectTo: '/registrarse',
    pathMatch: 'full'
  },
{
  path: 'registrarse',
  component: RegistrarseComponent
},
{
  path: 'ingresar',
  component: IngresarComponent
},
{
  path: 'infoUsuario',
  component: InfoUsuarioComponent,
  // ruta a proteger
  canActivate: [AuthGuard],

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
