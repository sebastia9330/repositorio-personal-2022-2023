#   Reto #0
#   EL FAMOSO "FIZZ BUZZ"
#   Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
#   - Múltiplos de 3 por la palabra "fizz".
#   - Múltiplos de 5 por la palabra "buzz".
#   - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
for num in range(1,101):
    string = ""
    if num % 3 == 0:
        string = string + "Fizz"
    if num % 5 == 0:
        string = string + "Buzz"
    if num % 5 != 0 and num % 3 != 0:
        string = string + str(num)
    print(string) 
