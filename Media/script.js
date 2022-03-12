function media() {
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var n4 = parseFloat(document.getElementById("nota4").value);
    var resultado = document.getElementById("resultado")


    var soma = (n1+ n2 + n3 + n4) / 4
    resultado.innerHTML = "Sua Média é " + soma
    console.log(soma)
}

