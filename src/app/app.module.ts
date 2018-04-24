import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FactorialPage } from '../pages/factorial/factorial'
import { FuncionDeMiCarreraPage } from '../pages/funcion-de-mi-carrera/funcion-de-mi-carrera'
import { CameraPage } from '../pages/camera/camera'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FactorialPage,
    FuncionDeMiCarreraPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FactorialPage,
    FuncionDeMiCarreraPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
