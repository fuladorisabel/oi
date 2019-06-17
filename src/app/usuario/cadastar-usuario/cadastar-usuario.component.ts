import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cadastar-usuario',
  templateUrl: './cadastar-usuario.component.html',
  styleUrls: ['./cadastar-usuario.component.scss'],
})
export class CadastarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private banco: AngularFireDatabase) { }


  ngOnInit() {
  }
  salvar() {
    this.banco.list('usuario').push(this.usuario);
  }

}
