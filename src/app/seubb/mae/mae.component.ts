import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { Seubb } from '../entidade/seubb';
@Component({
  selector: 'mae-component',
  templateUrl: 'mae.component.html',
})

export class MaeComponent {


  olhos: string;
  cabelo: string;
  pele: string;
  seubb: Seubb = new Seubb();
  constructor(private banco: AngularFireDatabase) { }
  ngOnInit() {
  }
verificar(){
      this.banco.list('seubb').push(this.seubb);

  }
}
