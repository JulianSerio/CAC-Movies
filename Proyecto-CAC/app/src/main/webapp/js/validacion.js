document.addEventListener('DOMContentLoaded',function() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validarFormulario();
    });

    function validarEmail(email){
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validarPassword(password){
        return password.length > 0;
    }

    function mostrarError(element, mensaje) {
        var errorText = element.nextElementSibling;
        errorText.textContent = mensaje;
        errorText.style.color = 'red';
    }

    function limpiarErrores() {
        var errores = document.querySelectorAll('.error-text');
        errores.forEach(function(error) {
            error.textContent = '';
        });
    }

    function validarFormulario(){
        limpiarErrores();

        var emailValido = validarEmail(emailInput.value);
        var passwordValida = validarPassword(passwordInput.value);

        if (!emailValido) {mostrarError(emailInput,"El correo electrónico es obligatorio");}
        if (!passwordValida) {mostrarError(passwordInput,"La contraseña es obligatoria");}
        if(emailValido && passwordValida) {
            loginForm.submit();
            console.log("...validacion del formulario correcta");
        }
        else{
            console.log("...validacion del formulario incorrecta")
        }
    }
});