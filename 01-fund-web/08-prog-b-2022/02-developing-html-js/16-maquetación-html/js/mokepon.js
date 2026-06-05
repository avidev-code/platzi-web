function iniciarJuego() {

  let botonMascotaJugador = document.getElementById('boton-mascota')
  botonMascotaJugador .addEventListener('click', seleccionarMascotaJugador)

  //let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
  //sectionSeleccionarAtaque.style.display = 'none'

  //let sectionReiniciar = document.getElementById('reiniciar')
  //sectionReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('Capipepo')
  let inputRatigueya = document.getElementById('Ratigueya')
  let spanMascotaJugador = document.getElementById('mascota-jugador')
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = '🦛 Hipodoge'
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = '🫏 Capipepo'
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = '🐀 Ratigueya'
  } else {
    alert('⚠️ Para jugar debes seleccionar una mascota ⚠️')
  }

  seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(1,3)
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

  if (ataqueAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = '🦛 Hipodoge'
  } else if (ataqueAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = '🫏 Capipepo'
  } else {
    spanMascotaEnemigo.innerHTML = '🐀 Ratigueya'
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
 
window.addEventListener('load', iniciarJuego)