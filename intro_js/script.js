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