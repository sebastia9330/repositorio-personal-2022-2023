let result = 0;


document.write("las potencias de dos que son menores o iguales a 100 son: </br>")
for(let i = 1; i <= 100; i++){
    result = 2 ** i;
    if(result <= 100){
        document.write(result + " ")
    }
}