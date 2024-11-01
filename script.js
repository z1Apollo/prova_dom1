const botaoConverter = document.querySelector("#converter");

botaoConverter.addEventListener("click", () => {
    const metros = parseFloat(document.querySelector("#metros").value);
    const unidade = document.querySelector("#unidade").value;
    let resultado;

    switch (unidade) {
        case "jarda":
            resultado = metros * 1.094;
            break;
        case "pé":
            resultado = metros * 3.281;
            break;
        case "polegada":
            resultado = metros * 39.37;
            break;
        case "milha":
            resultado = metros * 0.000621;
            break;
        default:
            resultado = "Unidade inválida!";
    }

    document.querySelector("#resultado").textContent = `Resultado: ${resultado.toFixed(2)} ${unidade}(s)`;
});