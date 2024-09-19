import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-base',
  templateUrl: './operas-base.component.html',
  styleUrl: './operas-base.component.css'
})
export class OperasBaseComponent {
num1=''
num2=''
resultado:number=0;
sumar(){
  this.resultado=parseInt(this.num1)+parseInt(this.num2)
}
}
