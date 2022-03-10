function start() {
    var valorConvertido = document.getElementById("valorConvertido")
    var valorInserido = parseFloat(document.getElementById("inputValor").value) //Pega o valor inserido no input
    var converse = valorInserido * 5
    valorConvertido.innerHTML = "O valor em Dólar é R$" + converse

}