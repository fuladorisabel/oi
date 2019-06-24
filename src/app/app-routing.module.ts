import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastarUsuarioComponent } from './usuario/cadastar-usuario/cadastar-usuario.component';
import { PaisComponent } from './seubb/pais/pais.component';
import { PaiComponent } from './seubb/pai/pai.component';
import { MaeComponent } from './seubb/mae/mae.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'pais', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastar-usuario', component: CadastarUsuarioComponent },
  { path: 'pais', component: PaisComponent },
  { path: 'pai', component: PaiComponent },
  { path: 'mae', component: MaeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listar-usuario', loadChildren: './usuario/listar-usuario/listar-usuario.module#ListarUsuarioPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
