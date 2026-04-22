/// Coleta de dados
let nome = document.getElementById("nome");
let sexo = document.getElementById("sexo");
let idade = document.getElementById("idade");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");

/// Cálculo do IMC
function calcularIMC() {
    if (!nome.value || !sexo.value || !idade.value || !peso.value || !altura.value) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    if (idade.value < 0 || idade.value > 120) {
        alert("Por favor, insira a sua idade corretamente.");
        return;
    }
    if (peso.value <= 0 || peso.value > 500) {
        alert("Por favor, insira o seu peso corretamente.");
        return;
    }
    if (altura.value <= 0 || altura.value > 2.5) {
        alert("Por favor, insira a sua altura corretamente. Ex: 1.75.");
        return;
    }
    let imc = peso.value / (altura.value * altura.value);
    imc = imc.toFixed(2);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    let pesoMin = (18.5 * (altura.value * altura.value)).toFixed(2);
    let pesoMax = (24.9 * (altura.value * altura.value)).toFixed(2);


    resultado.innerHTML = `Nome: ${nome.value} <br> Sexo: ${sexo.value.charAt(0).toUpperCase() + sexo.value.slice(1)} <br> Idade: ${idade.value} anos <br> Peso: ${peso.value} kg <br> Altura: ${altura.value} m <br> IMC: ${imc} <br> Classificação: ${classificacao}`;
    document.getElementById("pesoIdeal").innerHTML = `Peso ideal : ${pesoMin} kg - ${pesoMax} kg`;

}

