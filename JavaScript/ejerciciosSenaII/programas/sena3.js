let result = 0;


document.write("Los multiplos de 3 hasta 99 son: ")
for(let i = 0; i < 99; i+= 3){
    result = result + 3;
    document.write(i + 3 + ", ");
    result = result + i;
}

document.write("</br>" + "La suma de los multiplos es: " + result);


