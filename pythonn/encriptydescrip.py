def encriptar(texto):
    textoFinal = ""
    for letras in texto:
      ascii = ord(letras)
      ascii += 1
      textoFinal += chr(ascii)
    return (textoFinal)





def desEncriptar(texto):
    
    textoFinal = ""
    
    for letras in texto:
      
        ascii = ord(letras)
        ascii -= 1
        textoFinal += chr(ascii)
    return (textoFinal)



def encriptarArchivo(ruta):
  archivo = open(ruta, "r")
  texto = archivo.read()
  archivo.close()
  textoEncriptado = encriptar(texto)

  archivo = open(ruta, "w")
  archivo.write(textoEncriptado)
  archivo.close()
  print("archivo encriptado")

def desEncriptarArchivo(ruta):
  archivo = open(ruta, "r")
  texto = archivo.read()
  archivo.close()
  textoDesencriptado = desEncriptar(texto)

  archivo = open(ruta, "w")
  archivo.write(textoDesencriptado)
  archivo.close()
  print("archivo desencriptado")
  


respuestaEoD = input("presiona E para encriptar o D para desencriptar: ")
ruta = input("escribe la ruta del archivo: ")

if respuestaEoD == "E":
  encriptarArchivo(ruta)
else:
  desEncriptarArchivo(ruta)
  