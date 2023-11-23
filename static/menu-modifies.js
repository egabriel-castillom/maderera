function modifyScript() {
    var navbarLinks = document.querySelectorAll('.navbar-link-31, .navbar-link-32');
    navbarLinks.forEach(function(link) {
        link.style.maxWidth = '1200px';
    });
    var navButton = document.querySelector('.w-nav-button');
    navButton.style.webkitUserSelect = 'text';
    navButton.setAttribute('aria-label', 'menu');
}

document.addEventListener('DOMContentLoaded', modifyScript);

var sessionVar = false;

function modifyScriptOnClick() {

    function recargarArchivoJS(url) {
        // Eliminar el script antiguo si existe
        let scriptAntiguo = document.querySelector(`script[src="${url}"]`);
        if (scriptAntiguo) {
            scriptAntiguo.remove();
        }
    
        // Crear un nuevo elemento de script
        let script = document.createElement('script');
    
        // Establecer el atributo src al archivo JS que deseas recargar
        script.src = url;
    
        // Agregar el script al cuerpo del documento
        document.body.appendChild(script);
    }

    function executeCode() {
        if (sessionVar) {
            console.log('sessionvar active');
            navButton.style.webkitUserSelect = '';
            navButton.removeAttribute('aria-label');
            navButton.classList.remove('w--open');
            var addedDiv = document.querySelector('.w-nav-overlay');
            if (addedDiv) {
                addedDiv.parentElement.removeChild(addedDiv);
            }
            var navbarLinks = document.querySelectorAll('.navbar-link-31, .navbar-link-32');
            if (navbarLinks) {
                navbarLinks.forEach(function(link) {
                    link.style.maxWidth = '';
                    link.classList.remove('w--nav-link-open');
                });
            }
                // Selecciona el elemento que quieres restaurar
            var navElement = document.querySelector('.navbar-menu-12');

            // Restaura las propiedades del elemento
            navElement.setAttribute('role', 'navigation');
            navElement.className = 'navbar-menu-12 w-nav-menu';

            // Crea y añade los elementos internos
            var linkTexts = ['Quienes somos', 'Ubicación', 'Productos', 'Contactanos'];
            var linkHrefs = ['#qs', '#u', '#p', '#c']; // Add your href values here

            linkTexts.forEach(function(text, index) {
                var linkClass = index < 3 ? 'navbar-link-31' : 'navbar-link-32';
                var newLink = document.createElement('a');
                newLink.href = linkHrefs[index]; // Set the href value here
                newLink.className = linkClass + ' w-nav-link';
                newLink.style.maxWidth = '1200px';

                var newDiv = document.createElement('div');
                newDiv.className = index < 3 ? 'text-15' : 'text-block';
                newDiv.textContent = text;

                newLink.appendChild(newDiv);
                navElement.appendChild(newLink);
            });


            sessionVar = false;
            return;           
    }
        if (!sessionVar) {
            sessionVar = true;
            // Select the navbar container
            var navbarContainer = document.querySelector('.navbarcontainer-11');
            // Add style, aria-label, and class to the nav button
            navButton.style.webkitUserSelect = 'text';
            navButton.setAttribute('aria-label', 'menu');
            navButton.classList.add('w--open');
            // Create a new div element for w-nav-overlay
            var newDiv = document.createElement('div');
            newDiv.className = 'w-nav-overlay';
            newDiv.setAttribute('data-wf-ignore', '');
            newDiv.id = 'w-nav-overlay-0';
            newDiv.style.height = '6144.98px';
            newDiv.style.display = 'block';
            // Create a new nav element for navbar-menu-12
            var newNav = document.createElement('nav');
            newNav.className = 'navbar-menu-12 w-nav-menu';
            newNav.setAttribute('role', 'navigation');
            newNav.style.transform = 'translateY(0px) translateX(0px)';
            newNav.style.transition = 'transform 400ms ease 0s';
            newNav.setAttribute('data-nav-menu-open', '');

            // Append the new nav to the new div
            newDiv.appendChild(newNav);

            // Select all navbar links
            var navbarLinks = document.querySelectorAll('.navbar-link-31, .navbar-link-32');

            // Add style and class to each navbar link
            navbarLinks.forEach(function(link) {
                link.style.maxWidth = '1200px';
                link.classList.add('w--nav-link-open');
                
                // Append each navbar link to the new nav
                newNav.appendChild(link);
            });

            // Append the new div to the navbar container's parent element
            navbarContainer.parentElement.appendChild(newDiv);
            return;
        }

        }
        
        var navButton = document.querySelector('.w-nav-button');
        navButton.addEventListener('click', function() {
            executeCode();
        });

        // Verifica el ancho de la ventana al cargar la página
        if (window.innerWidth >= 991) {
            if (sessionVar){
                executeCode();        
            };
        }

        // También verifica el ancho de la ventana cada vez que se redimensiona
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 991) {
                if (sessionVar){
                    console.log('WEY')
                    executeCode();
                    recargarArchivoJS('/static/overlay.js')
                };
            }
        });

    };


// Call the function to add the event listener to the button
document.addEventListener('DOMContentLoaded', modifyScriptOnClick);

