def encriptar(texto):
    #print("el texto a encriptar es :" + texto)
    textoFinal = ""
    for letras in texto:
      textoFinal += letras + "x"
    return (textoFinal)





def desEncriptar(texto):
    #print("el texto a desencriptar es :" + texto)
    textoFinal = ""
    contador = 0
    for letras in texto:
      if contador % 2 == 0:
        textoFinal += letras
      contador += 1
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
  