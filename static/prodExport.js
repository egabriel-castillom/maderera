document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form-group');
    form.addEventListener('submit', function(event) {
        var inputs = this.querySelectorAll('input, textarea');
        var isValid = true;
        var formData = {};

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                inputs[i].style.borderColor = 'red';
                isValid = false;
            } else {
                // Check if the input is an email field
                if (inputs[i].type === 'email') {
                    // Validate the email
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(inputs[i].value)) {
                        inputs[i].classList.add('flash-error');
                        isValid = false;
                        continue;
                    }
                }
                inputs[i].classList.remove('flash-error');
                formData[inputs[i].name] = inputs[i].value;
            }
        }

        if (isValid && document.getElementById('tu-lista-label') && document.getElementById('table-data')) {
            event.preventDefault();

            var rowText = document.getElementById('table-data').innerText;
            var rows = rowText.split('\n');
            var solicitud = [];
            for (var i = 1; i < rows.length; i++) {
                var cols = rows[i].split('\t');
                if (cols.length > 6) {
                    solicitud.push(`Prod:${cols[0]} Mad:${cols[1]} Esp:${cols[2]} Anc:${cols[3]} Larg:${cols[4]} Cant:${cols[5]}`);
                }
            }
            formData['solicitud'] = solicitud.join('|--|');

            // Convert formData to a string
            var formDataString = '';
            for (var key in formData) {
                formDataString += key + ': ' + formData[key] + ', ';
            }
            // Remove the trailing comma and space
            formDataString = formDataString.slice(0, -2);

            var pairs = formDataString.split(', ');
            var formData = {};
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split(': ');
                formData[pair[0]] = pair[1];
            }
            
            // Now you can access each value using its key
            var nombre = formData['nombre'];
            var telefono = formData['telefono'];
            var email = formData['email'];
            var mensaje = formData['mensaje'];
            var solicitud = formData['solicitud'];
            
            console.log(nombre);  // Outputs: Eduardo
            console.log(telefono);  // Outputs: 8119129111
            console.log(email);  // Outputs: egabriel.castillom@gmail.com
            console.log(mensaje);  // Outputs: Up to the face
            console.log(solicitud);  // Outputs: Prod:Tabla Mad:Cedro Rojo Esp:1'' Anc:4'' Larg:8ft Cant:1, Prod:Tablón Mad:Pino Esp:1.5'' Anc:12'' Larg:10ft Cant:7, Prod:Polín Mad:Pino Esp:3.5'' Anc:3.5'' Larg:12ft Cant:3
            db(formDataString);
        }

    });
});

function db(formDataString) {
    fetch('/db', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'formDataString': formDataString
        })
    })
}
