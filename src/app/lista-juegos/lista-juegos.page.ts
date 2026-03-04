import { Component } from '@angular/core';

interface Juego {
  nombre: string;
  plataforma: string;
  genero: string;
  anio: number;
  estado: string;
  calificacion: number;
}

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.page.html',
  styleUrls: ['./lista-juegos.page.scss'],
  standalone: false,
})
export class ListaJuegosPage {
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  
  filtroSeleccionado = 'todos';
  
  juegos: Juego[] = [
    { nombre: 'The Last of Us Part II', plataforma: 'PlayStation', genero: 'Acción', anio: 2020, estado: 'Completado', calificacion: 5 },
    { nombre: 'Elden Ring', plataforma: 'PC', genero: 'RPG', anio: 2022, estado: 'Jugando', calificacion: 5 },
    { nombre: 'God of War Ragnarök', plataforma: 'PlayStation', genero: 'Acción', anio: 2022, estado: 'Pendiente', calificacion: 4 },
    { nombre: 'Halo Infinite', plataforma: 'Xbox', genero: 'FPS', anio: 2021, estado: 'Completado', calificacion: 4 },
    { nombre: 'Zelda: Tears of the Kingdom', plataforma: 'Nintendo', genero: 'Aventura', anio: 2023, estado: 'Jugando', calificacion: 5 },
    { nombre: 'Cyberpunk 2077', plataforma: 'PC', genero: 'RPG', anio: 2020, estado: 'Pendiente', calificacion: 4 },
    { nombre: 'Red Dead Redemption 2', plataforma: 'PlayStation', genero: 'Acción', anio: 2018, estado: 'Completado', calificacion: 5 },
    { nombre: 'Baldurs Gate 3', plataforma: 'PC', genero: 'RPG', anio: 2023, estado: 'Pendiente', calificacion: 5 }
  ];

  juegosFiltrados: Juego[] = [];

  constructor() {
    this.juegosFiltrados = this.juegos;
  }

  aplicarFiltro() {
    if (this.filtroSeleccionado === 'todos') {
      this.juegosFiltrados = this.juegos;
    } else if (this.filtroSeleccionado === 'completados') {
      this.juegosFiltrados = this.juegos.filter(j => j.estado === 'Completado');
    } else if (this.filtroSeleccionado === 'jugando') {
      this.juegosFiltrados = this.juegos.filter(j => j.estado === 'Jugando');
    }
  }

  getIconoPlatforma(plataforma: string): string {
    const iconos: any = {
      'PlayStation': 'logo-playstation',
      'Xbox': 'logo-xbox',
      'PC': 'desktop',
      'Nintendo': 'logo-game-controller-b'
    };
    return iconos[plataforma] || 'game-controller';
  }

  getColorEstado(estado: string): string {
    const colores: any = {
      'Completado': 'success',
      'Jugando': 'warning',
      'Pendiente': 'medium'
    };
    return colores[estado] || 'medium';
  }

  getEstrellas(calificacion: number): number[] {
    return Array(calificacion).fill(0);
  }
}
