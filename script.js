// cria as variáveis que usarão os spans no script para resgatar a hora, minuto e segundo exatos
const hora = document.querySelector('#hora')

const minuto = document.querySelector('#minuto')

const segundo = document.querySelector('#segundo')

// A propridade setInterval define um intervalo onde determinado período de tempo deve ser executado 
setInterval (() => {
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    hora.innerHTML = `${formatTime(horas)}`
    minuto.innerHTML = `${formatTime(minutos)}`
    segundo.innerHTML = `${formatTime(segundos)}`
}, 1000)

// A função formatTime atribui 0 em valores menores que 10. Por exemplo: 9:40:22 passa a ser 09:40:22
function formatTime(time) {
    return time < 10 ? "0" + time : time
}