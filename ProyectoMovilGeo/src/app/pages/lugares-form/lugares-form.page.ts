import { Component, OnInit } from '@angular/core';
import { LugaresApi } from 'src/app/services/lugares-api';
import { GeoService } from 'src/app/services/geo.service';
import { Lugar } from 'src/app/models/lugares.models';
import { AlertController, NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-lugares-form',
  templateUrl: './lugares-form.page.html',
  styleUrls: ['./lugares-form.page.scss'],
  standalone: false,
})
export class LugaresFormPage implements OnInit {

  constructor(
    private lugaresApi: LugaresApi,
    private geoService: GeoService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

}
