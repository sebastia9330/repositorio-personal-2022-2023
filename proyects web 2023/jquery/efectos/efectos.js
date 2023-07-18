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
    })
})