let valor = document.querySelector('div.escolher input')
let resposta = document.querySelector('div.resposta')

function tabuada (){
    resposta.innerHTML = ''
    for(let contador = 1; contador <=10; contador++) {
        let valorDigitado = Number(valor.value)
        let gerarTabuada = `${valorDigitado} x ${contador} = ${valorDigitado*contador} <br>`
        resposta.innerHTML += gerarTabuada
    }
}