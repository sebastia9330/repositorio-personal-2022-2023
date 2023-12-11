const numeros = document.querySelectorAll(".numero");

const segmentos = Array.from(numeros).map(numero => numero.querySelectorAll("svg"));

const mapaNumeros = [
    [1,1,1,1,1,1,0],
    [0,1,1,0,0,0,0],
    [1,1,0,1,1,0,1],
    [1,1,1,1,0,0,1],
    [0,1,1,0,0,1,1],
    [1,0,1,1,0,1,1],
    [1,0,1,1,1,1,1],
    [1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,0,1,1],
];

function setNumero(i,valor){
    segmentos[i].forEach((segmentos, j) =>{
        segmentos.children[0].classList.toggle("on", mapaNumeros[valor][j])
    })
}

setNumero(0,1)
setNumero(1,2)
setNumero(2,3)
setNumero(3,4)
setNumero(4,5)
setNumero(5,6)
