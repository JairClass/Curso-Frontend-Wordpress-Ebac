document.addEventListener('DOMContentLoaded', function() {
    // Seta para Subir ao Topo
    const toTopButton = document.querySelector('.btn1');
    toTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Inicialização dos Modais
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

    // Animação ao rolar a página
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
    window.addEventListener("beforeunload", function () {
        document.body.classList.add("animate-out");
    });

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

    const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('body-dark');
    document.querySelector('nav').classList.toggle('navbar-dark');
    document.querySelector('.footer-main').classList.toggle('footer-dark');
    document.querySelector('.footer-bottom').classList.toggle('footer-dark');
});

});


document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#homeCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000,  // Ajuste o tempo de transição (em milissegundos)
        wrap: true
    });
});
