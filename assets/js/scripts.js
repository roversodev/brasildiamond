AOS.init({
    easing: 'ease-out',
    duration: 1000,
    offset: 100
});
document.getElementById('ano').textContent = new Date().getFullYear();

function mensagem(event) {
  alert("Erro: Conteúdo protegido pela nossa política de privacidade.");
  event.preventDefault();
}

function bloquearCopia(event) {
  var tecla = event.keyCode || event.which;
  
  if (sessionStorage.getItem("ultimaTecla") === "17" && tecla === 85) {
      event.preventDefault();
      window.location = "https://revestimentodiamond.com.br/";
  }
  
  sessionStorage.setItem("ultimaTecla", tecla);
}

document.addEventListener("keypress", bloquearCopia);
document.addEventListener("keydown", bloquearCopia);
document.addEventListener("contextmenu", mensagem);

if (document.getElementById("state1")) {
  const countUp = new CountUp("state1", document.getElementById("state1").getAttribute("countTo"));
  if (!countUp.error) {
      countUp.start();
  } else {
      console.error(countUp.error);
  }
}
if (document.getElementById("state2")) {
  const countUp1 = new CountUp("state2", document.getElementById("state2").getAttribute("countTo"));
  if (!countUp1.error) {
      countUp1.start();
  } else {
      console.error(countUp1.error);
  }
}
if (document.getElementById("state3")) {
  const countUp2 = new CountUp("state3", document.getElementById("state3").getAttribute("countTo"));
  if (!countUp2.error) {
      countUp2.start();
  } else {
      console.error(countUp2.error);
  };
}
