import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  valor1: number = 0;
  valor2: number = 0;

  

  @Output() EnviarNumeros = new EventEmitter<number>();

  Suma(): void {
    const resultado = Number(this.valor1) + Number(this.valor2);
    this.EnviarNumeros.emit(resultado);
  } 
  Resta(): void {
    const resultado = Number(this.valor1) - Number(this.valor2);
    this.EnviarNumeros.emit(resultado);
  } 
  Multiplicacion(): void {
    const resultado = Number(this.valor1) * Number(this.valor2);
    this.EnviarNumeros.emit(resultado);
  } 
  Division(): void {
    const resultado = Number(this.valor1) / Number(this.valor2);
    this.EnviarNumeros.emit(resultado);
  } 
  Potencia(): void { 
    const resultado = Math.pow(Number(this.valor1), Number(this.valor2));
    this.EnviarNumeros.emit(resultado);
  }
  Raiz(): void {
    const valor1 = Number(this.valor1);
    const valor2 = Number(this.valor2);
    const resultado = Math.pow(valor2, 1 / valor1);
    this.EnviarNumeros.emit(resultado);
}

  CambiarValor1(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valor1 = Number(inputElement.value);
  }

  CambiarValor2(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valor2 = Number(inputElement.value);
  }
  
}
