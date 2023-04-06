

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto')

punto.forEach( (cadaPunto, i)=> {
    punto[i].addEventListener('click',()=>{
        let posicion = i
        let operacion = posicion * -25
        grande.style.transform = `translatex(${operacion}%)`

        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove('active')
        })
        punto[i].classList.add('active')
    })
})