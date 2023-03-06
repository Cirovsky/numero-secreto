const botaoTentativa = document.querySelector("#tentativa");
function adicionaBotaoNovoJogo(){
    const botao = document.createElement("button");
    botao.className = "botao";
    botao.textContent = "jogar novamente";
    botao.onclick = ()=> document.location.reload();
    return botao;
}

function verificaResposta(resposta){
    const numero = +resposta
    if(resposta == "game over"){
        console.log(document.querySelector('header'))
        document.body.classList.add('game-over');
        document.querySelector(".mensagem").remove();
        document.querySelector('header').remove();
        document.querySelector(".container").innerHTML = `
        <div id="chute" class="mensagem container__mensagem">
        <h2>GAME OVER</h2>
        </div>
        <div class="container__botao">
        </div>`;
        if(document.querySelector(".botao") == null){
            document.querySelector(".container__botao").appendChild(adicionaBotaoNovoJogo());
        }
    }else{
        if(Number.isNaN(numero)){
            console.log('valor inválido')
            mensagem.innerHTML = `
            <h2>você disse:</h2>
            <span class="resposta">${resposta}</span>
            <h3>${resposta} não é um número</h3>`
        }else{
            mensagem.innerHTML = `
            <h2>você disse:</h2>
            <span class="resposta">${numero}</span>`
            if(numero < menorValor || numero > maiorValor){
                mensagem.innerHTML += `
            <h3>${numero} não é valor válido. o número secreto está entre ${menorValor} e ${maiorValor}</h3>`
            }else{
                if (numero == numeroSecreto){
                    mensagem.innerHTML += `
                <h3 class="venceu">você acertou o número secreto</h3>`
                document.querySelector(".container__botao").appendChild(adicionaBotaoNovoJogo())
                }else if(numero < numeroSecreto){
                    mensagem.innerHTML += `
                <h3>o número secreto é <i class="fa-solid fa-up-long"></i></h3>`
                }else if(numero > numeroSecreto){
                    mensagem.innerHTML += `
                <h3>o número secreto é <i class="fa-solid fa-down-long"></i></h3>`
                }
            }
        }
    }
}