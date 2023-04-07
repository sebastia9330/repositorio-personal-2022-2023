'use strict'

//parametros de REST Y SPREAD

//REST

function listadoDeFrutas (fruta1,fruta2, ...restoDeFrutas){
    console.log(fruta1);
    console.log(fruta2);
    console.log(restoDeFrutas);
};

listadoDeFrutas("naranja","manzana","pera","piña","uva","coco","mora");

//SPREAD
var frutas = ["naranja","manzana"];
listadoDeFrutas(...frutas, "pera","piña","uva","coco","mora");