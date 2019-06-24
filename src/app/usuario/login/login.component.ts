import { Component } from '@angular/core';


@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
})

export class LoginComponent {
  nome: string;
  email: string;
  senha: number;
  verificar(): void { }

}
