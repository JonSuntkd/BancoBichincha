const fecha = new Date();
const anioActual = fecha.getFullYear();

const fs = require("fs");
const path =
  "C:\\Users\\familia\\Videos\\BancoCurso\\React\\Clase NODE\\TareaCopiaArchivos\\carpetas\\";

const mesesAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log("Programa iniciado");
console.log(anioActual);

function diasEnUnMes(mes, año) {
  return new Date(año, mes, 0).getDate();
}

// fs.appendFile("document.txt", "texto que contiene", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Directorio creado");
// });

for (let index = 2019; index < anioActual; index++) {
  fs.mkdir(`${path}${index}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Directorio creado anio: " + index);
      for (let meses = 0; meses < mesesAnio.length; meses++) {
        fs.mkdir(`${path}${index}\\${mesesAnio[meses]}`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Directorio creado meses " + mesesAnio[meses]);

            var dias = diasEnUnMes(meses + 1, index);
            fs.appendFile(
              `${path}${index}\\${mesesAnio[meses]}\\${dias}.txt`,
              `El mes tiene : ${dias} dias`,
              (err) => {
                if (err) {
                  throw err;
                }
                console.log("Directorio creado del mes y anio");
              }
            );
          }
        });
      }
    }
  });
  console.log(index);
}

// function crearDiasPorMes(anio, mes) {
//   var dias = diasEnUnMes(mes, anio);
//   fs.appendFile(
//     `${path}${anio}\\Enero\\${dias}.txt`,
//     `El mes tiene : ${dias} dias`,
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Directorio creado del mes y anio");
//     }
//   );
// }
// console.log(crearDiasPorMes(2010, 1));
