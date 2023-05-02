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
    const formulario = document.querySelector('#formulario');
    

    // //Eventos
    inputEmail.addEventListener("blur",validar);
    inputAsunto.addEventListener("blur",validar);
    inputNombre.addEventListener("blur",validar);
    inputMensaje.addEventListener('blur',validar);


    //Funciones
    function validar(e){
        if(e.target.value.trim()===''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement);//`El campo ${e.target.id} es obligatorio`);
       return;
        }
        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(mensaje,referencia){
        //Comprobar alerta 
        const error = referencia.querySelector('.bg-danger')
        if(error){
            error.remove();
        }

        //Generar cartel error
       const alerta = document.createElement('P');
       alerta.textContent = mensaje;
       alerta.classList.add('bg-danger','text-white','p-3','text-center');

        referencia.appendChild(alerta);


    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-danger');
        if(alerta){
            alerta.remove();
        }
    }
});