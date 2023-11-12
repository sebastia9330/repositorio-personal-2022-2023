import {Contador} from "./contador.js";

const p1 = new Contador("JUGADOR 1", document.getElementById("uno"));
const p2 = new Contador("JUGADOR 2", document.getElementById("dos"));

p1.agregar(3);
p1.reset();
p1.agregar(7);



