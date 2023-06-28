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

function menormaioridade(idade){
    if (idade <= 5){
    return "bebê";
}else if (idade >=6 && idade<=13){
    return "criança";
}else if (idade >=14 && idade<=17){
    return "adolescente";
}else if (idade >=18 && idade<=60){
    return "adulto";
}else if (idade >=61 && idade<=80){
    return "idoso";
}else if (idade <= 81){
    return "ancião";
}
}