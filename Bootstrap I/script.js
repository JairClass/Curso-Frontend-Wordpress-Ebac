document.addEventListener('DOMContentLoaded', function() {
    // Botão Modo Escuro
    const botaoModoEscuro = document.querySelector('.dark-mode-btn');
    botaoModoEscuro.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Seta para Subir ao Topo
    const toTopButton = document.querySelector('.to-top-btn');
    toTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Correção do Modal
    var myModalCopo = new bootstrap.Modal(document.getElementById('modalCopo'));
    var myModalGarrafa = new bootstrap.Modal(document.getElementById('modalGarrafa'));

    document.querySelectorAll('.btn[data-bs-toggle="modal"]').forEach(function(button) {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-bs-target');
            if (target === '#modalCopo') {
                myModalCopo.show();
            } else if (target === '#modalGarrafa') {
                myModalGarrafa.show();
            }
        });
    });

    // Função para animar a entrada dos elementos
    function animateElements() {
        const elementos = document.querySelectorAll('.animate-on-scroll');

        elementos.forEach(function(elemento) {
            const elementoTop = elemento.getBoundingClientRect().top;
            const isElementoVisible = elementoTop < window.innerHeight;

            if (isElementoVisible) {
                elemento.classList.add('animated');
            } else {
                elemento.classList.remove('animated');
            }
        });
    }

    window.addEventListener('scroll', animateElements);

    // Evento de envio do formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Mostra a mensagem de sucesso
        const mensagemSucesso = document.getElementById('mensagemSucesso');
        mensagemSucesso.style.display = 'block';

        // Oculta a mensagem após 3 segundos
        setTimeout(function() {
            mensagemSucesso.style.display = 'none';
        }, 3000);

        // Limpa o formulário após o envio
        form.reset();
    });
});