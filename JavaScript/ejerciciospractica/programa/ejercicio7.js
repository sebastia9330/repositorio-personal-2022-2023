//secuancia fibonacci
let cantidad = parseInt(prompt("Ingresa la cantidad de numeros de la secuencia que quieres: "));

let numero1 = 0;
let numero2 = 1;

for(let i = 0; i < cantidad; i++){
    let secuencia = numero1
    
    
    
    document.write(secuencia + " ,")

    let siguiente = numero1 + numero2;
    console.log(numero2)
    numero1 = numero2
    numero2 = siguiente
}
