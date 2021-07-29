document.addEventListener("DOMContentLoaded", function() {
    
    const banner = {
        padre: document.querySelector('#banner'),
        numerSlides: document.querySelectorAll('#banner .slide').length,
        position: 1
    };

    const info = {
        padre: document.querySelector('#info'),
        numerSlides: document.querySelectorAll('#info .slide').length,
        position: 1
    };
    

    banner.padre.querySelector('.slide img').style.left = 0;    
    info.padre.querySelector('.slide img').style.left = 0;
    
    
    
    function altoBanner() {
        //Calcular el alto de la imagen
        let alto = info.padre.querySelector('.active').outerHeight;
        banner.padre.style.height = alto + 'px';
    };

    function altoInfo() {
        //Calcular el alto del banner
        let alto = info.padre.querySelector('.active').outerHeight;
        info.padre
    }

  });

