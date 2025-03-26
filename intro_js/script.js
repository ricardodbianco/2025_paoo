

//1 + 2 + ... + (n-1) + n
// function calculoRapidinho(n){
//     //compete para que essa função opere como antes, não vale usar os métodos resolve e reject da clase Promise
//     return new Promise((resolve, reject) => {
//         n < 0 ? reject('Use apenas números positivos!') : resolve((n / 2) * (n + 1));
//       });
//     }

// function calculoRapidinho(n){
//     //verificar se n é negativo
//     //se for negativo, devolver uma promise no estado rejected com a seguinte mensagem de erro: Use apenas números positivos
//     //caso contrário, devolver uma promise fullfilled, como já estamos fazendo
//     //não pode usar if/else nem switch/case
//     return n < 0 ? Promise.reject('Use apenas números positivos') : Promise.resolve((n / 2) * (n + 1))
// }
// calculoRapidinho(10)
// .then((abc) => {
//     console.log(`Sucesso: ${abc}`)
// })
// .catch((err) => {console.log(`Erro: ${err}`)})

// function calculoDemorado(n){
//     const p = new Promise((resolve, reject) => { //resolve e reject são nomes que fazem referencia as funções, ponteiros que podem ser chamados por funções 
//         let ac = 0;
//         for(let i = 1; i<= n; i++) ac += i;
//         resolve(ac);
//     })
//     return p;
// }

// const minhaPromise = calculoDemorado(10);
// minhaPromise.then((res) => {
//     console.log(`Sucesso: ${res}`);
// })

// const computacaoDemorada = () => {
//     //aqui demora pois a funcao é iobound
// }

//processamento síncrono (bloqueante) e processamento assíncrono(não bloqueante)
// const fs = require('fs')
// //função callback
// function calculoDemorado(n){
    //1 + 2 + ... + n-1 + n
    //1. Construir um objeto do tipo Promise, entregando para o construtor a função que representa a computação demorada
    //a função que representa a computação demorada, recebe duas funções como parâmetro. A primeira deve ser chamada quando a computação terminar com sucesso. A segunda, por outro lado, deve ser chamada quando a computação terminar com erro.
    // const p = new Promise((resolve, reject) => {
    //     let acumulador = 0
    //     for (let i = 1; i <= n; i++) 
    //         acumulador += i
    //     resolve(acumulador)    
    // })
    //2 devolver a promise
    // return p
// }

// const promiseResultante = calculoDemorado(10)
// promiseResultante.then((res) => {
//     console.log(`Deu certo: ${res}`)
// })

// //inferno de callbacks
// //callback hell
// const exibirConteudo = (erro, conteudo) => {
//     if(erro){
//         console.log(`Deu erro: ${erro}`)
//     }
//     else{
//         console.log(`Funcionou: ${conteudo.toString()}`)
//         const dobro = Number(conteudo.toString()) * 2
//         //callback (você define mas não chama)
//         const finalizar = (erro) => {
//             console.log(`${erro ? 'Deu erro: ' + erro : 'Dobro armazenado com sucesso. C'}`)
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log("A")
//     }
// }
// fs.readFile("arquivo.txt", exibirConteudo)//IO-Bound
// console.log("B")
// function dobro(n){
//     return 2 * n
// }
// const res = dobro(5)
// console.log(res)
//IO-Bound


//objetos JSON: JavaScript Object Notation


//objetos literais Javascript

// Uma calculadora realiza operações de soma e subtração
//a soma deve ser feita com uma função regular, ou seja, usando function
//a subtração deve ser feita com uma arrow function sem return
// const calculadora = {
//     soma: function(a, b){
//         return a + b
//     },
//     subtracao: (a, b) => a - b   
// }

// console.log(calculadora.soma(2, 3))


//Uma concessionária que tem CNPJ e endereço (logradouro, numero e bairro). Ela tem um estoque de veiculos. Cada veiculo tem marca, modelo e ano de fabricação. Em um determinado momento, talvez o estoque esteja vazio. Noutro, talvez ele tenha 17 veiculos.
// const concessionaria = {
//     cnpj: '0000',
//     endereco: {
//         logradouro: "Avenida Brasil",
//         numero: 300,
//         bairro: {
//             nome: 'Vila J',
//             quantidadeMoradores: 500
//         }
//     },
//     veiculos: [
//         {
//             marca: 'Fiat',
//             modelo: 'Uno',
//             ano: 1990
//         },
//         {
//             marca: 'Honda',
//             modelo: 'Fit',
//             ano: 2010
//         }
//     ]
// }

// for (let veiculo of concessionaria.veiculos){
//     console.log(veiculo.marca)    
// }

// for(let i = 0; i < concessionaria.veiculos.length; i++){
//     //mostrar somente a marca de cada veiculo a cada iteração
//     console.log(concessionaria.veiculos[i].marca)
// }

// Fit
// console.log(concessionaria.veiculos[1].modelo)



//uma pessoa chamada Maria, com 21 anos e que mora na Rua b, número 10


// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 10
//     }
// }

// console.log(pessoa.endereco)
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa['endereco'].logradouro)
// console.log(pessoa.endereco['numero'])

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     logradouro: 'Rua B',
//     numero: 10
// }

//uma pessoa que se chama João e tem 17 anos
// const pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// // operador de desestruturação de objeto
// const { nome, idade } = pessoa
// console.log(nome, idade)

// const nome = pessoa.nome
// const idade = pessoa.idade
// console.log(nome, idade)

// const valores = [1, 2, 3, 4]
// const res = valores.reduce((ac, v) => ac + v)
// console.log(res)

// const nomes = ['Ana Paula', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//produzir um novo vetor contendo a letra inicial de cada nome
// const peloMenosUmComecaComA = nomes.some(n => n.toLowerCase().startsWith('a'))
// console.log(peloMenosUmComecaComA)
// const todosComecamComA = nomes.every(nome => nome.startsWith("A") || nome.startsWith("a"))
// console.log(todosComecamComA)
// const todosComecamComA = nomes.every((nome) => {return nome[0] === 'A' || nome[0] === 'a'})
// console.log(todosComecamComA)

// const resultante = nomes.map((nome) => {return nome.charAt(0)})
// console.log(resultante)

// const resultante = []
// for (let i =0; i < nomes.length; i++){
//     resultante.push(nomes[i][0])
// }
// console.log(resultante)

//produza um novo vetor contendo somente os nomes que começam com A
// const resultante = nomes.filter(function(nome) {return nome[0] === 'A' || nome[0] ==='a'})
// console.log(resultante)

//Solução com programação imperativa:
// const resultante = []
// for (let i = 0; i < nomes.length; i++){
//     if(nomes[i] [0] === 'A' || nomes[i] [0] == 'a')
//         resultante.push(nomes[i])
// }
// console.log(resultante)

//closure
// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return{f1, f2}
// }
// const resultadoDaEAgora = eAgora()
// resultadoDaEAgora.f1()
// resultadoDaEAgora.f2()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// const olaJoao = saudacoesFactory('Olá', 'João')
// olaJoao()

// function ola(){
//     let nome = "João"
//     return function(){
//         console.log('Olá, ' + nome)
//     }
// }
// const resultadoDaOla = ola()
// resultadoDaOla()

// function f(){ //função externa
//     let nome = 'João'
//     function g(){ //função interna
//         console.log(nome)
//     }
//     g()
// }
// f()

// function f(funcao){ //highest order function
//     funcao()
// }

// function g(){ //highest order function
//     //1.Definir a função
//     function outraFuncao(){
//         console.log("Fui criada por g")    
//     }
//     //2. Devolver a funcao outraFuncao
//     return outraFuncao
// }
// f(g())

// const resultadoDaG = g()
// resultadoDaG()

//como chamar a outraFuncao sem guardar o resultado da g em uma constante nem em uma variável
// g()()

// f(function(){ //funcao() se torna um ponteiro para este bloco de codigo
//     console.log("Sendo passada para f")
// })

// const umaFuncao = function(){
//     console.log("Fui armazenada em uma constante")
// }
// umaFuncao()

//funções regulares: function
//arrow function: () => {}
// const ehPar = (n) => {
//     console.log(n)
//     return n % 2 === 0}
// console.log(ehPar(7))
// const dobro = (valor) => {valor * 2}
// console.log(dobro(7))
// const t3 = () => 2 + 2 //return implícito
// console.log(t3())
// const t2 = () => console.log('Sou a t2')
// t2()
// const t1 = n => {console.log(n)}
// t1(1)

// function soma(a, b) {
//     return a + b;
// }
// const res = soma(2, 3);
// console.log(res);

//funções, código 1.6.1
//definição
// function hello(){ //definição de funcão (aponta pra 'oi')
//     console.log('oi');
// }
// //chamada da função
// hello();

// function hello(nome){ //redefinição de função (aponta agora para 'Oi, nome' )
//     console.log('Oi, ' + nome);
// }
// hello('Pedro');//chamada da função (apontando para 'Oi, ')

//vetores
//declaração
//  v1 = [];
//  console.log(v1.length);
//  v1[0] = 3.4;
//  console.log(v1.length);
//  v1[10] = 2;
//  console.log(v1.length);
//  v1[2] = 'abc';
//  console.log(v1.length);

//  console.log(v1);

//  for(let i = 0; i < v1.length; i++){
//     console.log(v1[i]);
//  }
 
 //comparação com == e ===
//console.log(1 === '1'); // === comparação mais exata, clara e intuitiva
//console.log(1 == '1');
//console.log(1 == 1);
 
 //coerção
// const n1 = 2;
// const n2 = '3';

//coerção implicita
// const n3 = n1 + n2;
// console.log(n3);

//coerção explícita
// const n4 = n1 + Number(n2);
// console.log(n4);


//pq não usar o var - é contraintuitivo
// var idade = 18; //var = idade - Declaração da variável idade // = 18 - Atribuição (ordem de execução) da variável idade = 18
// console.log('Oi, ' + nome);
// //içamento (hoist) 
// if(idade >=18){
//     var nome = 'João';
//     console.log('Parabéns, ' + nome + '.Você pode dirigir');
// }
// console.log("Ate mais, " + nome);

// // var liguaguem = "Javascript";
// // console.log("Aprendendo " + libguagem);
// // var linguagem = "Java";
// // console.log("Aprendendo " + linguagem);

// // //declarando variáveis
// // var b = 2; //é preferível não usar var, apenas let e const
// // console.log(b);
// // b = 3;
// // console.log(b);

// // let a = 2; //let = seja
// // console.log(a);
// // a = 3;
// // console.log(a);

// // //declarando constantes
// // //Java: String nome = "José";
// // const nome = "José";
// // console.log(nome);
// // // nome = 'Pedro'; //const é uma constante, não pode variar
// // // console.log(nome) 