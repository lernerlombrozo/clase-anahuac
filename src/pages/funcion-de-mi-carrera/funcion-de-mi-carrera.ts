import { Component } from '@angular/core';

@Component({
  selector: 'page-funcion-de-mi-carrera',
  templateUrl: 'funcion-de-mi-carrera.html',
})
export class FuncionDeMiCarreraPage {
    
    P:number;
    V=1;
    n=1;
    T=1;
    r = 0.08205; //atm*L/(mol K)

    PVnRT(){
        this.P=this.n*this.r*(273.15+this.T)/this.V
    }
}
