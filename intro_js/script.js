//pq não usar o var - é contraintuitivo
var idade = 18; //var = idade - Declaração da variável idade // = 18 - Atribuição (ordem de execução) da variável idade = 18
console.log('Oi, ' + nome);
//içamento (hoist) 
if(idade >=18){
    var nome = 'João';
    console.log('Parabéns, ' + nome + '.Você pode dirigir');
}
console.log("Ate mais, " + nome);

// var liguaguem = "Javascript";
// console.log("Aprendendo " + libguagem);
// var linguagem = "Java";
// console.log("Aprendendo " + linguagem);

// //declarando variáveis
// var b = 2; //é preferível não usar var, apenas let e const
// console.log(b);
// b = 3;
// console.log(b);

// let a = 2; //let = seja
// console.log(a);
// a = 3;
// console.log(a);

// //declarando constantes
// //Java: String nome = "José";
// const nome = "José";
// console.log(nome);
// // nome = 'Pedro'; //const é uma constante, não pode variar
// // console.log(nome) 