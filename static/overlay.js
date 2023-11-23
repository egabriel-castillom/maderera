// Get the overlay element
var overlay = document.querySelector('.overlay');

var stitle = document.querySelector('.section-title');
var form = document.querySelector('.form');
var successMessageText = document.querySelector('.enviado');
var topvar = document.querySelector('.navbar-logo-left-10');

// Get the button element
var button = document.querySelector('.navbar-link-32');

// Add a click event listener to the button
button.addEventListener('click', function(e) {
    // Prevent the form from submitting
    e.preventDefault();
    console.log('HEY WEY');
    // Show the overlay
    overlay.style.display = 'block';
    var container = document.querySelector('.container-22');
    // Initially hide the container
    container.style.display = 'none';
    topvar.style.display = 'none';
    stitle.style.display = 'flex';
    form.style.display = 'flex';
    successMessageText.style.animation = 'none';
    // Wait for 10 seconds
    setTimeout(function() {
        // Then display the container and its contents
        container.style.display = 'flex';

        // Add the animation
        container.style.animation = 'slideDown 2s';
//        overlay.style.display = 'none'; //To be removed once you run the animation from a button.
    }, 1000);  // 10000 milliseconds = 10 seconds
});

// Function to hide the overlay
function hideOverlay() {
    overlay.style.display = 'none';
}