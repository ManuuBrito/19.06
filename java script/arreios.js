//const frutas=["Abacaxi", "Mamão", 10, 15, true, false, 1.5];

//frutas.push("Abacate", "Laranja");

//console.log(frutas.length);

//mamão, laranja, melancia, abacate, uva, pera;

//const frutas=["mamão", "laranja", "melancia", "abacate", "uva", "pera", "maçã"];

//console.log(frutas[3]);
//frutas.push("Maçã");
//console.log(frutas.length);

//const pessoa={
    //nome: "Maria",
    //sobrenome: "Oliveira",
    //idade: 25
//}
//console.log(pessoa.idade);

//const carro = {
  //  marca: "toyota",
    //modelo: "corola",
    //ano: 2023
//}
//console.log(carro.ano, carro.marca, carro.modelo)

//const carro1 = {
 //   marca: "jeep",
   // modelo: "renagade",
    //ano: 2022
//}
//const carro2 = {
  //  marca: "fiat",
    //modelo: "palio",
    //ano: 2010
//}
//const carro3 = {
  //  marca: "chevrolet",
    //modelo: "prisma",
    //ano: 2012
//}

//console.log(carro3.ano);
//console.log(carro.modelo);
//console.log(carro2.marca);
//console.log(carro1.modelo);

//function carro(marca, modelo, ano){
  //  return {marca, modelo, ano};
//}

//const carro1 = carro("jeep", "renegade", 2020);
//console.log(carro1.marca, carro1.modelo, carro1.ano);

//function pessoa(idade, altura, nome, sobrenome){
    //return {idade, altura, nome, sobrenome};
//}
//const pessoa1 = pessoa(15, 1.62, "Manuu", "Brito");
//console.log(pessoa1.idade, pessoa1.altura, pessoa1.nome, pessoa1.sobrenome);

//function pessoa(idade, altura, nome, sobrenome){
  //  return {idade, altura, nome, sobrenome};
//}
//const pessoa1 = pessoa(15, 1.72, "Gustavo", "Santos");
//console.log(pessoa1.idade, pessoa1.altura, pessoa1.nome, pessoa1.sobrenome);

//function compararParImpar(n){
   // if (n % 2===0){
     //   return `O numero ${n} e PAR`

   // }else{
    //    return `O numero ${n} é IMPAR`
   // }
//}
//console.log(compararParImpar(11));

//function menoremaioridade(idade){
    //if (idade <= 5){
  //  return "essa pessoa é um bebê";
//}else if (idade >=6 && idade <=13){
  //  return "essa pessoa é uma criança";
//}else if (idade >=14 && idade <=17){
  //  return "essa pessoa é adolescente";
//}else if (idade >=18 && idade <=60){
  //  return "essa pessoa é um adulto";
//}else if (idade >=61 && idade <=80){
  //  return "essa pessoa é um idoso";
//}else {
  //  return "essa pessoa é um ancião";
//}
//}
//console.log(menoremaioridade(15));


function imposto(salario){
  if (salario >=0.00 && salario <=1100.00){
   return aliquota = 0.05;
  }else if (salario >=1100.01 && salario <=2500.00){
    return aliquota = 0.1;
  }else if (salario >=2500.00){
    return aliquota = 0.15;
  }
}
const valorSalario = 2000;
const valorBeneficio = 250;

const valorImposto = imposto(valorSalario) * valorSalario
console.log(valorImposto);

const salarioFinal = valorSalario - valorImposto + valorBeneficio;
console.log(salarioFinal);
