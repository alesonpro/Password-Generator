// random character generator
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'


// loop and randomize
function passwordRandom(length) {
    let result = ''
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

// function that render the password
let string = document.getElementById("random-el") 
function passwordRender(){
    string.textContent = passwordRandom(15)
}

// copy password function 
function copyText(htmlElement){
    if(!htmlElement) {
        return
    }
    let elementText = htmlElement.innerText
    let inputElement = document.createElement("input")
    inputElement.setAttribute("value", elementText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand("copy")
    inputElement.parentNode.removeChild(inputElement)
}

function passwordCopy(){
    copyText(document.getElementById("random-el"))
}



