console.log("Validacion de datos Pagina de CONTACTO");

const contactForm = document.querySelector('#contactForm');


const clickButton = () => {
    const user = {
        name: contactForm.elements["nameUser"].value,
        email : contactForm.elements["emailUser"].value,
    }

    if( datosVerificados(user) ){
        enviarDatosAlServidor(user);
    }
}

const datosVerificados = (user) => {
    let response = true;
    // TODO verificar datos
    if( user.name === "" ){
        mensajeErrorName("Es necesario introducir un nombre");
        response = false;
    }else if (user.email === ""){
        mensajeErrorEmail('Es necesario introducir una direccion e-mail');
        response = false;
    }/* else mensajeError ("") */

    
    return response;
}

const mensajeErrorEmail = (message) => {
    console.error(message);
    const errorMessageEmail = document.querySelector("#errorEmail");
    errorMessageEmail.innerHTML = message;
}

const mensajeErrorName = (message) => {
    console.error(message);
    const errorMessageName = document.querySelector("#errorName");
    errorMessageName.innerHTML = message;

    if(message == "") errorMessageName.style.display = "none";
    else errorMessageName.style.display = "block"; 
}
const enviarDatosAlServidor = (user) => {
    console.table(user);
    // TODO enviar datos a la api del servidor

}
