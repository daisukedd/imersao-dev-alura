var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto)

function chutar() {
    var resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("inputNumero").value)

    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você Acertou o Número Secreto"
    } else if (chute > 10 || chute < 0) {
        window.alert("Você deve digitar um valor entre 1 e 10!")
    } else {
        resultado.innerHTML = "Você Errou o Número Secreto"
    }
}


//Código Alura
// var numeroSecreto = parseInt(Math.random() * 11);

// function Chutar() {
//     var elementoResultado = document.getElementById("resultado")
//     var chute = parseInt(documen.getElementById("valor").value);
//     console.log(chute);
//     if (chute == numeroSecreto) {
//         elementoResultado.innerHTML = "Você acertou"
//     } else if (chute > 10 || chute < 0) {
//         elementResultado.innerHTML = "Você deve digitar um número de 0 a 10";
//     } else {
//         elementoResultado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
//     }
// } 