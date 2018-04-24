import { Component } from '@angular/core';

@Component({
  selector: 'page-factorial',
  templateUrl: 'factorial.html',
})
export class FactorialPage {
    
    n=0;
    resultado:any;

    cuadrado(){
        this.resultado=this.n*this.n
    }

    factorial() {
        if(this.n>0 && this.n%1==0){
            this.resultado=1;
            for (var i = 1; i <= this.n; i++) {
                this.resultado=this.resultado*i;
                console.log(this.resultado);
            }
        } else if(this.n==0){
            this.resultado=1;
        }else {this.resultado="NAN";}
    }

    consecutivos() {
        if (this.n > 0 && this.n % 1 == 0) {
            this.resultado = 0;
            for (var i = 1; i < this.n; i++) {
                this.resultado = this.resultado + i;
                console.log(this.resultado);
            }
        }
        else if(this.n==0){
            0
        } else{this.resultado = "Número ingresado es negativo o decimal";}
    }

}
