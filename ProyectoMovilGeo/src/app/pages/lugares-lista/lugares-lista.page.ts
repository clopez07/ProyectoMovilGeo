import { Component, OnInit } from '@angular/core';
import { ToastController,NavController } from '@ionic/angular';
import { LugaresApi } from 'src/app/services/lugares-api';
import { Lugar } from 'src/app/models/lugares.models';

@Component({
  selector: 'app-lugares-lista',
  templateUrl: './lugares-lista.page.html',
  styleUrls: ['./lugares-lista.page.scss'],
  standalone:false,
})
export class LugaresListaPage implements OnInit {

  lugares: Lugar[] = [];

  
  constructor(
    private api: LugaresApi, 
    private toast: ToastController, 
    private nav: NavController) { }

  ngOnInit() {
    this.cargar();
  }
  cargar(event?: any) {
    this.api.getAll().subscribe({
      next: (data) => {
        this.lugares = data || [];
      event?.target?.complete();
      },
      error: async (error) => {
        console.error('Error al conectar a la API:', error);
        event?.target?.complete();
        const t = await this.toast.create({
          message: `No puedo conectar a la api (${error?.status || 'sin estado'})`,
          duration: 5000,
          position: 'top',
        });
        t.present();
  }

    });
  }  
  ver(id: number) {
    this.nav.navigateForward(`/lugares-detalle/${id}`);
  }
}
