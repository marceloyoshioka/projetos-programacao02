(
    async function(){
        new Chart(
           document.getElementById("grafico1"),
           {
            type: 'bar',
            data: {
                labels: ["Português","Matemática", 
                        "Biologia", "Programação 2",
                        "Redes II", "Prog. Mobile"],
                datasets : [
                    {
                        label: 'Média de notas',
                        data: [7,5,10,9.5,8,6]
                    }
                ]
            }
           } 
        )
    }
)();