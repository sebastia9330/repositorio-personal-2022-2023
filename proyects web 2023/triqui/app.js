const x = "X";
const o = "O";
let estadoJuego = "P1";
const modal = document.querySelector("dialog");
const textoModal = modal.querySelector("h2");


const cuadrados = Array.from(document.querySelectorAll(".cuadrado"));

cuadrados.forEach((cuadrado,i) =>{
    cuadrado.addEventListener("click", ()=>{
        if(estadoJuego === "PAUSA") return;
        if(cuadrado.textContent !== "") return;
        cuadrado.innerText = estadoJuego === "P1" ? x : o;
        const posicionGanadora = revisarSiHayGanador();
        if(typeof posicionGanadora === "object"){
            ganar(posicionGanadora);
            return
        }
        if(posicionGanadora === "empate"){
            selectmodal("Empate");
        }
        estadoJuego = estadoJuego === "P1" ? "P2" : "P1";
    })
})


function revisarSiHayGanador(){
    const tablero = cuadrados.map(cuadrado => cuadrado.textContent);
    console.log(tablero)

    //Revisar horizontales
    for(let i = 0; i <= 9; i+= 3){
        if(tablero[i] &&
            tablero[i] === tablero[i + 1] &&
            tablero[i] === tablero[i + 2]){
                return [i,i+1,i+2];
            }
    }
    //revisar verticales
    for(let i = 0; i <= 3; i++){
        if(tablero[i] &&
            tablero[i] === tablero[i + 3] &&
            tablero[i] === tablero[i + 6]){
                return [i,i+3,i+6];
            }
    }

    //revisar cruzadas
    if(tablero[0] &&
        tablero[0] === tablero[4] &&
        tablero[0] === tablero[8]){
            return [0,4,8];
    }
    if(tablero[2] &&
        tablero[2] === tablero[4] &&
        tablero[2] === tablero[6]){
            return [2,4,6];
    }

    if(tablero.includes("")) return false;
    return "empate"
}

function ganar(posicionGanadora){
    console.log("Ganador", posicionGanadora);
    posicionGanadora.forEach(posicion =>{
        cuadrados[posicion].classList.toggle("ganador",true);
    })
    selectmodal("El ganador es: "+ estadoJuego);
    estadoJuego = "PAUSA"
}

function selectmodal(texto){
    textoModal.innerText = texto
    modal.showModal();
}

modal.querySelector("button").addEventListener("click", ()=>{
    cuadrados.forEach(cuadrado => {
        cuadrado.textContent = ""
        cuadrado.classList.toggle("ganador", false)
        modal.close();
        estadoJuego = "P1"
    });
});