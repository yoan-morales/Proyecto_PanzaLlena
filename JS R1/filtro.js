const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnPerros = document.querySelector('.perros');
const btnGatos = document.querySelector('.gatos');
const btnPromociones = document.querySelector('.promociones');
const contenedorProductos = document.querySelector('.productos');
document.addEventListener('DOMContentLoaded',()=>{
    productos();
});

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    }); 
});


imagenes.forEach(imagen=>{

observer.observe(imagen);
});

const productos = () =>{
    let productosArreglo = []
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto=> productosArreglo = [...productosArreglo,producto]);

    const perros = productosArreglo.filter(perros=> perros.getAttribute('data-producto') === 'perros');
    const gatos = productosArreglo.filter(gatos=> gatos.getAttribute('data-producto') === 'gatos');
    const promociones = productosArreglo.filter(promociones=> promociones.getAttribute('data-producto') === 'promociones');

    mostrarProductos(perros, gatos, promociones, productosArreglo);

}

const mostrarProductos = (perros, gatos, promociones, todos) =>{
    btnPerros.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        perros.forEach(perros=> contenedorProductos.appendChild(perros));
    });

    btnGatos.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        gatos.forEach(gatos=> contenedorProductos.appendChild(gatos));
    });

    btnPromociones.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        promociones.forEach(promociones=> contenedorProductos.appendChild(promociones));
    });

    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todos=> contenedorProductos.appendChild(todos));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}