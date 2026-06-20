#OPERADORES
# == IGUAL A
# != DIFERENTE DE 
# < MENOS QUE
# > MAYOR QUE
# <= MENOR O IGUAL QUE 
# >= MAYOR O IGUAL QUE

a = 5
b = 3
igual = a == b #igual es false
diferente = a != b #diferente es true
mayor = a >= b #mayor es true


#CONDICIONAL
ahorro = 600
if ahorro >=50:
    print("nos vamos de viaje")
else:
    print("no tenemos ahorros")

#REVISAMOS SI UN VALOR ES DIFERENTE EN PYTHON STRING
lenguaje = 'javascript'
if not lenguaje == 'python':
    print(f'super eres un crack de {lenguaje}')
else:
    print(f"no eres un crack de {lenguaje}")

#EVALUACION BOOLEAN
usuario_autenticado = False
if usuario_autenticado:
    print('el usuario se autentico con exito')
else:
    print('el usuario no se autentico vuelva a intentarlo')

#CONDICIONALES CON LIST
superheroes = [ 'iron man', 'batman', 'spiderman', 'superman']
if 'iron man' in superheroes:
    print('ama a iron man')
else: 
    print('tu superheroe no es batman')

tiposUsuarios= ['admin', 'superadmin', 'invitado']
if 'admin' in tiposUsuarios:
    print('tienes acceso a todo menos a borrar la bitacora')
else:
    print('no eres admin')


#EJERCICIO

materias= ['matematicas', 'ingles', 'algebra', ]
if 'castellano' in materias:
    print('Eres un crack en castellano')
else:
    print(f'No eres un crack en esas {materias}')
