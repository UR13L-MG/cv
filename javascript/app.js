$(document).ready(function () {
    var banner = {
        padre: $('#banner'),
        numerSlides: $('#banner').children('.slide').length,
        position: 1,
    }
    console.log(banner.padre)
    var info = {
        padre: $('#info'),
        numerSlides: $('#info').children('.slide').length,
        position: 1,
    }

    banner.padre.children('.slide').first().css({
        'left': 0
    });
    info.padre.children('.slide').first().css({
        'left': 0
    });

    var altoBanner = function () {
        //Calcular el alto de la imagen
        var alto = banner.padre.children('.slide').outerHeight();
        banner.padre.css({
            'height': alto + 'px'
        });
        
    }

    var altoInfo = function () {
        //Calcular el alto del banner
        var alto = info.padre.children('.active').outerHeight();
        info.padre.animate({
            'height': alto + 'px'
        });

    }
    var altoContainer = function(){
        var altoWindow = $(window).height();

        if (altoWindow <= $('#container').outerHeight() + 200){
            $('#container').css({
                'height': ''
            });
        }else {
            $('#container').css({
                'height': altoWindow + 'px'
            });
        }
    }

    altoBanner();
    altoInfo();
    altoContainer();

  

    $(window).resize(function () {
        altoBanner();
        altoInfo();
        altoContainer();
    });

    $('#info').children('.slide').each(function(){
        $('#buttons').append('<span>');
    });
    $('#buttons').children('span').first().addClass('active');

    //-----------------------------------
    //BANNER
    //-----------------------------------
    //Next button
    $('#banner_next').on('click', function (e) {
        e.preventDefault();
        if (banner.position < banner.numerSlides) {

            banner.padre.children().not('active').css({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });
            $('#banner .active').prev().animate({
                'left': '-100%'
            });
            banner.position = banner.position + 1;

        } else {
            $('#banner .active').animate({
                'left': '-100%'
            });

            banner.padre.children().not('active').css({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left': 0
            });


            banner.position = 1;
        }


    });
    //Previous button 
    $('#banner_prev').on('click', function (e) {
        e.preventDefault();

        if (banner.position > 1) {

            banner.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            banner.position = banner.position - 1;

        } else {
            banner.padre.children().not('.active').css({
                'left': '100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active')
            banner.padre.children().last().addClass('active').animate({
                'left': 0
            });

            banner.position = banner.numerSlides;
        }
    }); 

       //-----------------------------------
    //INFO
    //-----------------------------------
    //Next button
    $('#info_next').on('click', function (e) {
        e.preventDefault();
        if (info.position < info.numerSlides) {

            info.padre.children().not('active').css({
                'left': '100%'
            });

            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });
            $('#info .active').prev().animate({
                'left': '-100%'
            });

            $('#buttons').children('.active').removeClass('active').next().addClass('active');

            info.position = info.position + 1;

        } else {
            $('#info .active').animate({
                'left': '-100%'
            });

            info.padre.children().not('active').css({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.padre.children('.slide').first().addClass('active').animate({
                'left': 0
            });

            $('#buttons').children('.active').removeClass('active');
            $('#buttons').children('span').first().addClass('active');

            info.position = 1;
        }
        altoInfo();
        

    });
    //Previous button 
    $('#info_prev').on('click', function (e) {
        e.preventDefault();

        if (info.position > 1) {

            info.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            $('#buttons').children('.active').removeClass('active').prev().addClass('active');

            info.position = info.position - 1;
            

        } else {
            info.padre.children().not('.active').css({
                'left': '100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active')
            info.padre.children().last().addClass('active').animate({
                'left': 0
            });
            
            $('#buttons').children('.active').removeClass('active');
            $('#buttons').children('span').last().addClass('active');

            info.position = info.numerSlides;
        }

        altoInfo();
    });

    
});
