import {Contador} from "./contador.js";


const modal = document.querySelector("dialog");
const partidaEnMemoria = JSON.parse(localStorage.getItem("truco"));
const p1Nombre = "JUGADOR 1";
const p2Nombre = "JUGADOR 2";
console.log(partidaEnMemoria)


const p1 = new Contador(p1Nombre, document.getElementById("uno"),partidaEnMemoria[p1Nombre]);
const p2 = new Contador(p2Nombre, document.getElementById("dos"),partidaEnMemoria[p2Nombre]);

document.getElementById("reset").addEventListener("click",()=> modal.showModal());
document.getElementById("cancelar").addEventListener("click",()=> modal.close());
document.getElementById("aceptar").addEventListener("click",()=> {
    p1.reset();
    p2.reset();
    modal.close();
});

document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", () =>{
        const partidaGuardada = {
            [p1.equipo] : p1.numero,
            [p2.equipo] : p2.numero,
        }
    localStorage.setItem("truco", JSON.stringify(partidaGuardada));
    console.log("guardado")
    })
})


