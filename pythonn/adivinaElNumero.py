#este juego consiste en adivinar un numero en menos de seis intentos
import random

intentosRealizados = 0

print('¡Hola! ¿Como te llamas?')
miNombre = input()

numero = random.randint(1,20)
print('Bueno, ' + miNombre + ', estoy pensando en un numero entre 1 y 20. ')
print('¿Te sientes con suerte para adivinarlo?')

while intentosRealizados < 6:
    print('Intenta adivinar.')
    estimacion = int(input())

    intentosRealizados = intentosRealizados +1

    if estimacion < numero:
        print('estas cerca, es un numero mayor')
    if estimacion > numero:
        print('estas cerca, Es un numero menor')
    if estimacion == numero:
        break

if estimacion == numero:
    intentosRealizados = str(intentosRealizados)
    print('¡Buen trabajo, ' + miNombre + '! ¡Has adivinado mi número en ' + intentosRealizados + ' intentos!')

if estimacion != numero:
    numero = str(numero)
    print('Pues no. El numero que estaba pensando era ' + numero)