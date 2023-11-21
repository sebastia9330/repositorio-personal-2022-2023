export class Contador{
    numero = 0;
    equipo;
    cuentaElement;
    containerElement;

    constructor(equipo, containerElement, cuentaInicial = 0){
        this.equipo = equipo
        this.numero = cuentaInicial;
        this.containerElement = containerElement;
        this.cuentaElement = containerElement.querySelector(".cuenta");
        containerElement.querySelector("h2").innerText = equipo;
        containerElement.querySelector(".agregar").addEventListener("click", ()=>this.agregar());
        containerElement.querySelector(".restar").addEventListener("click", ()=>this.restar());
    }

    agregar(cantidad = 1){
        this.numero += cantidad;
        this.actualizarCuenta()
    }


    restar(cantidad = 1){
        this.numero = Math.max(0, this.numero - cantidad);
        this.actualizarCuenta()
    }

    reset(){
        this.numero = 0;
        this.actualizarCuenta()
    }

    actualizarCuenta(){
        console.log(this.numero);

        const fosforosActuales = this.containerElement.querySelectorAll("img");
        if(fosforosActuales){
            fosforosActuales.forEach(fosforo => this.cuentaElement.removeChild(fosforo))
        }

        for (let i = 0; i < this.numero; i++) {
            const nuevoFosforo = document.createElement("img");
            nuevoFosforo.src = "IMG/fosforo.png";
            this.cuentaElement.appendChild(nuevoFosforo);
        }
    }
}