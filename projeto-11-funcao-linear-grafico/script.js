const ctx = document.getElementById('myChart')

let botao = document.querySelector('#calcular')

botao.addEventListener('click', function(event){
    event.preventDefault()
    let a = document.querySelector('#a').value
    let xMin = document.querySelector('#xMin').value
    let xMax = document.querySelector('#xMax').value
    let x = xMin
    let y = []
    let labels = []
    while(x <= xMax){
       y.push(Math.cos(x))
       labels.push(x)
       x = x + 0.1
    }
    
    const data = {
        labels,
        datasets: [{
            data: y,
            label: 'Função exponencial'
        }]
    }

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true
        }
    };

    const myChart = new Chart(
        ctx,
        config
      );
    //document.querySelector('#resposta').textContent = y 
})
