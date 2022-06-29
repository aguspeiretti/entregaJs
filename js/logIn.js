const user = JSON.parse(localStorage.getItem("usuarios"));
console.log(user);

const userLogin = document.getElementById("userLogin").value;
const passLogin = document.getElementById("passLogin").value;

const validacion = (e) => {
  e.preventDefault();
  if (userLogin == user[0].nombreUsuario && passLogin == user[0].clave) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Bienvenido",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.href = "./index.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "error en el registro de usuario o password intenta nuevamente",
      footer: '<a href="">Que puede estar pasando?</a>',
    });
  }
};
const botonLogin = document.querySelector("#login-btn");
botonLogin.addEventListener("click", validacion);

console.log(userLogin);