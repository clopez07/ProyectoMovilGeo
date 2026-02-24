import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { Lugar,FotoLocal } from '../models/lugares.models';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class LugaresApi {

  private baseUrl = `${environment.apiUrl}/Lugares`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Lugar[]> {
    console.log('LugaresApi.getAll -> URL:', this.baseUrl);
    return this.http.get<Lugar[]>(this.baseUrl).pipe(
      tap((res) => console.log('LugaresApi.getAll response length:', Array.isArray(res) ? res.length : typeof res)),
      catchError((err) => {
        console.error('LugaresApi.getAll error:', err);
        return throwError(() => err);
      })
    );
  }

  getXid(id: number): Observable<Lugar> {
    return this.http.get<Lugar>(`${this.baseUrl}/${id}`);
  }
  create(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.baseUrl, lugar);
  }  

  update(id: number, data: Partial<Lugar>): Observable<Lugar> {
    return this.http.patch<Lugar>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
// Agregar Foto en un arreglo donde se guardara como metadato
  addFoto(id:number, fotos: FotoLocal, fotosActuales: FotoLocal[] = []): Observable<Lugar> {
    const nuevasFotos = [...fotosActuales, fotos]; 
    return this.update(id, {fotos: nuevasFotos}); 
  }

  removeFoto(id: number, idLocal: string, fotosActuales: FotoLocal[]): Observable<Lugar> {
    const nuevasfotos = fotosActuales.filter(f => f.idLocal !== idLocal);
    return this.update(id, {fotos: nuevasfotos});
  }
}
