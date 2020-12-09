/* 1. foreach(usei reduce)ok
 2. map ok
 3. find/json
 4.every
 5. map
 06. filter
 07. find
 08. reduce
 09. arrow function
 10. promisse
 11. arrow function
 12. template string ok
 13. filter
 14. map/template string
 15. some
 16. destructuring
 17. rest operator*/


// Exercício 1: Considerando um objeto funcionário com as propriedades nome, idade, cargo e salário,
//  crie uma função que receba um objeto funcionário e retorne um novo objeto “clonando”
//  o funcionário recebido, alterando o nome e a idade.

const funcionario = {nome:'joao', idade:'18', cargo:'programador', salario:'$500'};
function novo(funcionario){
    const novoFuncionario = {...funcionario,nome:'mario',idade:'12'};
    console.log(novoFuncionario);
}
novo(funcionario);

//1 Crie uma função que receba como parâmetro uma lista de notas e calcule a média dessas notas imprimindo o resultado.

function calcularNotas(...listaNotas){
    let resultado = `A soma das notas é: ${listaNotas.reduce(somar, 0)} \n
    A Média das notas é: ${listaNotas.reduce(somar, 0)/listaNotas.length}`
    function somar(t, n) {
        return t + n
    }
    console.log(resultado);
}
calcularNotas(2,5,6)

//2 Crie uma função que receba um uma lista de números e imprima o quadrado de cada número.

function quadradoLista(...listaNumeros){
var numeros = listaNumeros;
var quadrados = numeros.map(function(x){
    return x**2;
})
console.log(quadrados);
}

quadradoLista(2, 4, 5, 8);

// 12 Crie uma função que receba 3 parâmetros (bairro, cidade, estado) e imprima os dados em um formato de endereço,
// utilizando Template String.

//const endereço = {"bairro":"centro","cidade":"Biguaçu","estado":"SC"};

function enderecoTemplate(bairro,cidade,estado){
    endereco = `esse é o endereço que você colocou: bairro: ${bairro}, cidade: ${cidade}, estado:${estado}`
    console.log(endereco);
}
enderecoTemplate('centro','biguaçu','SC');
