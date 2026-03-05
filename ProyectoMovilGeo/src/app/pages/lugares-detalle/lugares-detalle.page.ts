import { Component, OnInit } from '@angular/core';
import { LugaresApi } from 'src/app/services/lugares-api';
import { GeoService } from 'src/app/services/geo.service';
import { Lugar } from 'src/app/models/lugares.models';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lugares-detalle',
  templateUrl: './lugares-detalle.page.html',
  styleUrls: ['./lugares-detalle.page.scss'],
  standalone: false,
})
export class LugaresDetallePage implements OnInit {

  id!: number;
  lugar?: Lugar;

  constructor(
    private route: ActivatedRoute,
    private api: LugaresApi,
    private geo: GeoService,
    private toast: ToastController,
    private nav: NavController,
    private alert: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.cargar();
  }

  cargar(){
    this.api.getXid(this.id).subscribe(l => this.lugar = l);
  }

}

