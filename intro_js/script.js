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