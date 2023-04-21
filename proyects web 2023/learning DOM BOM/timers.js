'use strict'

window.addEventListener('load', ()=>{
   // timers : se ejecuta en ciclo
   function intervalo(){
    var tiempo = setInterval(function(){
        console.log("Set Interval Ejecutado")
        var color = document.querySelector("h1")
        if(color.style.background === "red"){
            color.style.background = "black"
        }else{
            color.style.background = "red";
        }

    }, 500);

    return tiempo;
   };

   var tiempo = intervalo();
    var stop = document.querySelector('#stop');
        stop.addEventListener("click", function(){
            alert("has terminado el bucle");
            clearInterval(tiempo);
        });

    var inicio = document.querySelector('#inicio');
        inicio.addEventListener("click", function(){
            alert("has iniciado el intervalo");
            intervalo();
        });
});

//settimeout: solo se ejecuta una vez

// var tiempo = setTimeout(function(){
//             console.log("Set Interval Ejecutado")
//             var color = document.querySelector("h1")
//             if(color.style.background === "red"){
//                 color.style.background = "black"
//             }else{
//                 color.style.background = "red";
//             }
    
//         }, 5000);

        
//     });
