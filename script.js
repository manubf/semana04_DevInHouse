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
//usar o sort para ordenar

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


/*Objeto Funcionário {
	nome: 
	idade:
cargo:
	salario: 
}
     
Crie uma função que receba um objeto funcionário com as propriedades descritas acima e separe em variáveis o nome,
 o cargo e o salário, imprimindo no console os valores extraídos.
ArrowFunction: Converta para Arrow Function as funções criadas nos exercícios anteriores e compare os códigos.
Template String: Crie uma função que receba um objeto funcionário, (o mesmo do exercício sobre Destructuring)
 e imprima os dados com a seguinte formatação:
<nome> atua no cargo de <cargo> e recebe um salário de <salario>

	Objeto Funcionário {
	nome: 
	idade:
cargo:
	salario: 
}*/

const funcionario2 = {
    nome: 'joao',
    idade: '19',
    cargo: 'programador',
    salario: '$2000,00'
}


const imprimeFuncionario = funcionario => {
    const {nome, cargo, salario} = funcionario;
    
    console.log(`${nome} atua no cargo de ${cargo} e recebe ${salario}`);

}    

imprimeFuncionario(funcionario2);

/*Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, crie uma função que
 receba uma lista de pessoas e descubra se alguma das pessoas da lista é maior de idade (18 anos) retornando o resultado.*/

const Pessoas = [
    {nome:'Maria', idade:56, telefone:'35566222', profissão:''},
    {nome:'Pedro', idade:34, telefone:'35566223', profissao:'programador'},
    {nome:'Lucas', idade:42, telefone:'35566522', profissao:'paisagista'},
    {nome:'Marcia', idade:18, telefone:'35566222', profissao:'programador'},
    {nome:'Fernanda', idade:45, telefone:'35568622', profissao:'programador'},
    {nome:'Julieta', idade:25, telefone:'35566212', profissao:'estudante'},
    {nome:'Joana', idade:12, telefone:'35565622', profissao:'estudante'},
    {nome:'Jose', idade:15, telefone:'35566272', profissao:'estudante'}
]



function pessoaMaioridade(pessoa){
    const maiores = pessoa.find(idd => idd.idade >= 18).nome;
    console.log(maiores);
}
pessoaMaioridade(Pessoas);

/*Considerando a mesma entidade Pessoa do exercício 3crie uma função que receba uma lista de pessoas 
e descubra se todas as pessoas da lista possuem a profissão “Programador” retornando o resultado.*/

const programadoresTodos = Pessoas.every(profissao => Pessoas.profissao == 'programador');

console.log(programadoresTodos);


/* 5
Novamente considerando a entidade Pessoa do exercício 3: 
 crie uma função que receba uma lista de pessoas e retorne uma lista com os nomes das pessoas.*/

const nomesRetorno = Pessoas.map(function (item) {
    return item.nome;
});
console.log(nomesRetorno);

/*Novamente considerando a entidade Pessoa do exercício 3:  crie uma função que
 receba uma lista de pessoas e retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos.*/

const menores = Pessoas.filter(function (item) {
    if(item.idade < 18){
        return true;
    }
    return false;
});
console.log(menores);

/*Novamente considerando a entidade Pessoa do exercício 3: 
crie uma função que receba uma lista de pessoas e retorne a primeira pessoa com idade maior que 18 anos.*/

/*9Declare uma arrowFunction que deverá possuir dois parâmetros (nome, idade). 
A nossa função deve mostrar no console a seguinte frase: “Olá, eu sou <nome>, e tenho <idade> anos”. */

const pessoaApresenta = (nome, idade) => {    
    console.log(`Olá, eu sou o ${nome} e tenho ${idade} anos.`);
}  
pessoaApresenta('maria', '15');

/*13 Considerando uma entidade Cidade, contendo os seguintes atributos nome e estado, 
crie uma função que receba uma lista de cidades e retorne a lista de cidades em que o estado seja “SC”.*/

const cidades = [
    {cidade:'Florianópolis', estado:'SC'},
    {cidade:'Biguaçu', estado:'SC'},
    {cidade:'Cachoeira do Sul', estado:'RS'},
    {cidade:'Cascavel', estado:'PR'},
    {cidade:'Porto Alegre', estado:'RS'},
]

function filtraCidades(cidade){
    return cidade.estado === 'SC' 
}
      
function retornaLista() {
    return cidades.filter(filtraCidades);
}
// const retornaLista = cidades.filter(function (cidade) {
//     return cidade.estado === 'SC';
// });

console.log(retornaLista());

/*14 Considerando a entidade Cidade do exercício 13:  crie uma função que recebe uma
 lista de cidades e retorna uma lista com os nomes das cidades concatenados com o seu estado. */

const cidadesRetorno = cidades.map(function (item) {
    return `${item.cidade} - ${item.estado}`;
});
console.log(cidadesRetorno);

/* 16 Novamente considerando a entidade Cidade do exercício 13: crie uma função que receba uma lista
 de cidades e verifique se alguma das cidades é do estado “RS”, retornando o resultado. */

const cidadeRs = cidades.some(elem => elem.estado === 'RS')
console.log(cidadeRs);

/* 16 Considerando a entidade Cidade do exercício 13: crie uma função que 
receba um objeto cidade e atribua nome e o estado a duas variáveis e imprima elas no console. */
function umaCidade(cidades){
    const [cidadela] = cidades;
    const {cidade, estado} = cidadela;
    return console.log(`essa é a ${cidade} em ${estado}`);
}
umaCidade(cidades);

/*Crie uma função que receba uma lista de valores numéricos,
 e utilizando a função reduce imprima a multiplicação dos valores da lista.*/
const listaNumeros = [1,6,5,7];

const listaDobrada = lista => lista.reduce((total, proximo) => total * proximo, 1);
console.log(listaDobrada(listaNumeros))

/* 17 Crie uma função que apresente o ranking dos livros mais vendidos. 
Você precisa diferenciar a posição apenas dos 3 primeiros do ranking, os demais serão apenas listados.*/

const livrosOrdenados = ["A casa das mulheres","As longas tranças do rei careca","A casa dos espiritos","A vida é bela", "O batizado da vaca", "vida longa ao rei morto"]

const RankingLivros =  ([primeiro, segundo, terceiro, ...demaisLivros]) =>{
    console.log (`Primeiro colocado: ${primeiro}, segundo colocado:${segundo}, terceiro colocado: ${terceiro}, seguidos por ${demaisLivros}`)
}
RankingLivros(livrosOrdenados);
/* 11 Crie uma arrowFunction que receba um objeto contendo altura e largura de um retângulo e retorne a área do retângulo. */

const areaRetangulo = (a,l) => a * l;
console.log(`A área total do retangulo é : ${areaRetangulo(2,3)}`);

/*Crie uma função que retornará uma promise, ela receberá dois valores numéricos como parâmetro, 
a função deve somar os dois valores e somente resolver a promise caso o resultado seja par retornando o valor da soma e 
rejeitando a promise caso ímpar, retornando uma mensagem explicativa */
// function somaVerificaPar(a,b){
//     const soma = a + b;
//     new Promise((resolve,reject)=>{
//         if (soma%2 === 0){
//             resolve("A soma é par")
//         } else {
//             reject("A soma é impar, não pode ser dividida por 2")
//         }
//     })
// }

// somaVerificaPar(4,7).then(reject=> console.log(reject));
    