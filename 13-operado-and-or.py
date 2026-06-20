#CONDICIONALES AND OR OR
#ANDE RESERVA QUE AMBAS CONDICIONES SEAN VERDADERAS
#OR REVISA AL MENOS UNA DE LAS CONDICIONES SE CUMPLA 1
accseso_usuario = True
acceso_admin = False
if accseso_usuario or acceso_admin:
    print('acceso total')
elif accseso_usuario:
    print('el usuario esta autenticado')
else:
    print('el usuario no esta autenticado')