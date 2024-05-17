//definiciaon de variables
const tasa = document.getElementById("tasa_cambio")
let factor = 36.61
const preciosRef = document.getElementsByClassName("ref")
const preciosBs = document.getElementsByClassName("precio")
const btnSumar = document.querySelectorAll(".sumar")
const btnRestar = document.querySelectorAll(".restar")
const btnAgregarItem = document.querySelectorAll(".agregarcarrito")
const productoselect = document.getElementById("contlista")
const btneliminar = document.querySelectorAll("eliminarproducto")
let productoscarrito = document.getElementById("productoscarrito")
let idProductosCarrito =[]
let carrito = 0
const productos =[
    pro1 = {
        imagen: "recursos/Imagenes/Lavaplatos.jpg",
        descripcion: "Lavaplatos líquido",
        precioRef:1.10,
    },
    pro2 = {
        imagen: "recursos/Imagenes/cloro.jpeg",
        descripcion: "Cloro domestico",
        precioRef:0.60
    },
    desinfectante = {
        imagen: "recursos/Imagenes/desinfectante.jpeg",
        descripcion: "Desinfectante",
        precioRef:0.60
    },
    lavanderia = {
        imagen: "recursos/Imagenes/Jabon lavanderia.jpeg",
        descripcion: "Jabon lavanderia",
        precioRef:1.16
    },
    limpiapocetas = {
        imagen: "recursos/Imagenes/limpiador de pocetas.jpeg",
        descripcion: "Limpiador de pocetas",
        precioRef:1.10
    },
    cera = {
        imagen: "recursos/Imagenes/cera blanca.jpeg",
        descripcion: "Cera blanca",
        precioRef:0.86
    },
    antibacterial = {
        imagen: "recursos/Imagenes/antibacterial.jpeg",
        descripcion: "Antibacterial",
        precioRef:0.55
    },
    suavizante = {
        imagen: "recursos/Imagenes/suavizante.jpeg",
        descripcion: "Suavizante",
        precioRef:0.86
    },
    clarificante = {
        imagen: "recursos/Imagenes/clarificante.jpeg",
        descripcion: "Clarificante",
        precioRef:1.10
    },
    desengrasante = {
        imagen: "recursos/Imagenes/desengrasante.jpeg",
        descripcion: "desengrasante",
        precioRef:1.21
    },
]


//ejecucion de codigo

DefinirTasaCambio()

calcularPreciosBs()

btnSumar.forEach(adicion => {
    adicion.addEventListener('click',sumarCantidad)
})

btnRestar.forEach(sustraccion =>{
    sustraccion.addEventListener("click",restarCantidad)
})
btnAgregarItem.forEach(cargaProducto =>{
    cargaProducto.addEventListener("click", cargarProducto)
})
btneliminar.forEach(eliminarproductocarrito =>{
    eliminarproductocarrito.addEventListener("click,",eliminarProducto)
})


// definicion de funciones

function DefinirTasaCambio(){
    tasa.innerHTML = factor
}
function calcularPreciosBs(){
    for (var i = 0; i < preciosRef.length; i++) {
        var precio = parseFloat(preciosRef[i].innerText); 
        var precioConvertido = precio * factor; 
        preciosBs[i].innerText = precioConvertido.toFixed(2);
    }  
}
function sumarCantidad(){

    var cantidad = this.parentNode.getElementsByClassName('cantidad')[0];

    if(isNaN(cantidad.value)){
        alert('El valor ingresado no es un número');
        cantidad.value = 0
       return
    }

    if(cantidad.value == ""){
        cantidad.value = 0
    }

    cantidad.value = (parseInt(cantidad.value) + 1)
};
function restarCantidad(){

    var cantidad = this.parentNode.getElementsByClassName('cantidad')[0];

    if(isNaN(cantidad.value)){
        alert('El valor ingresado no es un número');
        cantidad.value = 0
       return
    }

    if(cantidad.value == ""){
        cantidad.value = 0
    }

    cantidad.value = (parseInt(cantidad.value) - 1);

    if(cantidad.value <= 0 ){
        alert("error no se puede procesar cantidades menores a 0")
        cantidad.value = 0.35
    }

}
function cargarProducto(){
    const idProducto = this.parentNode.getElementsByClassName('idproducto')[0].innerText;
    const objSeleccionado = productos[idProducto]
    const idObjSeleccionado = this.parentNode.getElementsByClassName('idproducto')[0].id
    if(idProductosCarrito.includes(idObjSeleccionado)){
        var cantidad = this.parentNode.getElementsByClassName('cantidad')[0].value
        var cantidadActual = document.getElementById(`cantidad${idProducto}`)
        var nuevoMontoRef = document.getElementById(`montoref${idProducto}`)
        const montoBs = this.parentNode.getElementsByClassName('precio')[0].innerText
        var nuevoMontoBs = document.getElementById(`montobs${idProducto}`)
        var nuevaCantidad = (parseFloat(cantidad) + parseFloat(cantidadActual.innerText.slice(10)))
        cantidadActual.innerHTML = `cantidad: ${nuevaCantidad}`
        nuevoMontoRef.innerHTML = `${(objSeleccionado.precioRef * nuevaCantidad).toFixed(2)}$`
        nuevoMontoBs.innerHTML = `${(montoBs*nuevaCantidad).toFixed(2)}Bs`
    } else {
        idProductosCarrito.push(idObjSeleccionado)
        var cantidad = this.parentNode.getElementsByClassName('cantidad')[0].value
        const montoBs = this.parentNode.getElementsByClassName('precio')[0].innerText;
        if(cantidad <= 0 ){
            alert("No se pueden agregar al carrito productos cuya cantidad es menor o igual a 0")
            return
        }
        if(isNaN(cantidad)){
            alert('El valor ingresado en cantidad no es un número');
        return
        }
        const div = document.createElement("div")
        div.id = `elemento${idProducto}`
        div.classList.add("itempedido")
            div.innerHTML =`
                <div class="productocarrito" id="${idProducto}">
                    <div class="imagenpedido">
                        <img src="${objSeleccionado.imagen}" alt="">
                    </div>
                    <div class="textopedido">
                        <p class="productopedido">${objSeleccionado.descripcion}</p>
                        <p class="cantidadpedido" id="cantidad${idProducto}">cantidad: ${cantidad}</p>
                        <p class="montoref" id="montoref${idProducto}">monto Ref: ${(objSeleccionado.precioRef * cantidad).toFixed(2)}$</p>
                        <p class="montobs" id="montobs${idProducto}"> monto Bs: ${(montoBs*cantidad).toFixed(2)}Bs</p>
                    </div>
                </div>`
            productoselect.append(div)
            carrito++
            productoscarrito.innerText = carrito
    }
}
function eliminarProducto(){
    const idProducto = this.parentNode.getElementsByClassName('idproducto')[0].id;
    alert (idProducto)
}




