let boton = document.getElementById('boton')

let oculto = document.getElementById('info')

boton.addEventListener('click',toggleText);

function toggleText(){
    oculto.classList.toggle('mostrar');

    if(oculto.classList.contains('mostrar')){
        boton.innerHTML = 'Enviar';
    }   
    else {
        boton.innerHTML = 'Reconoce a tus colegas aquí';
    }
}