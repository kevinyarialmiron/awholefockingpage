// Selecciona todos los inputs de la página
document.addEventListener('DOMContentLoaded', function() {
    // Busca los inputs debajo de "Usuario:" y "Contraseña:"
    // En login.html, son los dos primeros inputs dentro de .speech
    var speechDiv = document.querySelector('.speech');
    if (speechDiv) {
        var inputs = speechDiv.querySelectorAll('input');
        inputs.forEach(function(input) {
            // Agregar event listener para ESC una sola vez
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    alert("Canceled.");
                    input.blur(); // Quita el foco del input
                }
            });
            
            input.addEventListener('focus', function(e) {
                var label = '';
                // Determina si es usuario o contraseña según el input anterior
                var prev = input.previousElementSibling;
                if (prev && prev.tagName === 'P') {
                    label = prev.textContent.trim();
                }
                var value = prompt('Who is there?');
                
                // Verificar si el usuario canceló, presionó X, o dejó el campo vacío
                if (value === null || value.trim() === '') {
                    alert("Canceled.");
                } else {
                    input.value = value;
                    
                    // Si es el input de usuario y escribió "Admin", pasar al siguiente input
                    if (label.toLowerCase() === 'usuario:' && value.toLowerCase() === 'admin') {
                        // Buscar el siguiente input (contraseña)
                        var nextInput = input.nextElementSibling;
                        while (nextInput && nextInput.tagName !== 'INPUT') {
                            nextInput = nextInput.nextElementSibling;
                        }
                        if (nextInput) {
                            nextInput.focus(); // Enfocar el input de contraseña
                        }
                    } else if (label.toLowerCase() === 'usuario:' && value.toLowerCase() !== 'admin'){
                        alert("I don't know you");
                    }
                }
                
                // Quita el foco para evitar que el teclado siga abierto en móviles
                input.blur();
            });
        });
    }
    
    // Agregar funcionalidad al botón "Ingresa"
    var loginButton = document.querySelector('.registernoborder');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            // Obtener los valores de usuario y contraseña
            var inputs = speechDiv.querySelectorAll('input');
            var username = inputs[0].value;
            var password = inputs[1].value;
            
            // Verificar si el usuario es "Admin" y la contraseña es "TheMaster"
            if (username.toLowerCase() === 'admin' && password === 'TheMaster') {
                // Redirigir a profile.html
                window.location.href = 'profile.html';
            } else if (username.toLowerCase() === 'admin' && (password === '' || password === null)){
                alert("Canceled");    
            } else {
                alert('Wrong Password');
            }
        });
    }
});

