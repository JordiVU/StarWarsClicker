let logros = {
  contador: 0,
  clon: 0,
  fabricas: 0 
}

cargar();

function contar() {
  logros.contador++;
  document.getElementById("contador").innerHTML = logros.contador;

  navigator.vibrate(75);

  let imagen = document.getElementById("general");
  imagen.addEventListener('animationend', () => {
    imagen.classList.remove('animate__animated', 'animate__shakeX');
  }, { once: true });
  imagen.classList.add('animate__animated', 'animate__shakeX');

  let audio = document.getElementById("tos");
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('load', () => {
  const contenedor_loader = document.querySelector('.contenedor_loader')
  contenedor_loader.style.display = 'none';
})

function guardar() {
  Swal.fire({
    title: "Work saved!",
    icon: "success"
  });
  localStorage.setItem("logros", JSON.stringify(logros));
}

function cargar() {
  let logrosGuardados = localStorage.getItem("logros");
  if (logrosGuardados) {
    logros = JSON.parse(logrosGuardados);
    document.getElementById("contador").innerHTML = logros.contador;
    document.getElementById("clon").innerHTML = logros.clon;
    setInterval(() => {
      logros.contador++;
      document.getElementById("contador").innerHTML = logros.contador;
    }, 1000 / logros.clon);
  }
}

function comprarClon() {
  if (logros.contador >= 10) {
    logros.contador -= 10;
    logros.clon++;
    document.getElementById("contador").innerHTML = logros.contador;
    document.getElementById("clon").innerHTML = logros.clon;
    setInterval(() => {
      logros.contador++;
      document.getElementById("contador").innerHTML = logros.contador;
    }, 1000);
  }
}

function reiniciar() {
  localStorage.removeItem("logros");
  location.reload();
}

function silenciar() {
  document.getElementById("tos").muted = true;
}

function activarSonido() {
  document.getElementById("tos").muted = false;
}

function bajarVolumen() {
  document.getElementById("tos").volume -= 0.1;
}

function subirVolumen() {
  document.getElementById("tos").volume += 0.1;
}