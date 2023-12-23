// Exercício 1 - Resultados Predefinidos
let resultadosEx1 = [
    "10 + 15 = 25 (int)",
    "\"10\" + 2 = \"102\" (str)",
    "\"10\" * 2 = 20 (int)",
    "\"10\" / 3 = 3.3333333333333335 (float)",
    "\"10\" % 3 = 1 (int)",
    "10 + true = 11 (int)",
    "10 == \"10\" = True (bool)",
    "10 < 11 = True (bool)",
    "10 > 12 = False (bool)",
    "10 <= 10.1 = True (bool)",
    "10 > 9.99 = True (bool)",
    "10 != \"dez\" = True (bool)",
    "\"dez\" + true = \"dezTrue\" (str)",
    "10 + false = 10 (int)",
    "10 * false = 0 (int)",
    "true + true = 2 (int)",
    "10++ = 11 (int)",
    "10-- = 9 (int)",
    "1 & 1 = 1 (int)",
    "1 & 0 = 0 (int)",
    "0 & 0 = 0 (int)",
    "0 / 1 = 0.0 (float)",
    "5 + 5 == 10 = True (bool)",
    "\"5\" + \"5\" == 10 = False (bool)",
    "\"5\" * 2 > 9 = True (bool)",
    "(10 + 10) * 2 = 40 (int)",
    "10 + 10 * 2 = 30 (int)"
];

let botaoEx1 = document.getElementById('botaoEx1');
let divEx1 = document.getElementById('resultadoEx1');

botaoEx1.addEventListener('click', function() {
    divEx1.innerHTML = '<h3>Resultados Exercício 1</h3>';
    resultadosEx1.forEach(function(resultado) {
        divEx1.innerHTML += `<p>${resultado}</p>`;
    });
});

// Exercício 2 - Resultados Predefinidos
let resultadosEx2 = [
    "branco == \"branco\": False",
    "branco == cinza: False",
    "carro === branco: True",
    "var cavalo = carro == \"preto\" ? \"cinza\" : \"marron\": \"cinza\"",
    "Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000?: 0",
    "Somando as variáveis de cores é formada uma string de quantos caracteres?: 16"
];

let botaoEx2 = document.getElementById('botaoEx2');
let divEx2 = document.getElementById('resultadoEx2');

botaoEx2.addEventListener('click', function() {
    divEx2.innerHTML = '<h3>Resultados Exercício 2</h3>';
    resultadosEx2.forEach(function(resultado) {
        divEx2.innerHTML += `<p>${resultado}</p>`;
    });
});
