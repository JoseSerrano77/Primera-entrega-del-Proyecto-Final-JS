/////// Para mi proyecto final quiero realizar un e-comerce de venta de cerveza, por ello comence a trabajar con un desarrollo diferente
////// al que habia presentado en la entrega de Simulador interactivo.///////////////////////////////

//////// CLASE CONSTRUCTORA/////////////////////////////
class Cerveza {
  constructor(id, marca, tipo, formato, volumen, precio) {
    (this.id = id),
      (this.marca = marca),
      (this.tipo = tipo),
      (this.formato = formato),
      (this.volumen = volumen),
      (this.precio = precio);
  }

  infoCerveza() {
    console.log(
      `Cervesa: ${this.id}, Marca: ${this.marca} ,Tipo: ${this.tipo} , Formato:${this.formato} ,Volumen:${this.volumen} , Precio: ${this.precio}`
    ); //////METODO///////////////////////////
  }
}

//////////////////OBJETOS////////////////////////////

const cervesa1 = new Cerveza("H1", "Heineken", "Lager", "porron", "330ml", 220);

const cervesa2 = new Cerveza("H2", "Heineken", "Lager", "lata", "473ml", 260);

const cervesa3 = new Cerveza("H3", "Heineken", "Lager", "lata", "710ml", 420);

const cervesa4 = new Cerveza("G1", "Grolsch", "Ipa", "lata", "473ml", 280); ///lager

const cervesa5 = new Cerveza("G2", "Grolsch", "Lager", "porron", "450", 1540);

const cervesa6 = new Cerveza( "I1", "Imperial Golden", "lager","lata", "473",220);

const cervesa7 = new Cerveza("I2", "Imperial", "Lager", "lata", "473", 220);

const cervesa8 = new Cerveza("I3", "Imperial", "Ipa", "lata", "473", 230);

const cervesa9 = new Cerveza("I4", "Imperial ", "Apa", "lata", "473", 220);

const cervesa10 = new Cerveza("I5","Imperial Lager","lager", "lata","473",220);

const cervesa11 = new Cerveza("I6", "Imperial", "Roja", "lata", "473", 220);

const cervesa12 = new Cerveza("I7","Imperial","Cream Stout","lata","473", 250);

/////INICIALIZACION ARRAY DEPOSITO////////////////////////
const deposito = [];
deposito.push(cervesa1,cervesa2,cervesa3,cervesa4,cervesa5,cervesa6,cervesa7,cervesa8,cervesa9,cervesa10,cervesa11,cervesa12);
console.log(deposito); //OK
////////////////////////////////////////////////////////////////////////////////////////////////////

let carrito = [];

///////////////////////////////////////////////////////////////////////////////////////////////////
function catalogoCervezas(array) {
  alert("Puede visualizar nuestros productos en la consola:");
  console.log("Disfrute de nuestra variedad de Cervezas:");
  array.forEach((cerveza) => {
    cerveza.infoCerveza();
  });
}

///////////////////////////////////////////////////////////////////////
function filtrarPorTipo() {
  let buscarTipoC = prompt("Ingrese la tipo de cerveza que busca");
  let targetC = deposito.filter(
    (cervesa) => cervesa.tipo.toLowerCase() == buscarTipoC.toLowerCase()
  );
  if (targetC == 0) {
    alert("No disponemos del tipo de cerveza solicitada");
  } 
  else {
    alert("Puede visualizar  el resultado de su busqueda en la consola.");
    console.log(`El resultado es el siguiente:`);
    console.log(targetC);

    for (let tipoEncontrado of targetC) {
      tipoEncontrado.infoCerveza();
    }
  }
}



function filtrarPorMarca() {
  let buscarCerveza = prompt("Ingrese la marca de cerveza que desea buscar");
  let busqueda = deposito.filter((cervesa) => cervesa.marca.toLowerCase() == buscarCerveza.toLowerCase());

  if (busqueda.length == 0) {
    alert("No disponemos de la marca ingresada");
  } else {
    alert("Puede visualizar  el resultado de su busqueda en la consola.");

    console.log("Las coincidencias con este autor son:");
    console.log(busqueda);
    for (let marcaEncontrada of busqueda) {
      marcaEncontrada.infoCerveza();
    }
  }
}




//////////////////////////////////////////////////////////////////////////
function comprar() {
  alert("A continuacion puede elegir el codigo del producto deseado");
  let todosLosProductos = deposito.map((cerveza) =>cerveza.id +":  " + cerveza.marca + "-" + cerveza.tipo +"-" + cerveza.volumen +"-" +cerveza.precio +"$");

  alert("El Baron de la Cerveza \n\n" + todosLosProductos.join(" \n "));
  let idCompra = prompt("Ingrese codigo del producto que desea:");
  console.log(idCompra);

  let idBuscado = deposito.find((codigo) => codigo.id.toLowerCase() == idCompra.toLowerCase());
  console.log(idBuscado);
  return idBuscado;
}




function pedido() {
pedir= true
/////////////INICIO DO WHILE/////////////
  do {
    let opcionComprar = parseInt(
      prompt(`¿Desea compra algun producto ?
  1. Si
  2. No`)
    );

    if (opcionComprar == 1) {
      let idEncontrado = comprar();
      let continuarC = true;

      do {
        //
        if (idEncontrado == undefined) {
          alert("El Producto ingresado no existe");
          console.log(idEncontrado);
          continuarC = false
        } else {

          
          ///carrito.push(idEncontrado);
          
          //alert("el producto fue agregado asu carrito:");
          //console.log(carrito);

          let continuarComprando = prompt("Desea continuar comprando 1- si  2-no???");

          if (continuarComprando == 1) {
            comprar();
          } else if (continuarComprando == 2) {
            continuarC = false;
            pedir = false;

          } else {
            continuarC = false;
            pedir = true;
          }
        }
      } while (continuarC);
    } //FIN IF OPCION COMPRAR///////////////////////////////////
    else if (opcionComprar == 2) {
      pedir = false;

    } else if (opcionComprar != 1 || 2) {
      alert(`Valor invalido`);
    }
  } while (pedir);
}
/////////////FIN DO WHILE/////////////



//Function que consulte al usuario opción deseada
function opcionIngreso() {
  let opciones = parseInt(
    prompt(`EL BARON DE LA CERVEZA\n Ingrese un opcion para continuar:\n
                        1 - Ver detalle de nuestras cervezas.
                        2 - Buscar por marca.
                        3 - Buscar por Tipo.
                        4 - realizar compra
                        0 - Para salir
                        `)
  );
  menuIngreso(opciones);
}

//// case para mostrar las diferentes opciones/////
function menuIngreso(opcionElegida) {
  switch (opcionElegida) {
    case 0:
      finalizar = true;
      alert(`El Baron de la cerveza te agradece tu visita!!!`);
      break;
    case 1:
      catalogoCervezas(deposito);
      break;
    case 2:
      filtrarPorMarca();

      break;
    case 3:
      filtrarPorTipo();
      break;
    case 4:
      pedido();
      break;
    default:
      alert(`La opcion ingresada no es coorrecta`);
  }
}

let finalizar;
// Ciclo while donde se invoca preguntar opcion, si responde case 0 sale (salir == true)
while (finalizar != true) {
  opcionIngreso();
}
