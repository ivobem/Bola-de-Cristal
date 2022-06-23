const elementoResposta = document.querySelector("#resposta")
const inputePergunta = document.querySelector("#inputPergunta")
const respostas = [
  "É possível.",
  "Digamos que sim.",
  "Definitivamente, não!",
  "Mas que pergunta sem sentido. Recuso-me a responder!",
  "Que ridículo... não direi nada sobre isso!",
  "Concentre-se e pergunte novamente.",
  "Não direi nada sobre isso. Tente amanhã.",
  "Minhas fontes acabam de dizer que NÃO!",
  "Esqueça isso de uma vez por todas!",
  "A resposta está no feed da sua rede social.",
  "Acho que você não deveria perguntar sobre isso.",
  "Que pergunta é essa? Não entendi...",
  "Está de brincadeira comigo? Refaça a pergunta!",
  "Se você não sabe, imagine eu.",
  "Sim, definitivamente SIM!",
  "Depende... de quê? Não sei!",
]

function fazerPergunta() {

if(inputePergunta.value == "") {
  alert("Digite sua pergunta")
  return
}

const pergunta = "<div>" + inputePergunta.value + "</div>"

const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

setTimeout(function() {
  elementoResposta.style.opacity = 0;
}, 3000)

}




