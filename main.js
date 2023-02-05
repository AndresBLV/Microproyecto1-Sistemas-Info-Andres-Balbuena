'use strict'

const grande = document.querySelector('.grande')
const point = document.querySelectorAll('.point')

//Cuando CLICK en punto
    // Saber la posicion de ese punto  
    // Aplicar un transform translateX al grande
    // Quitar clase activo a todos los puntos
    // Seleccionar punto y otrogarle clase activo

point.forEach( (eachPoint,i)=> {
    point[i].addEventListener('click',()=>{
        let position = i
        let operate = position * -33.3

        grande.style.transform = 'translateX(${ operate }%)'

        point.forEach((eachPoint,i)=>{
            point[i].classList.remove('activate')
        })

        point[i].classList.add('activate')

    })
})
