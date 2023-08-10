const dia = window.document.getElementById('dia') 
const hora = window.document.getElementById('hora') 
const minuto = window.document.getElementById('minuto') 
const segundo = window.document.getElementById('segundo') 

const Lancamento = '13 Dec. 2023'

function countdown(){
const dataLanc = new Date (Lancamento)
const hoje = new Date

const segTotal = (dataLanc - hoje) / 1000;

const finalDias = Math.floor (segTotal / 60 / 60 / 24 );
const finalHoras = Math.floor (segTotal / 60 / 60) %24; 
const finalMinutos = Math.floor (segTotal / 60) %60; 
const finalSegundos = Math.floor (segTotal)%60; 

dia.innerHTML = formatoTempo(finalDias, 'D');
hora.innerHTML = formatoTempo(finalHoras, 'H');
minuto.innerHTML = formatoTempo(finalMinutos, 'M');
segundo.innerHTML = formatoTempo(finalSegundos, 'S');
}

function formatoTempo(tempo, tipo) {
    return tempo < 10 ? `0${tempo}${tipo}` : `${tempo}${tipo}`;
  }


//TENTATIVA  de concatenar 0 e prefixo(trabalhoso)
/*function formatoTempoD(tempoD){
    return tempoD < 10? `0${tempoD}D` : `${tempoD}D`;
}
function formatoTempoH(tempoH){
    return tempoH < 10? `0${tempoH}H` : `${tempoH}H`;
}
function formatoTempoM(tempoM){
    return tempoM < 10? `0${tempoM}M` : `${tempoM}M`;
}
function formatoTempoS(tempoS){
    return tempoS < 10? `0${tempoS}S` : `${tempoS}S`;
}*/

countdown()
setInterval(countdown, 1000)

document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('arlVideo');

  // Iniciar o vídeo
  video.play();

  // Adiciona um evento para reiniciar o vídeo quando terminar
  video.addEventListener('ended', function() {
      video.currentTime = 0;
      video.play();
  });
  });