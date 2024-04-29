$(document).ready(function () {

    // menu de barra hambuguesa abrir
  
    $("#menu").click(function () {
  
      $(this).toggleClass("fa-times");
      $(".navebarra").toggleClass("nave-toggle");
  
    });
  
    // remove el menu
  
    $(window).on("scroll load", function () {
  
      $("#menu").removeClass("fa-times");
      $(".navebarra").removeClass("nave-toggle");
  
    });
  
    //   filtro del boton portafolio
    $('.portafolio .boton-container .btn').click(function(){
  
      let filter = $(this).attr('data-filter');
  
      if(filter == 'todos'){
        $('.portafolio .image-container .caja').show('400')
      }else{
        $('.portafolio .image-container .caja').not('.'+filter).hide('200');
        $('.portafolio .image-container .caja').filter('.'+filter).show('400');
      }
  
    });
  
  
    // tema oscuro
  
    $('#tema-toggler').click(function(){
      $(this).toggleClass('fa-sun');
      $('body').toggleClass('dark-theme');
    });
  
    // desplazamiento suave
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      );
  
    });
  
  });
  
  