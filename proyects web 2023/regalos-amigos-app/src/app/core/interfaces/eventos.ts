import { persona } from "./persona";

export interface evento{
    id?: number,
    titulo: string,
    participantes: persona[],
    fecha: Date,
    finalizado?: boolean
}