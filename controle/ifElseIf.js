Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResuldado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota inválida");
  }

 // console.log("fim");
};

imprimirResuldado(10);
imprimirResuldado(8.9)
imprimirResuldado(6.55)
imprimirResuldado(2.3)
imprimirResuldado(-1)
imprimirResuldado(11)
