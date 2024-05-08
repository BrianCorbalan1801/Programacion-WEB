function numero1() {
    const numero1 = document.getElementById("numero1").value;
    console.log(numero1.value)
    return parseInt(numero1);
}

function numero2() {
    const numero2 = document.getElementById("numero2").value;
    console.log(numero2.value)
    return parseInt(numero2);
}

function calcularResultado() {
    const resultado = numero1() + numero2();
    document.getElementById("resultado").textContent = resultado;
}


