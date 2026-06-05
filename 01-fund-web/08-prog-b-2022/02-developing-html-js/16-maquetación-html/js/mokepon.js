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

  if (inputHipodoge.checked) {
    alert('Seleccionaste a Hipodoge 🐶')
  } else if (inputCapipepo.checked) {
    alert('Seleccionaste a Capipepo 🫏')
  } else if (inputRatigueya.checked) {
    alert('Seleccionaste a Ratigueya 🐀')
  } else {
    alert('Para jugar debes seleccionar una mascota')
  }
}
 
window.addEventListener('load', iniciarJuego)