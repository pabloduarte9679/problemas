function asignarColores(a) {
  let [colorPrimario, colorSecundario, ...paletaAdicional] = a;
  return { colorPrimario, colorSecundario, paletaAdicional };
}

const colores = ['45345', '3454354', '54354', '45345'];
console.log(asignarColores(colores));
