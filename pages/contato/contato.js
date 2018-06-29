var nome = document.getElementById("nome")
var email = document.getElementById("email")
var mensagem = document.getElementById("mensagem")

var avisoNome = document.getElementById("aviso-nome")
var avisoEmail = document.getElementById("aviso-email")
var avisoMensagem = document.getElementById("aviso-mensagem")

var avisoCampoObrigatorio = 'Este campo é obrigatório'

function validarFormulario(){

    removeAvisos()

    validacaoNome = validarNome()
    validacaoEmail = validarEmail()
    validacaoMensagem = validarMensagem()

    enviarFormulario = validacaoNome && validacaoEmail && validacaoMensagem
    if(enviarFormulario){
        alert("Obrigado!\nSua mensagem foi encaminhada.\nEntraremos em contato.")
        window.location.reload()
    }

}

function validarNome(){

    if(nome.value.trim().length === 0){
        nome.classList.add('campo-obrigatorio')
        avisoNome.textContent = avisoCampoObrigatorio
        return false
    }else{
        return true   
    }
        
}

function validarEmail(){

    if(email.value.trim().length === 0){
        email.classList.add('campo-obrigatorio')
        avisoEmail.textContent = avisoCampoObrigatorio
        return false
    }else if(!email.value.includes("@")){
        email.classList.add('campo-obrigatorio')
        avisoEmail.textContent = "E-mail incompleto"
    }else{
        return true
    }

}

function validarMensagem(){
    
    if(mensagem.value.trim().length === 0){
        mensagem.classList.add('campo-obrigatorio')
        avisoMensagem.textContent = avisoCampoObrigatorio
        return false
    }else{
        return true
    }
    
}

function removeAvisos(){

    avisoNome.textContent = ""
    nome.classList.remove('campo-obrigatorio')

    avisoEmail.textContent = ""
    email.classList.remove('campo-obrigatorio')
    
    avisoMensagem.textContent = ""
    mensagem.classList.remove('campo-obrigatorio')

}

function limparFormulario(){

    removeAvisos()

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

}