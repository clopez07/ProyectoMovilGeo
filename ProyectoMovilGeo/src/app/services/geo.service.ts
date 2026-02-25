import { Injectable } from '@angular/core';
import {Geolocation} from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  
  async getCurrentPosition(): Promise<{lat: number; lng: number}>{
    const pos = await Geolocation.getCurrentPosition({enableHighAccuracy: true});
    return {lat: pos.coords.latitude, lng: pos.coords.longitude};
  }
}
