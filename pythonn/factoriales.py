n = int(1)
fact = int(input("ingrese el numero positivo del cual quiere obtener el factorial: "))
while (fact != 0):
  n = n * fact
  fact = fact - 1
print(n)