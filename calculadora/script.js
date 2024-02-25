function calcularIMC() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let resultado = document.getElementById("resultado")


    if (peso != "" && altura != "") {
        let imc = (peso / (altura * altura)).toFixed(2)
        let classificação = ""
        if (imc < 18.5) {
            classificação = "Muito Magro"
        }
        if (18.5 <= imc && imc <= 24.9) {
            classificação = "Normal"
        }
        if (25.0 <= imc && imc <= 29.9) {
            classificação = "Sobrepeso"
        }
        if (30.0 <= imc && imc <= 34.9) {
            classificação = "Obeso grau I"
        }
        if (35.0 <= imc && imc <= 39.9) {
            classificação = "Obeso grau II"
        }
        if (imc > 40.0) {
            classificação = "Obeso grau III ou Mórbido"
        }
        resultado.innerHTML = `Seu imc é ${imc} <br> Classificação: ${classificação}`
    }
    else {
        resultado.textContent = "Por favor, insira peso e altura"
    }
    document.getElementById("reiniciar").style.display = "block"
}

function reiniciar() {
    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("resultado").innerHTML = ""
    document.getElementById("reiniciar").style.display = "none"
}