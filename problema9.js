function asignarColores(a) {
  let [colorPrimario, colorSecundario, ...paletaAdicional] = a;
  return { colorPrimario, colorSecundario, paletaAdicional };
}

const colores = ['#453453', '#345435', '#543542', '#453453'];
console.log(asignarColores(colores));
