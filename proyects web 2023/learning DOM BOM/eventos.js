'use strict'

//Eventos del raton




function cambiarColor(){
    console.log("me has dado click")
    var bg = boton.style.background; 
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green"
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc"
    return true;
    
}




var boton = document.querySelector("#boton");

//  doble Click
/* boton.addEventListener('dblclick', function(){
    cambiarColor();
}); */

// Click
boton.addEventListener('click', function(){
    cambiarColor();
});

//Mouse
boton.addEventListener('mouseover', function(){
    boton.style.background = "blue"
})

//Mouseout
boton.addEventListener('mouseout', function(){
    boton.style.background = "black"
})