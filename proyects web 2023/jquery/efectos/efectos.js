$(document).ready(function(){
    //eventos show(mostrar) y hide (ocultar)
    /* $('#mostrar').hide();
    
    $("#mostrar").click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').show('slow');
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').hide('slow');
    }) */

    /* $('#mostrar').hide();
    
    $("#mostrar").click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').fadeIn('slow');
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').fadeOut('slow');
    }) */

    $('#todoenuno').click(function(){
        $('#caja').toggle();
    });

    $("#animame").click(function(){
        $('#caja').animate({marginLeft: "500px",
                            height: '100px',
                        lineHeight: '85px'}, 'slow')
                            .animate({borderRadius: "50px"}, 'fast', function(){
                                console.log("animacion realizada")
                            });
    })
    
})