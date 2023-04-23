'use strict'

window.addEventListener('load', function(){
    console.log("dom cargando")

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El Campo Nombre Esta Vacio")
        }

        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("El Campo Apellido Esta Vacio")
        }

        if(edad.trim() == null || edad.trim().length == 0){
            alert("El Campo Edad Esta Vacio")
        }

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;


        // var datos_usuario = [nombre, apellido, edad];

        // var indice 

        // for(indice in datos_usuario){
        //     var parrafo = document.createElement("p");
        //     parrafo.append(datos_usuario[indice]);
        //     box_dashed.append(parrafo);
        // }

            
    });
});