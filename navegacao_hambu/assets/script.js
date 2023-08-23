const menu = document.querySelector('#menu')

function cliquemenu(){
    addEventListener("click", ()=>{
        if(menu.style.display === 'block'){
            menu.style.display = 'none'
        }
        else{
            menu.style.display = 'block'
        }
    })
}