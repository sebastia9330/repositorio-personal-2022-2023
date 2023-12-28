//Recibe un numero base y devuelve radianes
function probabilidadARadianes(probabilidad){
    return probabilidad/100 * 2 * Math.PI;
}

//Recibe un numero base 1 y devuelve un numero base 360
function probabilidadAGrados(probabilidad){
    return probabilidad * 360 / 100;
}