/*

https://br.freepik.com/fotos-gratis/masculino-mao-segurando-um-telefone_8096966.htm#page=2&query=neg%C3%B3cios%20online&position=5&from_view=search&track=ais

*/

const panels = document.querySelectorAll('.panel')

panels.forEach( (panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')

    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}