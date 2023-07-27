const perroActualElement = document.getElementById("perroActual");
const API = "https://dog.ceo/api/breeds/image/random"
const spinner = document.getElementById("spinner");
spinner.classList.add("escondido")

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

//Ejecucion
nuevoPerro();
