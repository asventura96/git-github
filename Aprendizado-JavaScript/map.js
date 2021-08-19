//A função Map é o primeiro caso de aplicação de função de alta ordem que vamos ver. Essa função é usada para transformar vetores. Passamos uma função para o Map, e essa função é aplicada a cada item do vetor.
const vetor = ["10", "20", "30", "40"];
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor.map(stringToInt);
console.log(vetor2);

const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);

