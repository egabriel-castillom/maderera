document.addEventListener('DOMContentLoaded', function() {
    var topvar = document.querySelector('.navbar-logo-left-10')
    var formButton = document.querySelector('.form-button.w-button');
    var stitle = document.querySelector('.section-title');
    var form = document.querySelector('.form');
    var successMessageText = document.querySelector('.enviado');
    var container = document.querySelector('.container-22');
    var overlay = document.querySelector('.overlay');
    var closeButton = document.querySelector('.close');

// Create a function to handle the click event
function handleClick(e) {
    // Prevent form submission
    e.preventDefault();

    function closeForm(time1, time2, time3) {
        // Wait for time1 seconds
        setTimeout(function() {
            // Then hide the container with a slide up animation
            container.style.animation = 'slideUp 2s forwards';
    
            // Wait for time2 seconds (the duration of the slide up animation)
            setTimeout(function() {
                // Then hide the container
                container.style.display = 'none';
                // Hide all children of the container
                stitle.style.display = 'none';
                form.style.display = 'none';
            }, time2);  // time2 milliseconds
    
        }, time1);  // time1 milliseconds
    
        setTimeout(function() {
                overlay.style.display = 'none';
        }, time3);  // time3 milliseconds
    }

    // Show the success message
    // Verificar si la variable de sesión tiene un valor específico
    if (sessionStorage.getItem('close') !== 'True') {
        stitle.style.display = 'none';
        form.style.display = 'none';
        successMessageText.style.display = 'block';
        console.log('Guardado');
        // Wait for 4 seconds (1 second before the container)
        setTimeout(function() {
            // Then hide the success message with a slide up animation
            successMessageText.style.animation = 'slideUp 2s forwards';

            // Wait for another 2 seconds (the duration of the slide up animation)
            setTimeout(function() {
                // Then hide the success message
                successMessageText.style.display = 'none';
            }, 2000);  // 2000 milliseconds = 2 seconds
        }, 5000);  // 4000 milliseconds = 4 seconds
        // Call the function with specific times
        closeForm(7000, 2000, 9000);        
    } else {
        // Call the function with specific times
        closeForm(0, 2000, 3000);
        sessionStorage.setItem('close', 'False');
    }
}

function sessionVar(e) {
    sessionStorage.setItem('close', 'True');
}

// Add the event listener to both buttons
formButton.addEventListener('click', handleClick);
closeButton.addEventListener('click', sessionVar);
closeButton.addEventListener('click', handleClick);
})