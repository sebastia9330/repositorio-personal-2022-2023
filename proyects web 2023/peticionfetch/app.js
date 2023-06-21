'use strict'

//fetch y peticiones a servicios /apis.rest

var usuarios = [];

fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(data => data.json())
        .then(data => {
            usuarios = data;
            console.log(usuarios)
        })

fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            usuarios = data;
            console.log(usuarios)
        })