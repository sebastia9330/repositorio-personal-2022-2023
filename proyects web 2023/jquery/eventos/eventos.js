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
});