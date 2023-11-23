function hrefsmooth(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('suabe');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

        });
    });
}

document.addEventListener('DOMContentLoaded', hrefsmooth);