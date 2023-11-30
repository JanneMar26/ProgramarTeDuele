import {createErrorWindow} from "./errorsForm.js";
import { sendEmail } from "./sendEmail.js";

// Referencia del Boton
const buttonContactSend = document.getElementById("buttonContact");

// Verificar nombre
const checkName = nameUser => {
    let ans = false;
    let msgError = "Debes de Ingresar Tu Nombre!";

    if (nameUser !== "") {
        ans = true;
        msgError = "";
    };
    
    return {ans: ans, msgError: msgError};
};

// Verificar numero
const checkTel = telUser => {
    let ans = false;
    let msgError = "El numero ingresado es incorrecto";

    const telephone = telUser.split("").map(element => Number(element));
    const sumTelephone = telephone.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (sumTelephone && telUser.length == 10) {
        ans = true;
        msgError = "";
    }

    return {ans: ans, msgError: msgError};
};

// Verificar mensaje
const checkMessage = message => {
    let ans = true;
    let msgError = "";

    if (message.length == 0) {
        ans = false;
        msgError = "Debes de ingresar un mensaje!";
    }

    return {ans: ans, msgError: msgError};
};

// Verificar email
const checkEmail = emailUser => {
    let ans = true;
    let msgError = "";
    // Arrobas
    const numArrobas = emailUser.split("@").length - 1;
    // Signos Especiales
    const specialSigns = ["(",")","[","]","{","}",";",",",":","#","Ñ",
                          "/","*","+","%","&","<",">","ñ","!","¡","¿",
                          "?"];
    let inSign = false;
    for (let sign of specialSigns) {
        inSign = emailUser.split("").includes(sign);
        if (inSign) {
            break;
        }
    }

    if (inSign || (numArrobas != 1)){
        ans = false;
        msgError = "Dirección de email inválida!";
    }

    return {ans: ans, msgError: msgError};
};

buttonContactSend.addEventListener("click", e => {
    const formUser = document.getElementById("formUser");
    const nameUser = formUser[0].value;
    const emailUser = formUser[1].value;
    const telUser = formUser[2].value;
    const message = formUser[3].value;

    const checksDataUser = {
        nameUser: [nameUser, checkName(nameUser), "nameUserClass"],
        emailUser: [emailUser, checkEmail(emailUser), "emailUserClass"],
        telUser: [telUser, checkTel(telUser), "telUserClass"],
        message: [message, checkMessage(message), "messageClass"]
    };
    
    //console.log(checksDataUser.nameUser[1].ans);
    if (checksDataUser.nameUser[1].ans && checksDataUser.emailUser[1].ans && 
        checksDataUser.telUser[1].ans && checksDataUser.message[1].ans) {
            sendEmail(checksDataUser);
    } else {
            createErrorWindow(checksDataUser);
    }
});
