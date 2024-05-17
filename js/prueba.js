const pantalla = document.querySelector(".contenedor")
const item = document.querySelectorAll(".item")
let display = pantalla.id
let tasa = document.getElementById("tasa_cambio")
let factor = 36.59
let producto = document.querySelectorAll(".titulopro")
let titulo = document.getElementById("titulo")
let productos = [];
let pedido = []
let componente = {
    imagen: "",
    titulo:"",
    cantidad:0,
    precio$:0,
    precioBs:0
}
let elementosProducto = document.getElementsByClassName('titulopro');
    
// ejecucion del codigo
definirTasa()

// ciclo que agrega los nombres del producto en una lista.

for(let i = 0; i < elementosProducto.length; i++) {
    let nombreProducto = elementosProducto[i].innerText;
    productos.push(nombreProducto); 
}

item.forEach(seleccion => {
   
    seleccion.addEventListener("click", () =>{
        const indice = seleccion.title
        alert(indice)
    })
})



// funciones

function definirTasa(){
    tasa.innerHTML = factor
}
function setearTitulo(titulo,productos){
    titulo.innerHTML = productos[indice]
}