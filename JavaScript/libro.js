var libro = {
    titulo: "Desarrollo Web ágil con AngularJS",
    autor: {
      nombre: "Carlos Azaustre",
      nacionalidad: "Española",
      edad: 30,
      contacto: {
        email: "carlosazaustre@gmail.com",
        twitter: "@carlosazaustre"
      }
    },
    editorial: {
      nombre: "carlosazaustre.es Books",
      web: "https://carlosazaustre.es"
    }
  };
  // Podemos acceder con notación punto, array, o mixto.
  console.log(libro.autor.nombre); // "Carlos Azaustre"
  console.log(libro.autor.edad); // 30
  libro['editorial'].web; // "https://carlosazaustre.es"
  console.log(libro.autor.contacto.twitter); // "@carlosazaustre
  