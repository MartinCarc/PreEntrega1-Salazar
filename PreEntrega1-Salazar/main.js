//Variables

const vela = 2500;
const jabon = 1000;
const sahumerio = 500;
let sumartotal = 0;
let sumaVela = 0;
let sumaJabon = 0;
let sumaSahumerio = 0;
let medioDePago = 0;
let cuotas = 0;
let total = 0;
let compra = 0;
let precio = 0;

//Funciones

function mostrarResultados() {
  alert(`Tu carrito quedó conformado de la siguiente manera:
  ${sumaVela} Vela(s)
  ${sumaJabon} Jabon(es)
  ${sumaSahumerio} Sahumerio(s)
  Total: $ ${sumartotal}.`);

  while (sumartotal != 0) {
    medioDePago = prompt(`
      Seleccione el medio de pago:
      "1" - Transferencia 
      "2" - 3 cuotas sin interés
      "3" - 6 cuotas con interés (20%)
      "4" - 12 cuotas con interés (42%)`);

    if (
      medioDePago == 1 ||
      medioDePago == 2 ||
      medioDePago == 3 ||
      medioDePago == 4
    ) {
      switch (medioDePago) {
        case "1":
          if (sumartotal >= 6000) {
            sumartotal = (sumartotal * 0.9).toFixed(2);
            alert(
              `Tenés un 10% de descuento! Vas a abonar $ ${sumartotal}. Gracias por comprar en ROMA "Arte Natural". Te esperamos de nuevo!`
            );
          } else {
            alert(
              `Tu total es de $ ${sumartotal}. Gracias por comprar en ROMA "Arte Natural". Te esperamos de nuevo!`
            );
          }

          break;
        case "2":
          sumartotal = (sumartotal / 3).toFixed(2);
          alert(
            `Vas a abonar 3 cuotas de $ ${sumartotal}. Gracias por comprar en ROMA "Arte Natural". Te esperamos de nuevo!`
          );
          break;
        case "3":
          total = (sumartotal * 1.2).toFixed(2);
          cuotas = (total / 6).toFixed(2);
          alert(
            `Vas a abonar 6 cuotas de $ ${cuotas}, por un total de $ ${total}. Gracias por comprar en ROMA "Arte Natural". Te esperamos de nuevo!`
          );
          break;
        case "4":
          total = (sumartotal * 1.42).toFixed(2);
          cuotas = (total / 12).toFixed(2);
          alert(
            `Vas a abonar 12 cuotas de $ ${cuotas}, por un total de $ ${total}. Gracias por comprar en ROMA "Arte Natural". Te esperamos de nuevo!`
          );
          break;
      }
      break;
    } else {
      alert("Para continuar, tenés que seleccionar un medio de pago");
      continue;
    }
  }
}

// Solicito que ingrese los artículos que desea comprar

while (true) {
  compra = prompt(`¡Bienvenido/a a ROMA Arte Natural! ¿Qué se te ofrece?
  
"1" - Vela(s) 
"2" - Jabón(es) 
"3" - Sahumerio(s)
"Fin" - Para finalizar tu compra`);

  if (compra == "fin" || compra == "FIN") {
    alert(`Tu total es: $ ${sumartotal}`);
    break;
  } else if (compra == 1) {
    precio = 2500;
    sumartotal += precio;
    sumaVela += 1;
  } else if (compra == 2) {
    precio = 1000;
    sumartotal += precio;
    sumaJabon += 1;
  } else if (compra == 3) {
    precio = 500;
    sumartotal += precio;
    sumaSahumerio += 1;
  } else {
    alert("Opción incorrecta, por favor intente de nuevo");
    continue;
  }
  alert(`Tu total es: $ ${sumartotal}.`);
}

mostrarResultados();
