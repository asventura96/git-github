// Definindo a função
function geradorNumerico(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

// Chamando a função
geradorNumerico();


// Usando function
function soma1(a,b) { return a+b; }
// Atribuindo uma função anônima em constantes
const soma2 = function(a,b){ return a+b; };
// Atribuindo uma função de "flecha" em constantes
const soma3 = (a,b) => a+b;

const hello1 = () => "Hello World!";
const hello2 = (name) => "Hello " + name;
const hello3 = (name) => {return "Hello " + name;};