function getRandomPosition() {
  var screenHeight = window.innerHeight;
  var screenWidth = window.innerWidth;

  var randomX = Math.floor(Math.random() * (screenWidth - 100));
  var randomY = Math.floor(Math.random() * (screenHeight - 50));

  return { x: randomX, y: randomY };
}

function moverBoton() {
  if (window.innerWidth > 900) {
    var botonNo = document.getElementById("botonNo");
    var newPosition = getRandomPosition();

    botonNo.style.position = "absolute";
    botonNo.style.left = newPosition.x + "px";
    botonNo.style.top = newPosition.y + "px";
  }
}

document.getElementById("botonAcepto").addEventListener("click", function () {
  document.querySelector(".card-succes").style.display = "flex";
});

document.getElementById("botonNoMobile").addEventListener("click", function () {
  if (this.textContent === "NO") {
    this.textContent = "¡No quiero!";
    document.getElementById("botonAceptoMobile").textContent =
      "¿Segura que no?";
    document.getElementById("botonAceptoMobile").style.width = "300px";
    document.getElementById("botonAceptoMobile").style.height = "300px";
    document.getElementById("botonAceptoMobile").style.fontSize = "25px";
    document.querySelector(".botonAceptoMobileDiv").style.width = "300px";
    document.querySelector(".botonAceptoMobileDiv").style.height = "300px";
  } else if (this.textContent === "¡No quiero!") {
    this.textContent = "ME NIEGO";
    document.getElementById("botonAceptoMobile").textContent =
      "YO SE QUE QUIERES 😾";
    document.getElementById("botonAceptoMobile").style.width = "450px";
    document.getElementById("botonAceptoMobile").style.height = "450px";
    document.getElementById("botonAceptoMobile").style.fontSize = "30px";
    document.querySelector(".botonAceptoMobileDiv").style.width = "450px";
    document.querySelector(".botonAceptoMobileDiv").style.height = "450px";
  } else {
    document.getElementById("botonNoMobile").style.display = "none";
    document.getElementById("botonAceptoMobile").textContent =
      "ACEPTAAAAA!!! 😭😭";
    document.getElementById("botonAceptoMobile").style.width = "600px";
    document.getElementById("botonAceptoMobile").style.height = "600px";
    document.getElementById("botonAceptoMobile").style.fontSize = "40px";
    document.querySelector(".botonAceptoMobileDiv").style.width = "600px";
    document.querySelector(".botonAceptoMobileDiv").style.height = "600px";
  }
});

document
  .getElementById("botonAceptoMobile")
  .addEventListener("click", function () {
    document.querySelector(".card-succes").style.display = "flex";
    document.querySelector(".pantalla").style.display = "none";

  });
