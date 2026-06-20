#ITERADORES CORREN UN DETERMINADO NUMERO DE VECES
#UNA PIEZA DE CODIGO

meses = ['octubre', 'febrero','marzo']

#CICLO FOR

for mes in meses:
    print(mes)

print(f'Estoy viajando por el mundo en el mes de {mes}')




#imprimir numeros
#generar secuencias de numeros enteros
#imaginar que quieres crear una lista de numeros del 0 al 9
#en lugar de escribir cada numero manualmente,
#puedes usar range() para generar esta secuencia
#de mandera automatica
#range() tambien acepta dos o tres argumentos:
#range(start,stop,step)
#start: el numero inicial de la secuencia (incluido)
#stop: el numero final de la secuencia (no incluido)
#step: el incremento entre cada numero 
#si se omite, el valor por defecto es 1

for numero in range(5,100,5):
    print(numero)