document.querySelector('.login100-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="pass"]').value;

    function validateCredentials(email, password) {
        return email === "workoffee@trabalho.com" && password === "123";
    }

    if (validateCredentials(email, password)) {
        window.location.href = '../../CafeteriaProjeto5.0/Cardápio/index.html'; 
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
});