(
    async function(){
        new Chart(
           document.getElementById("grafico2"),
           {
            type: 'line',
            data: {
                labels: ["fevereiro","março", 
                        "abril", "maio",
                        "junho"],
                datasets : [
                    {
                        label: 'Faltas por mês',
                        data: [0,3,4,2,10]
                    }
                ]
            }
           } 
        )
    }
)();