document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById('formCadastro');
    
    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validação dos campos do formulário
        let isValid = true;
        this.querySelectorAll('.form-control').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (isValid) {
            // Aqui você pode adicionar a lógica para enviar os dados do formulário
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Remover a classe 'is-invalid' quando o usuário corrigir o erro
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('is-invalid');
            }
        });
    });
});

document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.add('valid');
            setTimeout(() => this.classList.remove('valid'), 1000); // Remove a classe após 1 segundo
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var camposNumericos = document.querySelectorAll('input[type="tel"]');

    camposNumericos.forEach(function(campo) {
        campo.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if(window.location.hash) {
        var secao = document.querySelector(window.location.hash);
        if(secao) {
            secao.scrollIntoView();
        }
    }
});