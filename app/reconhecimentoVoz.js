window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

const mensagem = document.querySelector("#chute");

const tentativa = document.querySelector(".tentativa");
tentativa.onclick = () => recognition.start();

let resposta;
recognition.addEventListener("result", (e) => {
    resposta = onSpeak(e);
    exibeResposta(resposta);
});

function onSpeak(e) {
    return e.results[0][0].transcript;
}

function exibeResposta(resposta) {
    verificaResposta(resposta)
}
