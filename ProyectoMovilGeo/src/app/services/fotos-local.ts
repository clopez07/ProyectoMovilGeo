import { Injectable } from '@angular/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FotoLocal } from '../models/lugares.models';

@Injectable({
  providedIn: 'root',
})
export class FotosLocal {
  
  async tomaroSeleccionarFoto(source: CameraSource): Promise<FotoLocal> {
    const photo = await Camera.getPhoto({
      quality: 85,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source
    });

    if (!photo.base64String) throw new Error('No Base64');

    const idLocal = `IMG_${Date.now()}`;
    const fileName = `${idLocal}.jpeg`;

    await Filesystem.writeFile({ //acceder al archivo como tal
      path: fileName,
      data: photo.base64String,
      directory: Directory.Data
    });

    const fileUrl = await Filesystem.getUri({
      path: fileName,
      directory: Directory.Data
    });

    const pathLocal = Capacitor.convertFileSrc(fileUrl.uri);

    return {idLocal, pathLocal, createdAt: new Date().toUTCString()};
  }

  async borrarFoto(idLocal: string): Promise<void> {
    const fileName = `${idLocal}.jpeg`;
    await Filesystem.deleteFile({
      path: fileName,
      directory: Directory.Data
    });
  }
}