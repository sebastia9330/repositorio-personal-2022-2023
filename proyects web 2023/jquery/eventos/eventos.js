$(document).ready(function(){
    //mouseover y mouseOut

    var caja = $('#caja')

/*     caja.mouseover(function(){
        $(this).css("background","green");
    });

    caja.mouseout(function(){
        $(this).css("background", "blue")
    }) */

    function cambiaVerde(){
        $(this).css("background","green");
    }

    function cambiaAzul(){
        $(this).css("background", "blue");
    }

    //Hover
    caja.hover(cambiaVerde, cambiaAzul)

    //click, Dobleclick
    caja.click(function(){
        $(this).css("border", "20px solid black")
    });

    caja.dblclick(function(){
        $(this).css("border", "20px solid red")
    });

    //Focus y blur
    $('#nombre').focus(function(){
        $(this).css("border", "5px solid red");
    });

    $('#nombre').blur(function(){
        $(this).css("border", "5px solid black");
        $('#datos').text($(this).val()).show();
    });

    //Mousedown y mouseup
    $('#datos').mousedown(function(){
        $(this).css("border-color", "green");

    });

    $('#datos').mouseup(function(){
        $(this).css("border-color", "blue");
    
    });

    //Mousemove
    $(document).mousemove(function(){
        $('body').css('cursor', 'none')
        console.log("En X: " + event.clientX);
        console.log("En y: " + event.clientY);
        $('#sigueme').css("left", event.clientX)
                    .css("top", event.clientY);
    })

});