nombre = input('Cual es tu nombre?\r\n')
print(f'tu nombre es {nombre}')

edad = input ('cual es tu edad?')
#convertir edad en un entero
edad = int(edad) #float #str

if edad >=18:
    print(f'eres mayor de edad y puedes votar')
else:
    print(f'lo sentimos aun eres un bebe')

#caso que un usuario ingrese otro valor que no sea numero 
edad = input ('cual es tu edad?')
try:
    edad = int(edad)
    if edad >= 18:
        print(f'eres mayor de edad y puedes votar')
    else:
        print(f'aun no tienes la edad para votar')
except ValueError:
    print("por favor, ingresa un numero valido para la edad")


