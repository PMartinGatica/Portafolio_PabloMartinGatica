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
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const spinner = document.querySelector('#spinner');

    //Configuracion para que los msj lleguen a mi casilla de mail 
    const formularioEnviar = document.getElementById('formulario');

formularioEnviar.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenemos los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;

  // Creamos el cuerpo del correo electrónico
  const cuerpo = `Nombre: ${nombre}\nEmail: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;

  // Creamos el objeto de correo electrónico
  const emailData = {
    to: 'pablomartin.gatica@gmail.com', // Reemplaza con tu dirección de correo electrónico
    subject: asunto,
    body: cuerpo,
  };

  // Enviamos el correo electrónico a través de Gmail
  GmailApp.sendEmail(emailData.to, emailData.subject, emailData.body);
});

    //Fin de configuracion

    // //Eventos
    inputEmail.addEventListener("blur",validar);
    inputAsunto.addEventListener("blur",validar);
    inputNombre.addEventListener("blur",validar);
    inputMensaje.addEventListener('blur',validar);

    formulario.addEventListener('submit',enviarEmail);

    //Funciones
    
    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('d-none');
        setTimeout(() => {
            spinner.classList.add('d-none');
            spinner.classList.remove('flex');

            
            const alertaExito= document.createElement('P');
            alertaExito.classList.add('bg-success', 'text-white','p-2','mx-auto','fw-bold','uppercase','text-center');
            alertaExito.textContent = 'Mensaje Enviado Correctamente';
            btnSubmit.remove();
            formulario.appendChild(alertaExito);


            setTimeout(() => {
                alertaExito.remove();
                btnSubmit.add();
            }, 2000);

            resetFormulario();

        }, 3000);
    }

    

    function validar(e){
        if(e.target.value.trim()===''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement);
            email[e.target.name] =''
            comprobarEmail();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El campo no es un email válido',e.target.parentElement);
            email[e.target.name] =''
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        //Asignar Valores

        email[e.target.id] = e.target.value.trim().toLowerCase();

        //Comprobar objeto

        comprobarEmail();
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

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);   
        return resultado; 
    }

    function comprobarEmail(){
   if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-75');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-75');
        btnSubmit.disabled = false;
    }

    function resetFormulario(){
        email.asunto='';
        email.email = '';
        email.mensaje= '';
        email.nombre= '';

        formulario.reset();
         validarEmail();
    }
});