playlists = { } # se crea el diccionario vacio

def crear_playlist():
    nombre_playlist = input('como deseas nombrar tu playlist:\n')
    playlists[nombre_playlist] = []
    return nombre_playlist
#funcion que retornan un valor en este caso el nombre de la playlist

def agregar_canciones(playlist_nombre):
    print('agregando canciones de la playlist:', playlist_nombre)
    while True:
        cancion = input('ingresa el nombre de la cancion (o "x" para salir): ')
        if cancion.lower() == 'x':
            break
        playlists[playlist_nombre].append(cancion) #metodo que agregar una cancion
        print('cancion agregada:', cancion)

def eliminar_canciones(playlist_nombre):
    print('eliminando canciones de la playlist:', playlist_nombre)
    while True:
        cancion_eliminar = input('ingresa el nombre de la cancion (o "x" para salir): ')
        if cancion_eliminar.lower() == 'x':
            break
        if cancion_eliminar in playlists[playlist_nombre]:
           playlists[playlist_nombre].remove(cancion_eliminar) #metodo que agregar una cancion
           print('cancion agregada:', cancion_eliminar)
        else:
            print('la cancion no se encuentra en la playlist')

def mostrar_playlists():
    if not playlists:
        print("no  hay playlists creadas")
    else:
        for nombre_playlist, canciones in playlists.items():
            print(f"playlist: {nombre_playlist}")
            for cancion in canciones:
                print(f"-{cancion}")

def app():
    while True:
        print("\n Menu:")
        print("1. crear nueva playlist")
        print("2. agregar canciones a una playlist")
        print("3. eliminar canciones de una playlist")
        print("4. mostar todas las playlist")
        print("5. salir")

        opcion = input("selecciona una opcion: ")
        
        if opcion == '1':
            nombre_playlist = crear_playlist()
            agregar_canciones(nombre_playlist)
        elif opcion == '2':
            nombre_playlist = input("¿a que playlist deseas agregar canciones?")
            if nombre_playlist in playlists:
                agregar_canciones(nombre_playlist)
            else:
                print("la playlist no existe")
        elif opcion == '3':
            nombre_playlist = input("¿de que playlist deseas eliminar canciones?")
            if nombre_playlist in playlists:
                eliminar_canciones(nombre_playlist)
            else:
                print("la playlist no existe")
        elif opcion == '4':
            mostrar_playlists()
        elif opcion == '5':
            break
        else:
            print("opcion invalida") 

app()           

