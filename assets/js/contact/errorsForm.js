const createErrorWindow = data => {
    
    for (let prop in data) {
        if (!data[prop][1].ans){
            showError(data[prop][2],data[prop][1].msgError);
        } else {
            noError(data[prop][2]);
        }
    }

}

export {createErrorWindow};

const showError = (className,msgError) => {

    const elements = document.getElementsByClassName(className);

    // elements[1].style.color = "red";
    // elements[0].style.borderBottom = "2px solid red";
    elements[2].innerHTML = msgError;

};

const noError = className => {

    const elements = document.getElementsByClassName(className);
    
    elements[1].style.color = "black";
    elements[0].style.borderBottom = "2px solid black";
    elements[2].innerHTML = "";
};
