
btn = document.getElementById("btn")
nome = document.getElementById("nome")
mensagem = document.getElementById("mensagem")

btn.addEventListener("click", function(event){
    event.preventDefault()
    if(nome.value.length < 4){
        nome.classList.add("invalida")
        mensagem.innerHTML = "Nome deve ter mais de 3 caracteres"
        mensagem.classList.add("mensagem-erro")
    } else{
        mensagem.innerHTML = "Cadastrado com sucesso"
        nome.classList.remove("invalida")
        mensagem.classList.remove("mensagem-erro")
        mensagem.classList.add("mensagem-sucesso")

    }
})