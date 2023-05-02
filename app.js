const imagenes = document. querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document. getElementById('imagen-modal');

imagenes.forEach ((imagen) => {
imagen.addEventListener('click', () => {
    const ruta = imagen.querySelector('video').src;
    imagenModal.src = ruta;
});        
});

document.addEventListener("DOMContentLoaded",function(){
    const email ={
        nombre:"",
        email:"",
        asunto:"",
        mensaje:"",
    };

    //Seleccionar elementos del HTML
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputNombre = document.querySelector('#nombre');
    const inputMensaje = document.querySelector('#mensaje');

    

    // //Eventos
    // inputEmail.addEventListener("input",validar);
     inputAsunto.addEventListener("input",validar);
    // inputNombre.addEventListener("input",validar);
    // inputMensaje.addEventListener("input",validar);


    //Funciones
    function validar(e){
        if (e.target.value.trim()===""){
            mostrarAlerta();//`El campo ${e.target.id} es obligatorio`);
            return;
        }
    }

    function mostrarAlerta(){
       const alerta = document.createElement('P');
       alerta.textContent = "Hubo un error..";

        formulario.appendChild(alerta);


    }
});