export interface persona{
    nombre: string,
    regala?: string,
    muestra?: boolean
}

export const personaVacia:persona = {
    nombre: "",
    muestra: false,
}