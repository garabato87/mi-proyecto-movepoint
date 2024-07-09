

/*Cuando hago CLICK .button, .nav añadio y quito la clase (TOGGLE) "activo"*/
const button = document.querySelector(".button")
const nav    = document.querySelector(".nav")

button.addEventListener("click",()=>{
    nav.classList.toggle("activo")
})
