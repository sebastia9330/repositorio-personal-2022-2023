//Elementos html
const botonEmpezar = document.getElementById("empezar");
const barraProgreso = document.querySelector("#barraProgreso div");
const correctasElement = document.querySelector("#correctas span");
const erroresElement = document.querySelector("#errores span");
const ppmElement = document.querySelector("#ppm span");
const final = document.querySelector("#final");
const botonReiniciar = document.querySelector("#final button");
const palabraContainer = document.getElementById("palabraActual");
const input = document.querySelector("input")
let jugando = false;

//variables
const tiempoJuego = 60;
let letrasCorrectas;
let letrasIncorrectas;
let palabrasTerminadas;
let listaLetras = [];
let indiceActual;

//funciones
function empezar(){
    jugando = true;
    palabraContainer.classList.toggle("escondido",false)
    nuevaPalabra()
    letrasCorrectas = 0;
    letrasIncorrectas = 0;
    palabrasTerminadas = 0;
    //console.log("iniciado el test")
    final.classList.toggle("escondido", true)
    barraProgreso.classList.toggle("completarTiempo", true)
    botonEmpezar.classList.toggle("escondido",true)
    listaLetras[0].classList.toggle("letraActual")
}

function nuevaPalabra(){
    if(listaLetras.length > 0) listaLetras.forEach(letra => palabraContainer.removeChild(letra));
    const nPalabraElegida = Math.floor(Math.random()*(palabrasArray.length-1));
    const palabraElegida = palabrasArray[nPalabraElegida];
    listaLetras = []
    indiceActual = 0;
    for(let i = 0; i < palabraElegida.length; i++){
        const letraElement = document.createElement("span");
        letraElement.textContent = palabraElegida[i];
        palabraContainer.appendChild(letraElement);
        listaLetras.push(letraElement);
    }
}

function crearLetraEfecto(element){
    element.classList.toggle("invisible",true)
    const letra = element.textContent;
    const posicionLetra = element.getBoundingClientRect();
    //console.log(letra,posicionLetra)
    const nuevaLetra = document.createElement("span");
    nuevaLetra.style = `
        left: ${posicionLetra.left}px;
        top: ${posicionLetra.top}px;
    `
    nuevaLetra.classList.add("desaparecer");
    nuevaLetra.textContent = letra;
    document.body.appendChild(nuevaLetra);
}

//Eventos
botonEmpezar.addEventListener("click",() => empezar())
botonReiniciar.addEventListener("click", ()=> empezar())

barraProgreso.addEventListener("animationend", ()=>{
    jugando = false;
    final.classList.toggle("escondido",false)
    //console.log("Termino el tiempo")
    barraProgreso.classList.toggle("completarTiempo",false);
    correctasElement.textContent = letrasCorrectas;
    erroresElement.textContent = letrasIncorrectas;
    ppmElement.textContent = palabrasTerminadas*(60/tiempoJuego);
    palabraContainer.classList.toggle("escondido",true)
})


//ejecucion
input.focus();
document.documentElement.style.setProperty("--tiempo", tiempoJuego + "s")
/* nuevaPalabra() */

input.addEventListener("input",(event) => {
    if(!jugando){
        if(event.data === " ") empezar();
        return
    }
    if(event.data === listaLetras[indiceActual].textContent){
        crearLetraEfecto(listaLetras[indiceActual])
        indiceActual++;
        //Marcar letra finalizada
        letrasCorrectas++;
        if(indiceActual === listaLetras.length){
            nuevaPalabra();
            palabrasTerminadas++;
        }
        listaLetras[indiceActual].classList.toggle("letraActual")
    }else{
        //Marcar que hubo un error
        letrasIncorrectas++;
    }
});
input.addEventListener("blur",() => input.focus());