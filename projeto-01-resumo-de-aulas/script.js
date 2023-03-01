const esconder = document.getElementById("btn_esconder")
const imagem = document.getElementById("seno")
const mostrar = document.getElementById("btn_mostrar")

esconder.addEventListener("click", function(){
    imagem.style.visibility = "hidden";
})

mostrar.addEventListener('click', function() {
    imagem.style.visibility = "visible";
})
