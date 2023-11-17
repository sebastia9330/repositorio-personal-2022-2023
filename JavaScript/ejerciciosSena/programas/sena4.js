let h1 = prompt("Ingresa el nombre del hermano numero uno: ");
let e1 = parseInt(prompt("Ingresa la edad del hermano numero uno: "));
let h2 = prompt("Ingresa el nombre del hermano numero dos: ");
let e2 = parseInt(prompt("Ingresa la edad del hermano numero dos: "));
let dife = 0;

if(e1 > e2){
    document.write(h1 + " tiene " + e1 + " años" + " y es mayor que " + h2 + "<br/>")
    dife = e1 - e2
    document.write("la diferencia de edad es de: " + dife + "años")
}else{
    document.write(h2 + " tiene " + e2 + " años" + " y es mayor que " + h1 + "<br/>")
    dife = e2 - e1
    document.write("la diferencia de edad es de: " + dife + "años")
}

