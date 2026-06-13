#FUNCIONES QEU RETORNA VALORES
def info(nombre):
    return nombre
empleado =info('siry')
empleado2 =info('daniela')
print(empleado)
print(empleado2)


def sumar(a,b):
    return a + b
resultado = sumar(15,15)
print(resultado)

def pizza(a,b,c):
    return a,b,c
pizzaCocinada = pizza('salsa', 'maiz', 'tocineta')
print (pizzaCocinada)


def carro(kilometros):
    return kilometros
kl =carro('0kl')
kl2 =carro('3000kl')
print(kl)
print(kl2)
print(f'el primer carro tiene {kl} y el segundo tiene {kl2}')

