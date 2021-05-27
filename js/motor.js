var moviles=[
    {
        foto1:"img/XiaomiMi10TLite.png",
        foto2:"img/XiaomiMi10TLite128GB.png",
        nombre:"Xiaomi Mi 10T Lite",
        precio:290,
        precio64:350,
        precio128:489,
        precio256:529
    },
    {
        foto1:"img/Iphone12.png",
        foto2:"img/Iphone12Mor.png",
        nombre:"Iphone 12 Pro",
        precio:1300,
        precio64:1450,
        precio128:1570,
        precio256:1660
    },
    {
        foto1:"img/GalaxyNote20Ultra.png",
        foto2:"img/GalaxyNote20Ultra5G.png",
        nombre:"Galaxy Note20 Ultra",
        precio:1150,
        precio64:1290,
        precio128:1395,
        precio256:1450
    },
    {
        foto1:"img/GalaxyS20.png",
        foto2:"img/Galaxys205G.png",
        nombre:"Galaxy S20+5G",
        precio:780,
        precio64:880,
        precio128:969,
        precio256:1150

    },
]
var pedidosT=[];

var numero=0

pintar();
function pintar() {

    for(let x=0;x<moviles.length;x++){
        document.getElementById('container').innerHTML+=` <div class="cajasMovil">
        <img src="${moviles[x].foto1}" id='foticos${x}'alt="">
        <div class="muestra">
            <input type="radio" name="imagen${x}" id="frontal" onclick="delante(${x})" checked>
            <input type="radio" name="imagen${x}" id="atras" onclick="atras(${x})">
        </div>
        <div class="ram">
            <input type="radio" name="memoria${x}" id="ram${x}" onclick="preci64(${x})" checked><label>64GB</label>
            <input type="radio" name="memoria${x}" id="ram1${x}" onclick="preci128(${x})"><label>128GB</label>
            <input type="radio" name="memoria${x}" id="ram2${x}" onclick="preci256(${x})"><label>256GB</label>
        </div>
        <div class="nombre">
            <i class="far fa-heart"></i>
            <p>${moviles[x].nombre}</p>
            <div class="detalle"> <span id='detalle${x}'>${moviles[x].precio}</span> €</div>
        </div>
        <div class="solicitar" onclick="anadirCarrito(${x})">
            Comprar 
        </div>
    </div>`
    }
}

function delante(posicion) {
    document.getElementById(`foticos${posicion}`).src=moviles[posicion].foto1;
}
function atras(posicion) {
    document.getElementById(`foticos${posicion}`).src=moviles[posicion].foto2;
}
function preci64(posicion) {
    let valor = moviles[posicion].precio64;
    document.getElementById(`detalle${posicion}`).innerHTML=valor;
}
function preci128(posicion) {
    let valor = moviles[posicion].precio128;
    document.getElementById(`detalle${posicion}`).innerHTML=valor;
}
function preci256(posicion) {
    let valor = moviles[posicion].precio256;
    document.getElementById(`detalle${posicion}`).innerHTML=valor;
}

function anadirCarrito(x){
    numero++;
    document.getElementById('numeroDiscos').innerHTML=numero;
    
    if(document.getElementById(`ram${x}`).checked){
        precioB= moviles[x].precio64;
    }
    if(document.getElementById(`ram1${x}`).checked){
        precioB= moviles[x].precio128;
    }
    if(document.getElementById(`ram2${x}`).checked){
        precioB= moviles[x].precio256;
    }


    pedidosT.push({precio: precioB, fotoM: moviles[x].foto1, nombreM: moviles[x].nombre})

    localStorage.setItem('MysdatosMovilAntonella', JSON.stringify(pedidosT));

    suma();
}

function cargaDatos(){
    if (localStorage.getItem('MysdatosMovilAntonella')){

        pedidosT=JSON.parse(localStorage.getItem('MysdatosMovilAntonella'));
        
        imprimirmovil();

        suma();
    }
}

function eliminarTarea(posicion){
    pedidosT.splice(posicion,1);
    localStorage.setItem('MysdatosMovilAntonella',JSON.stringify(pedidosT));
    
    imprimirmovil();

    suma();
}

cargaDatos();

function suma() {
    
    contador=0

    for(let x=0;x<pedidosT.length;x++){

        contador+=pedidosT[x].precio;

    }
    document.getElementById('total').innerHTML=contador
}

function imprimirmovil() {
    document.getElementById('movilP').innerHTML="";

    for(let x=0;x<pedidosT.length;x++){
        document.getElementById('movilP').innerHTML+=`
        <div class="verticalmovil">
            <img src="${pedidosT[x].fotoM}" alt="">
            <div class="pintona">
                <p>${pedidosT[x].nombreM}</p>
                <h2>${pedidosT[x].precio} €</h2>
                <p class="borrar" onclick="eliminarTarea(${x})">X</p>
            </div>
        </div>
        `;
    }

    numero=0;
    for(let x=0;x<pedidosT.length;x++){
        
        numero++;
        
    }
    document.getElementById('numeroDiscos').innerHTML=numero;
    
}