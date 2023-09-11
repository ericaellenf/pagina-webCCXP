const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "23 nov 2023"
function countDown() {
    const dataAtual = new Date(lancamento);
    const hoje = new Date()

    const segTotal = (dataAtual - hoje) /1000;
    
    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segTotal / 60 ) % 60
    const finalSegundos = Math.floor((segTotal))%60

    dia.innerHTML = finalDias
    hora.innerHTML = finalHoras
    minuto.innerHTML = finalMinutos
    segundo.innerHTML = finalSegundos

}


countDown();
setInterval(countDown, 1000);

function zoomIn() {
    document.getElementById("imagens").style.transform = "scale(1.5)";
  }
  
  function zoomOut() {
    document.getElementById("imagens").style.transform = "scale(1)";
  }

