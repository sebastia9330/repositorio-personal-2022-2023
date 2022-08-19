num = int(input("ingresa el numero: "))
unidadesdemil = num//1000%1000
print("unidades de mil", + unidadesdemil)
unidades = num %10
print("unidades", + unidades)
decenas = num //10%10
print("decenas", + decenas)
centenas = num//100%100
print("centenas", + centenas)
