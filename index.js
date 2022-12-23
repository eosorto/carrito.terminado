
//    variables
const lista=document.querySelector('.caja1')
const iconoCarrito=document.querySelector('.img-car')
const contenedorTabla=document.querySelector('.container-table')
const contenedorCarrito=document.querySelector('.container-table table tbody')
const preciott=document.querySelector('.precioTotal')


//array donde se va guardar
let listaProductos=[]

// eventos click
lista.addEventListener('click',crearLISTA)
iconoCarrito.addEventListener('click',()=>{
  contenedorTabla.classList.toggle('quitarVisbility')
})
contenedorTabla.addEventListener('click',eliminarUnidad)

// funciones 
function crearLISTA(e){
  if(e.target.className==='producto-agregar'){
    listaArray(e.target.parentElement)

  }
  else{
    return
  }
}
function listaArray(arr){
  let obejtoLista={
    imagen:arr.querySelector('.img-producto').src,
    nombre:arr.querySelector('.nombre-producto').textContent,
    precio:arr.querySelector('.precio-spam').textContent,
    cantidad:1
  }
  let repetido=false
  for (let x = 0; x < listaProductos.length; x++) {
    if(listaProductos[x].nombre==obejtoLista.nombre){
      listaProductos[x].cantidad++
      listaProductos[x].precio=obejtoLista.precio*listaProductos[x].cantidad
      repetido=true
      break
    }
    
  }
  if(repetido==false){

    listaProductos.push(obejtoLista)
  }
 
  
  
   
  

  crearCARRITO(listaProductos) 
  
}
function crearCARRITO(arr){
  contenedorCarrito.innerHTML=''
  let total=0
  for (let x = 0; x < arr.length; x++) {
    const row=document.createElement('tr')
    row.innerHTML=`
      <td>
        <img class="imgcar" src="${arr[x].imagen}" alt="">
      </td>
      <td>${arr[x].nombre}</td>
      <td>${arr[x].precio}$</td>
      <td>${arr[x].cantidad}</td>
      <td><span class="btnCerrar">X</span></td>
        
    `
    total=total+parseInt(arr[x].precio)
    preciott.textContent=total
    contenedorCarrito.appendChild(row)
    
  }
     

}
function eliminarUnidad(e){
  let total=0
  if(e.target.className=='btnCerrar'){
    let nomb=e.target.parentElement.parentNode.cells[1].textContent
    let newarray=listaProductos.filter(det=>det.nombre!==nomb)
     
    if(newarray.length<=0){
      preciott.textContent=total
    }
    listaProductos=newarray
    crearCARRITO(listaProductos)
  }
}
