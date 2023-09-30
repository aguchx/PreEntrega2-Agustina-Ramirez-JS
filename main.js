
function obtenerEntradaUsuario(promptText) {
    return parseInt(prompt(promptText));
}

function mostrarOpcionesPapel(opciones, tamanoHoja) {
    console.log("Opciones de hojas disponibles para el tamaño seleccionado:");
    opciones[tamanoHoja].forEach((opcion, index) => {
        console.log(`${index + 1}. ${opcion}`);
    });
}

function calcularCostoImpresion() {

    const color = obtenerEntradaUsuario("Seleccione 1 para Impresión en color o 2 para Impresión en blanco y negro:");
    const dobleCara = obtenerEntradaUsuario("Seleccione 1 para Impresión a una sola cara o 2 para Impresión a doble cara:");
    const tamanoHoja = obtenerEntradaUsuario("Seleccione 1 para A4, 2 para A3 o 3 para SA3:");

    const opcionesHoja = {
        1: ["70gr", "80gr", "90gr", "Ilustración 150", "Adhesivo"],
        2: ["80gr", "90gr", "Ilustración 120", "Ilustración 150", "Ilustración 300", "Adhesivo"],
        3: ["90gr", "Ilustración 120", "Ilustración 150", "Ilustración 300", "Adhesivo"]
    };
    
    mostrarOpcionesPapel(opcionesHoja, tamanoHoja);

    const tipoHoja = obtenerEntradaUsuario("Seleccione el número correspondiente al tipo de hoja (VER OPCIONES EN CONSOLA):");
    const cantidadHojas = obtenerEntradaUsuario("Ingrese la cantidad de hojas a imprimir:");
    const cortarCruz = obtenerEntradaUsuario("¿Desea cortar las hojas en forma de cruz? Ingrese 1 para sí o 2 para no:");
    const costosColor = { 1: 20, 2: 35, 3: 40 };
    const costosBlancoNegro = { 1: 10, 2: 15, 3: 20 };

    let costoBase = color === 1 ? costosColor[tamanoHoja] : costosBlancoNegro[tamanoHoja];

    if (dobleCara === 2) {
        costoBase *= 2;
    }

    const tipoHojaSeleccionado = opcionesHoja[tamanoHoja][tipoHoja - 1];

    const costosHoja = {
        1: [10, 20, 30, 150, 100],
        2: [40, 50, 150, 250, 350, 200],
        3: [60, 160, 350, 360, 230]
    };

    const costoHojaSeleccionada = costosHoja[tamanoHoja][tipoHoja - 1];
    let costoTotal = costoBase * cantidadHojas + costoHojaSeleccionada;

    if (cortarCruz === 1) {
        costoTotal += 500;
    }


const resumenCotizacion = `Resumen de la cotización:
Color de impresión: ${color === 1 ? 'Color' : 'Blanco y Negro'}
Tipo de impresión: ${dobleCara === 1 ? 'Una cara' : 'Doble cara'}
Tamaño de hoja: ${tamanoHoja === 1 ? 'A4' : tamanoHoja === 2 ? 'A3' : 'SA3'}
Tipo de hoja: ${tipoHojaSeleccionado}
Cantidad de hojas: ${cantidadHojas}
Cortar en forma de cruz: ${cortarCruz === 1 ? 'Sí' : 'No'}
Costo total: $${costoTotal}`;
    alert(resumenCotizacion);
    console.log(resumenCotizacion);

    // Mostrar costos detallados en la consola
    console.log("Costos detallados:");
    console.log(`Costo base de impresión: $${costoBase}`);
    console.log(`Costo de hoja seleccionada: $${costoHojaSeleccionada}`);
    if (cortarCruz === 1) {
        console.log("Costo por corte en forma de cruz: $500");
    }
}

// Calcular el costo de impresión
calcularCostoImpresion();
