$(document).ready(function(){
    //selector de ID
    var rojo = $("#rojo").css("background","red").css("color","white");
    var amarillo = $("#amarillo").css("background","yellow")
    var verde = $("#verde").css("background","green")
    console.log(rojo)

    //selector de clase
    var clase = $(".parrafo")
    
    $(".sinborde").click(function(){
        console.log("click");
        $(this).addClass("parrafo")
    });

    //selectores de etiqueta
    var parrafos = $("p").css('cursor','pointer');

    parrafos.click(function(){
        var thiss = $(this);

        if(!thiss.hasClass('grande')){
            thiss.addClass('grande');
        }else{
            thiss.removeClass('grande');
        }
    });

    //Selectores de atributo
    $('[title="inicio"]').css('background','#ccc')
});