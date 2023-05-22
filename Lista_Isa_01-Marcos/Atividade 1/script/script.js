const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

function calcimc() {
    let peso = Number(c('.peso').value);
    let altura = Number(c('.altura').value);
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        c(".text-body").innerHTML = 'Você está abaixo do peso adequado: ' + imc.toFixed(1);
        c(".text-body").style.display = "flex"
    } else if (imc >= 18.5 && imc < 24.9) {
        c(".text-body").innerHTML = 'Você está na média de peso adequado: ' + imc.toFixed(1);
        c(".text-body").style.display = "flex"
    } else if (imc >= 25 && imc < 29.9) {
        c(".text-body").innerHTML = 'Acima do peso adequado: ' + imc.toFixed(1);
        c(".text-body").style.display = "flex"
    } else if (imc >= 30 && imc < 39.9) {
        c(".text-body").innerHTML = 'Você está no quadro de Obesidade, tome cuidado! ' + imc.toFixed(1);
        c(".text-body").style.display = "flex"
    } else if (imc >= 40) {
        c(".text-body").innerHTML = 'Você se configura no quadro de obesidade grave, Procure auxílio médico e nutricional: ' + imc.toFixed(1);
        c(".text-body").style.display = "flex"
    } else {
        c(".text-body").innerHTML = 'Por favor, insira valores aceitáveis, não foi possível reconhecer os valores descritos.';
        c(".text-body").style.display = "flex"
    }
}

c('.button').addEventListener('click', calcimc);
