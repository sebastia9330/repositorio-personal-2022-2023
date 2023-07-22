document.getElementById('html')
.addEventListener("click",()=> 
cambio("uno")
);

document.getElementById('css')
.addEventListener("click",()=> 
cambio("dos")
);

document.getElementById('js')
.addEventListener("click",()=> 
cambio("tres")
);

function cambio(tarjetaClikeada){
    console.log("click en ", tarjetaClikeada)
}