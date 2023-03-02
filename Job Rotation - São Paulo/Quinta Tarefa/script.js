const pegaString = prompt();
console.log(pegaString);
const resultado = document.querySelector(".resultad");

const transformaString = pegaString.split("");

for (let i = 0; i < transformaString.length - 1; i += 2) {
  let temp = transformaString[i];
  transformaString[i] = transformaString[i + 1];
  transformaString[i + 1] = temp;
  console.log(transformaString);
}

resultado.innerHTML =
  "Sua palavr inicial foi: " +
  pegaString +
  " e sua nova palvra é: " +
  transformaString.join("");
