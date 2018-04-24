import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactorialPage } from './../factorial/factorial';
import { FuncionDeMiCarreraPage } from './../funcion-de-mi-carrera/funcion-de-mi-carrera';
import { CameraPage} from './../camera/camera'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    factorialPage=FactorialPage;
    funcionPage = FuncionDeMiCarreraPage;
    cameraPage=CameraPage;

  constructor(public navCtrl: NavController) {
  }

  goTo(page){
        this.navCtrl.push(page)
  }

}
