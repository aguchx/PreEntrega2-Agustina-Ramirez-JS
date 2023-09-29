
let alto= parseFloat(prompt('Por favor, ingrese el alto del diseño en centimetros: '));
let ancho= parseFloat(prompt('Por favor, ingrese el ancho del diseño en centimetros: '));
let unidadesImprimir= parseFloat(prompt('Por favor, ingrese la cantidad de unidades que necesite imprimir: '));


const anchoHojaA4 = 21; 
const altoHojaA4 = 29;
const anchoHojaA3 = 29; 
const altoHojaA3 = 42; 
const hoja = verificarTamano(alto,ancho,anchoHojaA4,altoHojaA4,anchoHojaA3,altoHojaA3);


let anchoHoja= 0;
let altoHoja= 0;
let unidadesPorHoja= 0;
let costoPorCopia=0;
let contadorHojas = 0;
let hojasImpresion=0;
let costoTotal= 0;





 switch (hoja) {
    case 1:
        anchoHoja=anchoHojaA4;
        altoHoja=altoHojaA4;
        unidadesPorHoja=calcularUnidadesPorHoja(alto,ancho,anchoHoja,altoHoja);
        costoPorCopia=150;
        hojasImpresion = calcularHojas(unidadesPorHoja, unidadesImprimir);
        costoTotal= calculoCosto(hojasImpresion,costoPorCopia);
        alert ('Su pedido se imprimira en tamaño A4.');
        break;
    case 2:
        anchoHoja=anchoHojaA3;
        altoHoja=altoHojaA3;
        unidadesPorHoja=calcularUnidadesPorHoja(alto,ancho,anchoHoja,altoHoja);
        costoPorCopia=250;
        hojasImpresion = calcularHojas(unidadesPorHoja, unidadesImprimir);
        costoTotal= calculoCosto(hojasImpresion,costoPorCopia);
        alert ('Su pedido se imprimira en tamaño A3.');
        break;

    case 3:
    default:
        alert ('No es posible imprimir en el tamaño que ingreso.');
        break;
}

function verificarTamano(alto,ancho,anchoHojaA4,altoHojaA4,anchoHojaA3,altoHojaA3) {

    if (ancho < anchoHojaA4 && alto < altoHojaA4) {
        return 1;
    }  else if ( ancho < anchoHojaA3 && alto < altoHojaA3){
        return 2;
    } else {
        return 3;
    }
}

function calcularUnidadesPorHoja(alto,ancho,anchoHoja,altoHoja) {
    let contadorAncho=0;
    let contadorAlto=0;

    for (let i = ancho; i <= anchoHoja; i += ancho ) {
        contadorAncho+=1;
    }
    
    for (let i = alto; i <= altoHoja; i += alto ) {
        contadorAlto+=1;
    }

 
    return contadorAncho * contadorAlto ;
}

function calcularHojas(unidadesPorHoja,unidadesImprimir) {
    let contadorHojas=0;

    for (let i = unidadesPorHoja; i <= unidadesImprimir; i += unidadesPorHoja ) {
        contadorHojas+=1;
    }
    return contadorHojas;
}

function calculoCosto(hojasImpresion,costoPorCopia){
    return hojasImpresion*costoPorCopia;
}
 




 // mostrar los resultados
 alert("Cantidad de unidades por hoja: " + unidadesPorHoja +
       "\nCantidad de hojas necesarias: " + hojasImpresion +
       "\nCosto total: $" + costoTotal.toFixed(2)); 
       // Redondear 2 decimales


// mostrar todos los valores funcionando por consola
console.log('Ancho del diseño = '+ ancho);
console.log('Alto del diseño = '+ alto);
console.log('Cantidad de unidades = '+ unidadesImprimir);
console.log('Cantidad unidades x hoja ='+ unidadesPorHoja);
console.log('Cantidad Hojas necesarias ='+ hojasImpresion);
console.log('Costo total ='+ costoTotal);

// console.log('hoja ='+ hoja); //entrada switch


