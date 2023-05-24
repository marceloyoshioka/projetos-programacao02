botaoQuestao1 = document.querySelector("#botao-questao1")

botaoQuestao1.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao1")
    let gabarito1 = document.getElementById("gabarito1")
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'b'){
                gabarito1.textContent = "Gabarito B. Resposta certa"
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito1.textContent = "Gabarito B. Resposta errada"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})
