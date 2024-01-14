const botonEmpezar = document.getElementById("empezar");
const barraProgreso = document.querySelector("#barraProgreso div");
const correctasElement = document.querySelector("#correctas span");
const erroresElement = document.querySelector("#errores span");
const ppmElement = document.querySelector("#ppm span");
const final = document.querySelector("#final");
const botonReiniciar = document.querySelector("#final button");
const palabraContainer = document.getElementById("palabraActual");

//variables
const tiempoJuego = 5;

//funciones
function empezar(){
    console.log("iniciado el test")
    final.classList.toggle("escondido", true)
    barraProgreso.classList.toggle("completarTiempo", true)
    botonEmpezar.classList.toggle("escondido",true)
}

function nuevaPalabra(){
    const nPalabraElegida = Math.floor(Math.random()*(palabrasArray.length-1));
    const palabraElegida = palabrasArray[nPalabraElegida]
    for(let i = 0; i < palabraElegida.length; i++){
        const letraElement = document.createElement("span");
        letraElement.textContent = palabraElegida[i];
        palabraContainer.appendChild(letraElement)
    }
}


botonEmpezar.addEventListener("click",() => empezar())
botonReiniciar.addEventListener("click", ()=> empezar())

barraProgreso.addEventListener("animationend", ()=>{
    final.classList.toggle("escondido",false)
    console.log("Termino el tiempo")
    barraProgreso.classList.toggle("completarTiempo",false)
})


//ejecucion
document.documentElement.style.setProperty("--tiempo", tiempoJuego + "s")
nuevaPalabra()