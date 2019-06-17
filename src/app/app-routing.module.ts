import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastarUsuarioComponent } from './usuario/Cadastar-usuario/Cadastar-usuario.component';
import { PaisComponent } from './seubb/pais/pais.component';
import { PaiComponent } from './seubb/pai/pai.component';
import { MaeComponent } from './seubb/mae/mae.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'pais', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Cadastar-usuario.component', component: CadastarUsuarioComponent },
  { path: 'Pais.component', component: PaisComponent },
  { path: 'Pai.component', component: PaiComponent },
  { path: 'Mae.component', component: MaeComponent },
  { path: 'Login.component', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
