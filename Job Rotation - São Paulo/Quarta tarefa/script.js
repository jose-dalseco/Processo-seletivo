const total = 6783643 + 3667866 + 2922988 + 2716548 + 1984953;

// const vendasMensaisSp = 6_783_643;
// const vendasMensaisRj = 3_667_866;
// const vendasMensaisMg = 2_922_988;
// const vendasMensaisEs = 2_716_548;
// const vendasMensaisOu = 1_984_953;
const vendasMensais = {
  SP: 6783643,
  RJ: 3667866,
  MG: 2922988,
  ES: 2716548,
  OU: 1984953,
};

const percMensalSp = (vendasMensais.SP / total) * 100;
const percMensalRj = (vendasMensais.RJ / total) * 100;
const percMensalMg = (vendasMensais.MG / total) * 100;
const percMensalEs = (vendasMensais.ES / total) * 100;
const percMensalOu = (vendasMensais.OU / total) * 100;

const ctx = document.getElementsByClassName("line-chart");

let meuGrafico = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "São Pauolo",
      "Rio de Janeiro",
      "Minas Gerais",
      "Espirito Santo",
      "Outros",
      "Total",
    ],
    datasets: [
      {
        label: "Vendas Mensais",
        data: [
          Math.round(percMensalSp),
          Math.round(percMensalRj),
          Math.round(percMensalMg),
          Math.round(percMensalEs),
          Math.round(percMensalOu),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
