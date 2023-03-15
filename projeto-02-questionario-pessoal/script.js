let texto = document.getElementById("texto")
const btnEnviar = document.getElementById("btn_enviar")

btnEnviar.addEventListener("click", function(event){
    event.preventDefault()
    let nome = document.getElementById("nome").value
    texto.innerHTML = "Olá "+ nome+"!"
})

const btnAno = document.getElementById("btn_ano")

btnAno.addEventListener("click",function(event){
    event.preventDefault()
    let ano = document.getElementById("ano_nascimento").value
    idade = 2023 - ano
    let textoIdade = document.getElementById("texto_idade")
    textoIdade.innerHTML = "Você tem "+idade+" anos"
})

const btnEmoji = document.getElementById("btn_emoji")
let valor = 0
btnEmoji.addEventListener("click", function(event){
    event.preventDefault()
    valor = valor + 1
    let imagem = document.getElementById("imagem")
    imagem.src = `imagens/${valor}.png`

})
