let nome = window.document.getElementById('nome')
let email = document.querySelector('#Email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
Email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Valido'
        txt.style.color = 'green'
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    
    if (Email.value.indexOF('@') == -1 || Email.value.indexOF) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}
function validaAssunto() {
    let txtEmail = document.querySelector('#txtAssunto')
    
    if (assunto.value.lenght >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'blok'
    } else {
        txtAssunto.style.display = 'none'
        AssuntoOK = true
    }}
    function enviar () {
        if (nomeOK == true && emailOk == true && assuntoOk ==true){
        alert ('Formulario enviado com sucesso')
    }  else {
        alert ('Preencha o Formulario corretamente antes de enviar')
    }}
    function mapazoom(){
        mapa.style.width = '800px'
        mapa.style.height = '600px'
    }

    function mapanormal(){
        mapa.style.width = '400px'
        mapa.style.height = '300px'
    }