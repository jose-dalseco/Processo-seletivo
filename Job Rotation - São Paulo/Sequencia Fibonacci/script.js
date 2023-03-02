const show = document.querySelector("#info");
const show1 = document.querySelector("#sequencia");
const show2 = document.querySelector("#resposta");

function promptNum(mensagem, tenteNovamente) {
  let msg = mensagem;

  while (true) {
    var ret = parseInt(prompt(msg));
    if (!isNaN(ret)) return ret;
    msg = tenteNovamente;
  }
}

const numPessoa = promptNum(
  "Por favor, digite um número",
  "Por favor tente novamente. "
);

show.innerHTML = "O número escolhi foi " + numPessoa;

let i;
let fib = [0, 1];

for (i = 2; i <= 22; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];

  show1.innerHTML = "Segue a sequência de Fibonacci : " + fib;
}

if (fib.indexOf(numPessoa) == -1) {
  show2.innerHTML =
    "Infelizmente sue número nao se encontra dentro da sequencia";
} else {
  show2.innerHTML = "Que demais, o número escolhido esta dentro da sequencia";
}
