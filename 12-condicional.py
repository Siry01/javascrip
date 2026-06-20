#CONDICIONAL EL IF ELIF ELSE
tipo ='estudiante'
if tipo=='estudiante':
    print('Tienes un descuente del 50%')
elif tipo=='profesor':
    print('Tienes un descuento del 80%')
elif tipo=='invitado':
    print('Tines un descuento del 10%')
else:
    print('NO HAY DESCUENTO')

usuario = 'romanlg'
tipoUsuario = 'gerente'
tipoUsuarios = ['admin', 'superadmin', 'invitado']

if tipoUsuario in tipoUsuarios and usuario == 'romanlg':
    if tipoUsuario =='superadmin':
       print('acceso total') 
    elif tipoUsuario=='admin':
        print('el usuario es admin')
    else:
        print('el usuario es invitado')
else:
    print('el usuario no puede entrar al sistema')
