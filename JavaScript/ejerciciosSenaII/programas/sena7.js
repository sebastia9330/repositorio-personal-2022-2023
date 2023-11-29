let h24 = parseInt(prompt("Ingresa la hora en modelo 24 horas: "));
let h12 = 0
let periodo = ""


if(h24 < 12){
    periodo = "a.m."
    document.write(`<h1>${h24} ${periodo}</h1>`)
}else{
    h12 = h24 - 12
    periodo = "p.m."
    document.write(`<h1>${h12} ${periodo}</h1>`)
}

