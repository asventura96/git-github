//O objetivo reduce é reduzir um vetor a um valor ou objeto. Por exemplo, somar todos os elementos de um vetor é reduzir ele a um valor. O reduce é um pouco mais complexos que o map e o filter por que deve ser passado um parâmetro a mais.
const vetor = [1,2,3,4,5,6,7,8,9,10];

const soma = vetor.reduce((estado, item)=>estado+item);

console.log(soma);