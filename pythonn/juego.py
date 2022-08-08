import random
num = random.randint(0, 9)
while True:
    print("Ingresa un numero: ")
    n = int(input())
    if n == num:
        print("Felicidades!")
        break
    else:
        print("Intentalo nuevamente")
