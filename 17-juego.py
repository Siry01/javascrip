#COMO SABER SI UN NUMERO ES PAR
numero = input('agrega un numero y te dire si es impar\r\n')
numero = int(numero)

if numero %2 == 0: #modulo divide para ver si es entero y generaun residuo
    print(f'tu numero {numero} es par')
else:
    print(f'tu numero {numero} es impar')