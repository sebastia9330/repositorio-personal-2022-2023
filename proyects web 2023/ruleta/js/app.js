const ruleta = document.getElementById("ruleta");
let ganador = ""
const root = document.documentElement;
sorteando = false;

document.getElementById("girar").addEventListener("click",()=> sortear())


const uno = {
    nombre: "Uno",
    probabilidad: 20
}

const dos = {
    nombre: "Dos",
    probabilidad: 20
}

const tres = {
    nombre: "Tres",
    probabilidad: 20
}

const cuatro = {
    nombre: "Cuatro",
    probabilidad: 20
}

const cinco = {
    nombre: "Cinco",
    probabilidad: 20
}


let conceptos = [uno, dos, tres, cuatro, cinco];

const colores = [
    "#126253","#134526","#C7B446","#5D9B9B","#8673A1","#100000","#4C9141","#8E402A","#231A24","#424632","#1F3438","#025669","#008F39","#763C28"
]

function ajustarRuleta(){
    const opcionesContainer = document.createElement("div");
    opcionesContainer.id = "opcionesContainer"
    ruleta.appendChild(opcionesContainer);
	let pAcumulada = 0;
    conceptos.forEach((concepto, i) =>{
        //Crear los triangulos de coores
        const opcionElement = document.createElement("div");
        opcionElement.classList.add("opcion");
        opcionesContainer.appendChild(opcionElement);
        opcionElement.style = `background-color: ${colores[i]};
		transform: rotate(${probabilidadAGrados(pAcumulada)}deg);
        ${getPosicionParaProbabilidad(concepto.probabilidad)}`
    
		pAcumulada += concepto.probabilidad
		const separador = document.createElement("div");
    	separador.classList.add("separador")
		separador.style = `transform: rotate(${probabilidadAGrados(pAcumulada)}deg)`
    	ruleta.appendChild(separador);
	})
}   

function getPosicionParaProbabilidad(probabilidad){
	const radianes = probabilidadARadianes(probabilidad)
    if(probabilidad === 100){
		return ''
	}
	if(probabilidad >= 87.5){
		const x5 = Math.tan(radianes)*50+50;
		return `clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, ${x5}% 0, 50% 50%)`
	}
	if(probabilidad >= 75){
		const y5 = 100 - (Math.tan(radianes-75)*50+50);
		return `clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0% ${y5}%, 50% 50%)`
	}
	if(probabilidad >= 62.5){
		const y5 = 100 - (0.5 - (0.5/ Math.tan(radianes)))*100;
		return `clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0% ${y5}%, 50% 50%)`
	}
	if(probabilidad >= 50){
		const x4 = 100 - (Math.tan(radianes)*50+50);
		return `clip-path: polygon(50% 0, 100% 0, 100% 100%, ${x4}% 100%, 50% 50%)`
	}
	if(probabilidad >= 37.5){
		const x4 = 100 - (Math.tan(radianes)*50+50);
		return `clip-path: polygon(50% 0, 100% 0, 100% 100%, ${x4}% 100%, 50% 50%)`
	}
	if(probabilidad >= 25){
		const y3 = Math.tan(radianes-25)*50+50;
		return `clip-path: polygon(50% 0, 100% 0, 100% ${y3}%, 50% 50%)`
	}
	if(probabilidad >= 12.5){
		const y3 = (0.5 - (0.5/ Math.tan(radianes)))*100;
		return `clip-path: polygon(50% 0, 100% 0, 100% ${y3}%, 50% 50%)`
	}
	if(probabilidad >= 0){
		const x2 = Math.tan(radianes)*50 + 50;
		return `clip-path: polygon(50% 0, ${x2}% 0, 50% 50%)`
	}
}

function sortear(){
	if(sorteando) return;
	sorteando = true;
	nSorteo = Math.random();
	let pAcumulada = 0
	ruleta.classList.toggle("giro",true)
	conceptos.forEach(concepto =>{
		if(nSorteo*100 >= pAcumulada && nSorteo*100 < pAcumulada+concepto.probabilidad){
			ganador = concepto.nombre;
			console.log("Ganador", nSorteo*100, concepto.nombre)
		}
		pAcumulada += concepto.probabilidad;
	})
	const giroRuleta = 5*360 + ((1-nSorteo)*360);
	root.style.setProperty("--giroRuleta",giroRuleta+"deg")
}

ruleta.addEventListener("animationend",()=>{
	ruleta.style.transform = "rotate(" + getCurrentRotation(ruleta) + "deg)";
	sorteando = false;
	ruleta.classList.toggle("giro",false);
})

ajustarRuleta();