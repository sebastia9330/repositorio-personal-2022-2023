export class Contador{
    numero = 0;
    equipo;

    constructor(equipo, containerElement, cuentaInicial = 0){
        this.equipo = equipo
        this.numero = cuentaInicial;
        containerElement.querySelector("h2").innerText = equipo;
        containerElement.querySelector(".agregar").addEventListener("click", ()=>this.agregar());
        containerElement.querySelector(".restar").addEventListener("click", ()=>this.restar());
    }

    agregar(cantidad = 1){
        this.numero += cantidad;
        console.log(this.numero);
    }


    restar(cantidad = 1){
        this.numero = Math.max(0, this.numero - cantidad);
        console.log(this.numero);
    }

    reset(){
        this.numero = 0;
    }
}