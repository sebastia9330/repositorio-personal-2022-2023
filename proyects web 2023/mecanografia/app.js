const botonEmpezar = document.getElementById("empezar");
const barraProgreso = document.querySelector("#barraProgreso div");
const correctasElement = document.querySelector("#correctas span");
const erroresElement = document.querySelector("#errores span");
const ppmElement = document.querySelector("#ppm span");
const final = document.querySelector("#final");
const botonReiniciar = document.querySelector("#final button")

//variables
const tiempoJuego = 5;

//funciones
function empezar(){
    console.log("iniciado el test")
    final.classList.toggle("escondido", true)
    barraProgreso.classList.toggle("completarTiempo", true)
    botonEmpezar.classList.toggle("escondido",true)
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