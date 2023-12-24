function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });

    ///////////////////////

        // Botão de Modo Escuro
        document.addEventListener('DOMContentLoaded', function() {
            const botaoModoEscuro = document.querySelector('.modo-escuro');
        
            botaoModoEscuro.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    botaoModoEscuro.textContent = '☀️'; // Ícone do sol para o modo claro
                } else {
                    botaoModoEscuro.textContent = '🌙'; // Ícone da lua para o modo escuro
                }
            });
        
            // ... Restante do código ...
        });
        // Função para validar campos obrigatórios
        function validaCampo(elemento) {
            elemento.addEventListener('focusout', function() {
                if (this.value == "") {
                    this.classList.add('erro');
                } else {
                    this.classList.remove('erro');
                }
            });
        }
    
        // Função para validar email
        function validaEmail(elemento) {
            elemento.addEventListener('focusout', function() {
                const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
                if (!this.value.match(emailValido)) {
                    this.classList.add('erro');
                } else {
                    this.classList.remove('erro');
                }
            });
        }
    
        // Função para validar UF
        function validaUF(elemento) {
            elemento.addEventListener('input', function() {
                this.value = this.value.toUpperCase().slice(0, 2);
            });
    
            elemento.addEventListener('focusout', function() {
                if (!this.value.match(/^[A-Z]{2}$/)) {
                    this.classList.add('erro');
                } else {
                    this.classList.remove('erro');
                }
            });
        }
    
        // Aplicando validações aos campos
        let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
        let campoEmail = document.querySelector('input.email');
        let campoUF = document.querySelector('input.uf');
    
        camposObrigatorios.forEach(validaCampo);
        validaEmail(campoEmail);
        validaUF(campoUF);
    
        // Botão de Reset
        document.querySelector('.reset-form').addEventListener('click', function() {
            document.getElementById('formulario-02').reset();
            document.querySelector('.mensagem').classList.remove('ativa', 'sucesso', 'erro');
        });
    
        // Submissão do Formulário
        document.getElementById('formulario-02').addEventListener('submit', function(event) {
            event.preventDefault();
            let camposInvalidos = this.querySelectorAll('.erro');
            let mensagem = document.querySelector('.mensagem');
    
            if (camposInvalidos.length > 0) {
                mensagem.innerHTML = "🚫 Verifique os campos em destaque.";
                mensagem.classList.add('erro', 'ativa');
                mensagem.classList.remove('sucesso');
            } else {
                mensagem.innerHTML = "✅ Seu cadastro foi realizado com sucesso!";
                mensagem.classList.add('sucesso', 'ativa');
                mensagem.classList.remove('erro');
            }
        });

    