'use strict'

//Eventos del raton


window.addEventListener('load', () =>{
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
    
    //focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    });
    
    //blur
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    });
    
    //keydown
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keydown', function(event){
        console.log("Estas pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });
    
    //keypress
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keypress', function(event){
        console.log("La tecla presionada es: ", String.fromCharCode(event.keyCode));
    });
    
    //keyup
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keyup', function(event){
        console.log("la tecla que soltaste es: ", String.fromCharCode(event.keyCode));
    });

});

