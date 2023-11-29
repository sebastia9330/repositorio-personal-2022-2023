let array = [];
let arrayrev = [];

for(let i = 1; i <= 5; i++){
    let dato = prompt("ingrese el dato numero: " + i);
    array.push(dato)
}
document.write(`<h1>El vector ${array} esta en la forma correcta</h1>`)

for(let j = 4; j >= 0; j--){
    arrayrev.push(array[j])
}

document.write(`<h1>El vector ${arrayrev} esta en la forma reversa</h1>`)