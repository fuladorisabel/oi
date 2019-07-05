import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Seubb } from '../entidade/seubb';

@Component({
  selector: 'app-lista-bb',
  templateUrl: './lista-bb.page.html',
  styleUrls: ['./lista-bb.page.scss'],
})
export class ListaBbPage implements OnInit {
  [x: string]: any;

  listaSeubb: Observable<Seubb[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaSeubb = this.fire.list<Seubb>('seubb').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)

  }
  ngOnInit() {
  }
  //<ion-item *ngFor = "let contato of listaContatos | async"> serve para percorrer a lista de contatos
}
