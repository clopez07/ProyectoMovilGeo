import { Component, OnInit } from '@angular/core';
import { LugaresApi } from 'src/app/services/lugares-api';
import { GeoService } from 'src/app/services/geo.service';
import { Lugar } from 'src/app/models/lugares.models';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FotosLocal } from 'src/app/services/fotos-local';
import { CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-lugares-form',
  templateUrl: './lugares-form.page.html',
  styleUrls: ['./lugares-form.page.scss'],
  standalone: false,
})
export class LugaresFormPage implements OnInit {

  lugar!: Lugar;

  constructor(
    private lugaresApi: LugaresApi,
    private geoService: GeoService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private toastController: ToastController,
    private fotosLocal: FotosLocal
  ) { }

  ngOnInit() {
    this.lugar = {
      titulo: '',
      descripcion: '',
      fecha: new Date().toISOString().split('T')[0],
      lat: 0,
      lng: 0,
      categoria: '',
      fotos: []
    };
    this.obtenerUbicacion();
  }

  async obtenerUbicacion() {
    try {
      const posicion = await this.geoService.getCurrentPosition();
      this.lugar.lat = posicion.lat;
      this.lugar.lng = posicion.lng;
    } catch (error) {
      this.mostrarToast('No se pudo obtener la ubicación');
    }
  }

  async tomarFoto() {
    try {
      const foto = await this.fotosLocal.tomaroSeleccionarFoto(CameraSource.Camera);
      if (foto) {
        this.lugar.fotos?.push(foto);
      }
    } catch (error) {
      this.mostrarToast('Error al tomar la foto');
    }
  }

  eliminarFoto(index: number) {
    this.lugar.fotos?.splice(index, 1);
  }

  formValido(): boolean {
    return this.lugar.titulo.trim() !== '' && 
           this.lugar.categoria !== '' &&
           this.lugar.lat !== 0 && 
           this.lugar.lng !== 0;
  }

  async guardar() {
    if (!this.formValido()) {
      this.mostrarToast('Completa todos los campos requeridos');
      return;
    }

    this.lugaresApi.create(this.lugar).subscribe({
      next: () => {
        this.mostrarToast('Lugar guardado correctamente');
        this.navCtrl.navigateBack('/lugares-lista');
      },
      error: () => {
        this.mostrarToast('Error al guardar el lugar');
      }
    });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
