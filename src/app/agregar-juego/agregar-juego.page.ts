import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.page.html',
  styleUrls: ['./agregar-juego.page.scss'],
  standalone: false,
})
export class AgregarJuegoPage {
  nuevoJuego = {
    nombre: '',
    plataforma: '',
    genero: '',
    estado: '',
    calificacion: 3,
    notas: ''
  };

  juegoGuardado = false;

  constructor(private navCtrl: NavController) {}

  goToList() {
    this.navCtrl.navigateForward('/lista-juegos');
  }

  guardarJuego() {
    this.juegoGuardado = true;
  }
}
