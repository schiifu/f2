window.onload = function () {
  const now = new Date()
  const hora = now.toLocaleTimeString()
  const data = now.toLocaleDateString()
  document.getElementById("hora-atual").innerText = `Agora são ${hora} de ${data}`
}