document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário
  
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var passwordInput = document.getElementById('password');
  
      // Validação dos campos
      if (nameInput.value === '') {
        alert('Por favor, preencha o campo de nome.');
        nameInput.focus();
        return;
      }
  
      if (emailInput.value === '') {
        alert('Por favor, preencha o campo de e-mail.');
        emailInput.focus();
        return;
      }
  
      if (passwordInput.value === '') {
        alert('Por favor, preencha o campo de senha.');
        passwordInput.focus();
        return;
      }
  
      // Exibe mensagem de confirmação
      alert('Formulário enviado com sucesso!');
      form.reset(); // Limpa os campos do formulário
    });
  });
  