//intervalos 
for(let i; i<=10; i++){
    console.log('ejercicio de intervalos')
}


//operadores logicos

//1
let arreglo=[]
arreglo?.map(arreglo=>(console.log(arreglo)))

//2
if(arreglo===null){
    console.log('no tiene nada')
}
//3

let a=1,b=2
if(a!=b){
    console.log('son diferentes')
}
//4
if(!arreglo){
    console.log('arreglo tiene algo')
}

//arreglos funciones

let carrito = ['ropa','camisas','pantalones','calzones']

carrito.map(articulo =>{
    if(articulo=='ropa'){
              console.log('ropa')
    }
})
//creando un nuevo arreglo solo con ropa 
let nuevoArreglo= carrito.filter(articulo =>(
   articulo=='ropa'
))
//creando un nuevo arrglo con todos menos con ropa 
let nuevoArreglo2= carrito.filter(articulo =>(
    articulo!='ropa'
 ))