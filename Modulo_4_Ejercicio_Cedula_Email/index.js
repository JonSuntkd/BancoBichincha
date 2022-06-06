window.addEventListener("DOMContentLoaded", function (event) {
  var form_register = document.querySelector("#form-register");
  form_register.addEventListener("submit", function (event) {
    var input_name = document.querySelector("#input_name");
    var canSubmit = true;
    if (input_name.value == "") {
      document.querySelector("#name_container .input-error").innerHTML =
        "Error: Nombre requerido";
      canSubmit = false;
    } else {
      if (input_name.value.length < 3) {
        document.querySelector("#name_container .input-error").innerHTML =
          "Error: Nombre muy corto";
        canSubmit = false;
      } else {
        if (condition) {
        } else {
          document.querySelector("#name_container .input-error").innerHTML = "";
        }
      }
    }

    var input_last_name = document.querySelector("#input_last_name");
    if (input_last_name.value == "") {
      document.querySelector("#last_name_container .input-error").innerHTML =
        "Error: Apellido requerido";
      canSubmit = false;
    } else {
      if (input_last_name.value.length < 3) {
      } else {
        document.querySelector("#last_name_container .input-error").innerHTML =
          "";
      }
    }

    var input_cedula = document.querySelector("#input_cedula");
    if (input_cedula.value == "") {
      document.querySelector("#cedula_container .input-error").innerHTML =
        "Error: Cedula requerido";
      canSubmit = false;
    } else {
      if (
        input_cedula.value.length < 10 ||
        input_cedula.value.length > 10 ||
        input_cedula.value.length > 0
      ) {
        document.querySelector("#cedula_container .input-error").innerHTML =
          "Error: Cedula muy corta";
        canSubmit = false;
      } else {
        document.querySelector("#cedula_container .input-error").innerHTML = "";
      }
    }

    var input_email = document.querySelector("#input_email");
    if (input_email.value == "") {
      document.querySelector("#email_container .input-error").innerHTML =
        "Error:  Correo requerido";
      canSubmit = false;
      console.log(input_email.value);
    } else {
      var indexOne = input_email.value.indexOf("@");
      var indexTwo = input_email.value.indexOf(".");
      if (indexOne < 0 || indexTwo < 0 || indexOne > indexTwo) {
        document.querySelector("#email_container .input-error").innerHTML =
          "Error: Correo invalido";
        canSubmit = false;
      } else {
        document.querySelector("#email_container .input-error").innerHTML = "";
      }
    }

    if (!canSubmit) {
      event.preventDefault();
    }
  });
});
