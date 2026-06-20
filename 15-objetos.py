#OBJETOS
#UN OBJETO COMO YA SABEMOS ES SIMILAR A UN ARRAY, TE PERMITE AGRUPAR CONTENIDO
#DIFERENTES TIPOS DE DATOS 
#AQUI SE CONOCEN COMO DICCIONARIOS

cancion = {
    'artista':'Latin Mafia',
    'nombre': 'Siento que merezco mas'
}
#acceder a los elementos del diccionario
print(cancion['artista'])
artista = cancion ['artista']
print(artista)

#agregar un key al diccionario
cancion['playlist_id'] = 'Romantica'
print(cancion)

#eliminar el valor de un diccionario
del cancion['playlist_id']
print(cancion)

#EJERCICIO

anime = {
    'nombre': 'One Piece',
    'personaje principal': 'Luffy',
    'tipo de anime': 'aventura, acción, fantasía y comedia',
    'año que salio': 'comenzó a publicarse el 22 de julio de 1997'
}
#acceder a los elementos del diccionario
print(anime['nombre'])
nombre = anime ['nombre']
print(nombre)

#agregar un key al diccionario
anime['personaje secundario'] = 'Zoro'
print(anime)

#eliminar el valor de un diccionario
del anime['personaje secundario']
print(anime)