productos = new Array();

productos[0] = ["mouse", "mouse.jpg","50USD", 4]
productos[1] = ["monitor", "monitor.jpg","50USD",4]
productos[2] = ["teclado", "teclado.jpg","50USD",3]
productos[3] = ["teclado", "teclado.jpg","50USD",1]
productos[4] = ["teclado", "teclado.jpg","50USD",5]
productos[5] = ["teclado", "teclado.jpg","50USD",5]
productos[6] = ["teclado", "teclado.jpg","50USD",1]
productos[7] = ["teclado", "teclado.jpg","50USD",1]
productos[8] = ["teclado", "teclado.jpg","50USD",4]
productos[9] = ["teclado", "teclado.jpg","50USD",1]

let contenedorProductos = document.getElementById("contenedorProductos")
let div;
let btnVerCarrito = document.getElementById("btnVerCarrito")
let cantProdCarritoDom = document.getElementById("cantProd")
cantProdCarritoDom.innerHTML = 0
let elementosCarrito = []
let imgEstrella = "img/estrella.png"

let id = 0;
    for(i=0; i<productos.length; i++){  
        
        div = document.createElement("div");
        div.classList.add("divProductos");
        contenedorProductos.appendChild(div);
        div.setAttribute("id", id);
        

        let titulo = document.createElement("p")
        titulo.innerHTML = productos[i][0]
        titulo.setAttribute("class","parrafo")
        titulo.setAttribute("id","titulo"+i)
        div.appendChild(titulo) 
        
        let img = document.createElement("img");
        img.src = productos[i][1]
        img.setAttribute("class","imgDivProductos")
        div.appendChild(img)

        let parrafoPrecio = document.createElement("p")
        parrafoPrecio.innerHTML = productos[i][2]
        div.appendChild(parrafoPrecio)

        let btn = document.createElement("button")
        btn.innerHTML = "Añadir al carrito"
        btn.setAttribute("class","btn")
        btn.setAttribute("id", "btnId"+i)
        div.appendChild(btn) 

        id = id + 1;
    }

botonCarrito = document.getElementsByClassName("btn")


function añadirAlCarrito(evt){
    //identificar el prod añadido al carrito, serviria para hacer una lista de los prods
    let cajaProductoId = evt.target.parentNode.id
    let tituloProductoParaCarrito = document.getElementById("titulo" + cajaProductoId)
    let lista = document.createElement("li")
    lista.innerHTML = tituloProductoParaCarrito.innerHTML
    
    //clases de la lista
    lista.setAttribute("class","listaProductosCarrito")
    lista.setAttribute("class","claseJuntoAlBotonCarrito")
    lista.setAttribute("id","lista" + elementosCarrito.length)
    
    //agregar el prod al array y indicar nro de prods añadidos en el aside
    elementosCarrito.push(lista.innerHTML)
    cantProdCarritoDom.innerHTML = elementosCarrito.length
}

//ejecutar funciones
for(i = 0; i < botonCarrito.length; i++){
    botonCarrito[i].addEventListener("click",function(evt){
        añadirAlCarrito(evt)
    },false)
}