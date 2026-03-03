import { Component, OnInit } from '@angular/core';
import { LugaresApi } from 'src/app/services/lugares-api';
import { GeoService } from 'src/app/services/geo.service';
import { Lugar } from 'src/app/models/lugares.models';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FotosLocal } from 'src/app/services/fotos-local';
import { CameraSource } from '@capacitor/camera';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lugares-form',
  templateUrl: './lugares-form.page.html',
  styleUrls: ['./lugares-form.page.scss'],
  standalone: false,
})
export class LugaresFormPage implements OnInit {

  id!: number;

  lugar: Lugar = {
    titulo: '',
    descripcion: '',
    fecha: new Date().toString().slice(0, 10),
    lat: 0,
    lng: 0,
    categoria: 'Turismo',
    fotos: []
  };

  constructor(
    private route: ActivatedRoute,
    private api: LugaresApi,
    private geo: GeoService,
    private toast: ToastController,
    private nav: NavController,
    private alert: AlertController
  ) {}

  ngOnInit() {
    
  }

  async usarMiUbicacion() {
    try {
      const {lat, lng} = await this.geo.getCurrentPosition();
      this.lugar.lat = lat;
      this.lugar.lng = lng;
      (await this.toast.create({
        message: 'Ubicación obtenida correctamente.',
        duration: 5000,
        position: 'top',
        color: 'success'
      }))
    } catch (error) {
      (await this.toast.create({
        message: 'Error al obtener la ubicación.',
        duration: 5000,
        position: 'top',
        color: 'danger'
      }))
    }
  }

  async guardar() {
    if(!this.lugar.titulo.trim()) {
      return (await this.toast.create({
        message: 'El título es obligatorio.',
        duration: 5000,
        position: 'top',
        color: 'danger'
      })).present();
    }
    //Crear constante para guardar.

}
}