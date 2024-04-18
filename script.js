const hora = document.querySelector('#hora')

const minuto = document.querySelector('#minuto')

const segundo = document.querySelector('#segundo')

setInterval (() => {
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    hora.innerHTML = `${formatTime(horas)}`
    minuto.innerHTML = `${formatTime(minutos)}`
    segundo.innerHTML = `${formatTime(segundos)}`
}, 1000)

function formatTime(time) {
    return time < 10 ? "0" + time : time
}