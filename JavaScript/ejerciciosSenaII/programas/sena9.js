let prome = 0;
let nmax = 0;
let nmin = 10;
let notas = []

for(let i = 0; i < 5; i++){
    let nota = parseFloat(prompt("Ingresa la nota numero: " + (i + 1)))
    notas.push(nota)
    prome += notas[i] / 5
    if(notas[i] > nmax){
        nmax = notas[i]
    }
    if(notas[i] < nmin){
        nmin = notas[i]
    }
}

document.write(`<h2>Las notas del estudiante son: ${notas}</h2>`)
document.write(`<h2>El promedio de las notas es: ${prome}</h2>`)
document.write(`<h2>Las nota mayor es: ${nmax}</h2>`)
document.write(`<h2>Las notas menor es: ${nmin}</h2>`)