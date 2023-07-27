document.getElementById('html')
.addEventListener("click",()=> 
cambio("orange", "gray")
);

document.getElementById('css')
.addEventListener("click",()=> 
cambio("lightblue", "#00ff")
);

document.getElementById('js')
.addEventListener("click",()=> 
cambio("yellow", "black")
);

function cambio(colorFondo, colorTexto){
   /*  console.log("click en ", tarjetaClikeada) */
   if(document.documentElement.style.getPropertyValue('--color-fondo') === colorFondo){
    document.documentElement.style.setProperty('--color-fondo', "white");
   document.documentElement.style.setProperty('--font-color', "black");
   }else{
    document.documentElement.style.setProperty('--color-fondo', colorFondo);
   document.documentElement.style.setProperty('--font-color', colorTexto);
   }
   
}