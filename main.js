window.onload = function(){

const panels = document.querySelectorAll(".panel")

function open(){this.classList.toggle('open')}
function active(event){
    if(event.propertyName.includes("flex")){
        this.classList.toggle('open-active')
    }
}

panels.forEach((panel)=>{  
    panel.addEventListener('click', open)
    panel.addEventListener('transitionend',active )
})

}