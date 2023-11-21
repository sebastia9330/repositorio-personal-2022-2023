import {Contador} from "./contador.js";


const modal = document.querySelector("dialog");

const p1 = new Contador("JUGADOR 1", document.getElementById("uno"));
const p2 = new Contador("JUGADOR 2", document.getElementById("dos"));

document.getElementById("reset").addEventListener("click",()=> modal.showModal());
document.getElementById("cancelar").addEventListener("click",()=> modal.close());
document.getElementById("aceptar").addEventListener("click",()=> {
    p1.reset();
    p2.reset();
    modal.close();
});


