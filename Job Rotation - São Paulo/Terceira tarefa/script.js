/**
 *
 *  @returns {array} Retorna uma array de objetos com os dados de faturamento do mes
 */
const result = document.querySelector(".resultado");
const result1 = document.querySelector(".id1");
const result2 = document.querySelector(".id2");

async function pegaDadosDeFaturamentoDoMes() {
  const response = await fetch("dados.json");
  const dados = await response.json();
  return dados;
}

(async () => {
  const dadosDeFaturamentoDoMes = await pegaDadosDeFaturamentoDoMes();
  const dadosComFaturamentoDoMes = dadosDeFaturamentoDoMes.filter(
    ({ valor }) => valor !== 0
  );

  let menorFaturamento = dadosComFaturamentoDoMes[0].valor;
  let maiorFaturamento = dadosComFaturamentoDoMes[0].valor;

  for (let i = 1; i < dadosComFaturamentoDoMes.length; i++) {
    const { valor } = dadosComFaturamentoDoMes[i];
    if (menorFaturamento > valor) {
      menorFaturamento = valor;
    }
    if (maiorFaturamento < valor) {
      maiorFaturamento = valor;
    }
  }

  console.log("O valor minimo é: ", menorFaturamento);
  console.log("O valor maximo é: ", maiorFaturamento);

  const mediaMensal =
    dadosComFaturamentoDoMes.reduce((acc, { valor }) => acc + valor, 0) /
    dadosComFaturamentoDoMes.length;
  const diasAcimaDaMedia = dadosComFaturamentoDoMes.filter(
    ({ valor }) => valor > mediaMensal
  );
  console.log(diasAcimaDaMedia.length);
  result.innerHTML =
    "O menor valor de faturamento do mes é " + menorFaturamento;
  result1.innerHTML =
    "O maior valor de faturamento do mes é " + maiorFaturamento;
  result2.innerHTML =
    " Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. " +
    diasAcimaDaMedia.length;
})();
