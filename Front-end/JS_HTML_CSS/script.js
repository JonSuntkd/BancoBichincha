// window.addEventListener("DOMContentLoaded", function load(e) {
//   var input = document.getElementById("input");
//   input.addEventListener("change", function (event) {
//     document.getElementById("input-log").innerHTML = event.target.value;
//     console.log(event.target.value);
//   });
// });

// window.addEventListener("DOMContentLoaded", function load(e) {
//   var person = new Person("John");
//   person.printName();
// });

// class Person {
//   constructor(name) {
//     this.name = name;
//     // this.age = age;
//   }
//   printName() {
//     console.log("Mi nombre es ", this.name);
//   }
// }
function myFunction() {
  document.getElementById("demo").style.color = "red";
  var input = document.getElementById("input").value;
  console.log(input);
  alert("Hola! Tu texto ingresado es! " + input);
  setInterval("horaRegistro()", 5000);
}

function horaRegistro() {
  var input2 = document.getElementById("input").value;
  alert("Su variable es: " + input2);
  document.getElementById("demo").style.color = "yellow";
}
