let empezar = document.getElementById("empezar");
let barraProgreso = document.querySelector("#barraProgreso div");

//variables
const tiempoJuego = 60;


empezar.addEventListener("click",() =>{
    console.log("iniciado el test")
    barraProgreso.classList.toggle("completarTiempo", true)
    empezar.classList.toggle("escondido",true)
})

barraProgreso.addEventListener("animationend", ()=>{
    console.log("Termino el tiempo")
})


//ejecucion
document.documentElement.style.setProperty("--tiempo", tiempoJuego + "s")