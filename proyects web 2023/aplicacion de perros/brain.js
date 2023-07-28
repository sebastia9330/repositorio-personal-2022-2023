const perroActualElement = document.getElementById("perroActual");
const API = "https://dog.ceo/api/breeds/image/random"
const spinner = document.getElementById("spinner");
spinner.classList.add("escondido")
document.getElementById("like").addEventListener("click",()=> rankingPerros("+"));
document.getElementById("deslike").addEventListener("click",()=> rankingPerros("-"));
const likeperro = document.getElementById("likeperro");
const deslikeperro = document.getElementById("deslikeperro");
likeperro.classList.add("escondido");
deslikeperro.classList.add("escondido");


document.getElementById("saltar").addEventListener("click",nuevoPerro);

perroActualElement.addEventListener("load",()=>{
    perroActualElement.classList.toggle("escondido",false);
    spinner.classList.toggle("escondido",true);
})

async function nuevoPerro(){
    spinner.classList.toggle("escondido",false);
    perroActualElement.classList.toggle("escondido",true);
    const res = await fetch(API);
    const resJson = await res.json();
    perroActualElement.src = resJson.message;
}

function rankingPerros(ranking){
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = perroActualElement.src;
    if(ranking === "+"){
        likeperro.appendChild(nuevaImagen);
    }else{
        deslikeperro.appendChild(nuevaImagen);
    }
    likeperro.classList.toggle("escondido",false)
    deslikeperro.classList.toggle("escondido",false)

    nuevoPerro();
}

//Ejecucion
nuevoPerro();
