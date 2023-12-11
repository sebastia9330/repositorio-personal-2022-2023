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

setInterval(() =>{
    const hora = new Date();
    const horas = getDosNumeros(hora.getHours().toString());
    const minutos = getDosNumeros(hora.getMinutes().toString());
    const segundos = getDosNumeros(hora.getSeconds().toString());

    setNumero(0, horas[0]);
    setNumero(1, horas[1]);
    setNumero(2, minutos[0]);
    setNumero(3, minutos[1]);
    setNumero(4, segundos[0]);
    setNumero(5, segundos[1]);
},1000)

function getDosNumeros(numero){
    if(numero.length ===2){
        return numero;
    }
    return "0" + numero
}


setInterval(() =>{
    const hora = new Date();
    const horas = getDosNumeros(hora.getHours().toString());
    const minutos = getDosNumeros(hora.getMinutes().toString());
    const segundos = getDosNumeros(hora.getSeconds().toString());

    setNumero(0, horas[0]);
    setNumero(1, horas[1]);
    setNumero(2, minutos[0]);
    setNumero(3, minutos[1]);
    setNumero(4, segundos[0]);
    setNumero(5, segundos[1]);
},1000)

