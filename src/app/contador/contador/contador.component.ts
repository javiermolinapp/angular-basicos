import {Component} from '@angular/core'


@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h1>Tarea</h1>
    <h3>La base es: {{ base }}</h3>

    <button (click)="acumular(base)">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'APP Contador';
  numero: number = 10;

  base: number = 7;

  acumular(valor: number) {
    this.numero += valor;
  }
}