let usu = document.querySelector('input#usuario')
let log = document.querySelector('input#login')

function btn() {
    if (usu || log == '') {
        alert('Por favor, insira seus dados! ')
    }
}

