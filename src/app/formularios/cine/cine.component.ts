import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  nombreComprador: string = '';
  cantidadBoletos: number = 0;
  usaCineco: boolean = false;
  totalPagar: number | null = null;

  precioBoleto: number = 12000;

  calcularTotal() {
    let subtotal = this.cantidadBoletos * this.precioBoleto;

    // Aplicar descuentos según la cantidad de boletos
    if (this.cantidadBoletos > 5) {
      subtotal *= 0.85;  // 15% de descuento
    } else if (this.cantidadBoletos >= 3) {
      subtotal *= 0.90;  // 10% de descuento
    }

    // Aplicar descuento adicional por tarjeta CINECO
    if (this.usaCineco) {
      subtotal *= 0.90;  // 10% de descuento adicional
    }

    this.totalPagar = subtotal;
  }
}
