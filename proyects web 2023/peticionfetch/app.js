'use strict'

//fetch y peticiones a servicios /apis.rest

var div_cartas = document.querySelector('#cartas');
var div_usuarios = document.querySelector('#usuarios');


var usuarios = [];

fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(data => data.json()) //captura de dato y conversion a json
        .then(users => {
            usuarios = users.data; //guardar la data en la variable usuarios
            console.log(usuarios)

            /* usuarios.map((user, i) => {
                let nombre = document.createElement('h3');

                nombre.innerHTML = i + user.name;

                div_cartas.appendChild(nombre)
            }) */
        })

fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            usuarios = data;
            console.log(usuarios)

            usuarios.map((user, i) => {
                let nombre = document.createElement('h3');

                nombre.innerHTML = i + user.name;

                div_usuarios.appendChild(nombre)

                document.querySelector('.loading').style.display = 'none';
            })
        })