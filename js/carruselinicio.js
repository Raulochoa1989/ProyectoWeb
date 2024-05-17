window.onload = function() {
    // Variables
    
    const IMAGENES =[
        'recursos/Imagenes/limpieza2.png',
        'recursos/Imagenes/limpieza3.png',
        'recursos/Imagenes/oficinalimpieza.jpeg'
    ]
    let posicionActual = 0;
    let imagen = document.getElementById("imagen")
  
    let intervalo;
  
    // Funciones
  
    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
      if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
      } else {
        posicionActual++;
      }
      renderizarImagen();
    }
  
    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
      imagen.innerHTML = `<img src="${IMAGENES[posicionActual]}" alt="">`
    }
    /**
     * Funcion que inicia el carrusel
     */
    function iniciarCarrusel() {
        renderizarImagen()
        intervalo = setInterval(pasarFoto,5000)
    }

    // Iniciar
    iniciarCarrusel()
  }