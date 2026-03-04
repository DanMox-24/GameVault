import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
  standalone: false,
})
export class BibliotecaPage {
  totalJuegos = 8;
  completados = 3;
  jugando = 2;
  pendientes = 3;

  ultimosJuegos = [
    { nombre: 'The Last of Us Part II', genero: 'Acción', plataforma: 'PlayStation', estado: 'Completado' },
    { nombre: 'Elden Ring', genero: 'RPG', plataforma: 'PC', estado: 'Jugando' },
    { nombre: 'God of War Ragnarök', genero: 'Acción', plataforma: 'PlayStation', estado: 'Pendiente' }
  ];

  constructor(private navCtrl: NavController) {}

  verListaCompleta() {
    this.navCtrl.navigateForward('/lista-juegos');
  }

  agregarJuego() {
    this.navCtrl.navigateForward('/agregar-juego');
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
}