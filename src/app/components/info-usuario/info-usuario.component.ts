import { Component, OnInit } from '@angular/core';
import { InfoUsuarioService } from '../../services/info-usuario.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  user = [];

  constructor(private infoUsuarioService: InfoUsuarioService) { }

  ngOnInit(): void {
    this.infoUsuarioService.getInfo()
    .subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      err => console.log(err)
    );
  }

}
