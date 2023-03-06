
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

const tentativa = document.querySelector(".tentativa");
tentativa.onclick = () => recognition.start();

const elResposta = document.querySelector(".resposta");
let resposta;
recognition.addEventListener("result", (e) => onSpeak(e));

function onSpeak(e){
    console.log(e.results)
    console.log(e.results[0][0].transcript);
    elResposta.textContent = e.results[0][0].transcript;
    resposta = e.results[0][0].transcript;
    return e.results[0][0].transcript;
}