let pagamento = "débito";

//if(pagamento === "débito"){
    //console.log("recebe 10% de desconto");
//}else if() 
//if(pagamento === "dinheiro" || pagamento === "pix"){
    //console.log("15% de desconto");
//}else if(pagamento === "2x"){
    //console.log("preço normal de etiqueta sem juros")
//}else{
    //console.log("preço normal de etiqueta mais juros de 10%")
//}

/*switch (pagamento) {
    case "débito":
        console.log("receba 10% de desconto");
        break;
        case "dinheiro":
            console.log("recebe 15% de desconto")
        case "pix":
            console.log("recebe 15% de desconto");
            break;
            case "2x":
                console.log("preço normal de etiqueta sem juros");
                break;
                default:
                    console.log("preço normal de etiquetas mais juros de 10%");
                    break;
}*/
//let carro = "renegade";

//switch (carro){
    //case "renegade":
        //console.log("jeep"):
        //break;
        //case "c4 cactus":
            //console.log("citroen");
            //break;
            //case "hb20":
            //console.log("hyundai");
            //break;
            //case "kicks":
            //console.log("nissan");
            //break;
            //case "focus":
            //console.log("ford");
            //break;
            //case "tracker":
            //console.log("chevrolet");
            //break;
            //case "corola":
            //console.log("toyota");
            //break;
            //default:
                //console.log("escolha alguma marca")
//}
/*for (let i = 0; i < 11; i++) {
    console.log("O resultado de 5 x é ", i, "=", 5 * i);
}*/
let i = 0;
while (i <=10) {
    console.log( "O resultado de 5 x", i,"=", 5 * i);
    i++
}

let num1 = 5;
let num2 = 10;

soma = num1+num2;

console.log(soma);
function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(20 , 30));
console.log(soma(15 , 55));

function saudacao(){
    return "Boa noite pessoal";
}
console.log(saudacao());

function saud(nome){
    return `Boa noite ${nome}`;
}

console.log(saud("Maria"));

