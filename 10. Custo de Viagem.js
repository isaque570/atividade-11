let distancia = Number(prompt("Digite a distância da viagem: "));
let consumo = Number(prompt("Digite o consumo do carro: ")); 
let gasolina = Number(prompt("Digite o preço da gasolina: "));
const quantidade_gasolina = distancia / consumo
const preco_gasolina = quantidade_gasolina * gasolina
alert(`A quantidade de gasolina que será nescessária é: ${quantidade_gasolina}, e o dinheiro a ser gasto no total é: R$ ${preco_gasolina.toFixed(2)}`);