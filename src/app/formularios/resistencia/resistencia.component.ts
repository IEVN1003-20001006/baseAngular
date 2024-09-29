import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  colorCodes: { [key: string]: string } = {
    'Negro': 'black',
    'Café': '#8B4513',
    'Rojo': 'red',
    'Naranja': 'orange',
    'Amarillo': 'yellow',
    'Verde': 'green',
    'Azul': 'blue',
    'Violeta': 'violet',
    'Gris': 'gray',
    'Blanco': 'white'
  };

  resistenciaForm: FormGroup;
  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;
  resultado: boolean = false;

  constructor(private fb: FormBuilder) {

    this.resistenciaForm = this.fb.group({
      color1: [''],
      color2: [''],
      color3: [''],
      tolerancia: ['']
    });
  }

  calcular() {
    const { color1, color2, color3, tolerancia } = this.resistenciaForm.value;
    const valorColor1 = this.colors.indexOf(color1);
    const valorColor2 = this.colors.indexOf(color2);
    const multiplicador = Math.pow(10, this.colors.indexOf(color3));

    this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
    const toleranceFactor = tolerancia === 'oro' ? 0.05 : 0.10;
    this.valorMaximo = this.valor * (1 + toleranceFactor);
    this.valorMinimo = this.valor * (1 - toleranceFactor);
    this.resultado = true;
  }

  getColorCode(color: string): string {
    return this.colorCodes[color] || 'transparent';
  }

  getToleranceColor(): string {
    if (this.resistenciaForm.value.tolerancia === 'oro') {
      return 'gold';
    } else if (this.resistenciaForm.value.tolerancia === 'plata') {
      return 'silver';
    }
    return 'transparent';
  }
}
