import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastarUsuarioComponent } from './usuario/cadastar-usuario/cadastar-usuario.component';
import { PaisComponent } from './seubb/pais/pais.component';
import { PaiComponent } from './seubb/pai/pai.component';
import { MaeComponent } from './seubb/mae/mae.component';
import { LoginComponent } from './usuario/login/login.component';
@NgModule({
  declarations: [AppComponent,CadastarUsuarioComponent,PaisComponent,PaiComponent,MaeComponent,LoginComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD1E_KWGIxKpKbWrb34zKru_fXqunTDifw",
       authDomain: "vaiiiii.firebaseapp.com",
       databaseURL: "https://vaiiiii.firebaseio.com",
       projectId: "vaiiiii",
       storageBucket: "vaiiiii.appspot.com",
       messagingSenderId: "475302170092",
       appId: "1:475302170092:web:6b32b76f6c2e154b"
 }), AngularFireDatabaseModule//biblioteca
],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
