import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Usuario } from '../entidade/usuario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.page.html',
  styleUrls: ['./listar-usuario.page.scss'],
})
export class ListarUsuarioPage implements OnInit {

  listaUsuario: Observable<Usuario[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaUsuario = this.fire.list<Usuario>('usuario').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)

  }
  ngOnInit() {
  }
  //<ion-item *ngFor = "let contato of listaContatos | async"> serve para percorrer a lista de contatos
}
