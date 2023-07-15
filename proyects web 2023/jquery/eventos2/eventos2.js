$(document).ready(function(){

    cargar();

    $('#add-btn').click(function(){
        $('#menu').append('<li><a href="'+$("#add").val()+'"></a></li>')
        $('#add').val('')
        cargar();
    });
});

function cargar(){
    $('a').each(function(index){
        var that = $(this)
        var enlace = that.attr('href');
        that.text(enlace)
    });
}


/*
    html() crea un elemento html
    appendo() crea un elemento al final
    prepend() crea un elemento al inicio
    before() agrega un elemanto antes del elemento señalado
    attr() agrega una caracteristica al elemento
    removeAttr() quita una caracteristica del elemento

*/