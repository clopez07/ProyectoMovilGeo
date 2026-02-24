import { FotosLocal } from "../services/fotos-local";
export interface FotoLocal{
    idLocal:string;//id unico de forma local
    pathLocal:string;//url para mostrar la foto
    createdAt: string;
}
export interface Lugar {
    id?: number;
    titulo: string;
    descripcion: string;
    fecha:string;
    lat:number;
    lng:number;
    categoria: string;
    fotos?: FotoLocal[];
}
