const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const estados = document.querySelector('#estados');

formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
    resultado.innerHTML = estados.value
})
