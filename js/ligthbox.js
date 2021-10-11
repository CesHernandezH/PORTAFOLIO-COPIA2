const imagenes = document.querySelectorAll(`.img-Portafolio`)
const imagenesLuz = document.querySelector(`.agregar-imagen`)
const contenedorLuz = document.querySelector(`.imagen-ligth`)
const hamburguesa1 = document.querySelector(`.hamburguesa`)

imagenes.forEach(imagen => {
    imagen.addEventListener(`click`, ()=>{
        aparecerImagen(imagen.getAttribute(`src`))
    })
})

contenedorLuz.addEventListener(`click`,(e)=>{
    if (e.target !== imagenesLuz) {
        contenedorLuz.classList.toggle(`show`)
        imagenesLuz.classList.toggle(`showImage`)
        hamburguesa1.style.opacity =`1`
        
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLuz.src= imagen
    contenedorLuz.classList.toggle(`show`)
    imagenesLuz.classList.toggle(`showImage`)
    hamburguesa1.style.opacity =`0`
}