'use strict'

//fetch y peticiones a servicios /apis.rest


var div_usuarios = document.querySelector('#usuarios');
var div_profe = document.querySelector('#profesor');
var div_usuario = document.querySelector('#usuario');


//var usuarios = [];

function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

    getUsuarios()    
        .then(data => data.json())
        .then(users => {
        //usuarios = users.data;
        //console.log(usuarios)
        listadoUsuarios(users.data)

            //return getUsuario();
            return getInfo();
        })
        .then(data => {
            div_profe.innerHTML = data;
            return getUsuario();
        })
        .then(data => data.json())
        .then(usuario => {
            mostrarUsuario(usuario.data);
        })
        .catch(error => {
            alert("Error en las peticiones");
        });
        

function getUsuario(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var profesor = {
        nombre: "Samuel",
        apellido: "Carrero",
        edad: "18"
    };
    
    return new Promise((resolve, reject) => {
        var profe_string = "";
        setTimeout(function(){
            profe_string = JSON.stringify(profesor);

            if(typeof profe_string != 'string' || profe_string == "")return reject('error')

            return resolve(profe_string)
        }, 3000);
            

        
    });
    

    
}
    
function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + ". "+ user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre)

        document.querySelector('.loading').style.display = 'none';
    });
};

function mostrarUsuario(user){
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');
        nombre.innerHTML =  user.first_name + " " + user.last_name;

        avatar.src = user.avatar;
        avatar.width = "100";

        div_usuario.appendChild(nombre)
        div_usuario.appendChild(avatar)

        document.querySelector('#usuario .loading').style.display = 'none';
};
