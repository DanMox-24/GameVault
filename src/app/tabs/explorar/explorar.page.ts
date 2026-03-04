import { Component } from '@angular/core';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: false,
})
export class ExplorarPage {
  segmentoSeleccionado = 'generos';

  generos = [
    { nombre: 'Acción', icono: 'flash', cantidad: 15 },
    { nombre: 'RPG', icono: 'shield', cantidad: 12 },
    { nombre: 'Aventura', icono: 'navigate', cantidad: 10 },
    { nombre: 'Deportes', icono: 'football', cantidad: 8 },
    { nombre: 'Estrategia', icono: 'grid', cantidad: 6 },
    { nombre: 'Simulación', icono: 'airplane', cantidad: 5 }
  ];

  plataformas = [
    { nombre: 'PlayStation', icono: 'logo-playstation', cantidad: 18 },
    { nombre: 'Xbox', icono: 'logo-xbox', cantidad: 14 },
    { nombre: 'PC', icono: 'desktop', cantidad: 22 },
    { nombre: 'Nintendo', icono: 'game-controller', cantidad: 12 }
  ];

  constructor() {}

  cambiarSegmento() {
    console.log('Segmento cambiado a:', this.segmentoSeleccionado);
  }
}