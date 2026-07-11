class Carro:
    def __init__(self, marca, modelo,color): #este es el constructor de la clase.
        #es un metodo especial que se ejecuta automaticamen cuando se crea un nuevo objeto
        self.marca = marca
        self.modelo = modelo
        self.color = color
        self.encendido = False

    #es una convencion en python. self representa la instancia del objeto que se esta creando
    def encender(self):
        self.encendido = True
        print("el carro ha encendido")

    def apagar(self):
        self.encendido = False
        print("el carro ha apagado")


    def acelerar(self):
        if self.encendido:
            print("el carro esta acelerando.")
        else:
            print("el carro debe estar encendido para acelerar")

#creamos un objeto (instancia) de la clase carro
mi_carro = Carro("Toyota","Corolla","Blanco")


#acceder a los atributos del objeto
print(mi_carro.marca) #Imprime: toyota

#Llamar a un metodo del objeto
mi_carro.encender()
mi_carro.acelerar()

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años")

    def cumplir_anios(self):
        self.edad += 1
        print(f"Feliz cumpleaños, ahora tienes {self.edad} años")

mi_persona = Persona("siry", 22)
mi_persona.saludar()
mi_persona.cumplir_anios()

class Futbol:
    def __init__(self, posicion, jugador, equipo, gol):
        self.posicion = posicion
        self.jugador = jugador
        self.equipo = equipo
        self.gol = gol

    def anotacion(self):
        self.anota= True
        print(f"El jugador {self.posicion} {self.jugador}, perteneciente al equipo de {self.equipo} a marcado {self.gol} gooool!!!")

    def fuera(self):
        self.anota= False
        print(f"Fuera del jugador {self.posicion} {self.jugador}, perteneciente al equipo de {self.equipo}")

    def ganador(self):
        if self.anota:
          print(f"{self.equipo} son los ganadores del mundial!!!")
        else:
          print(f"Argentina gano el mundial!!!!")


mi_equipo = Futbol("delantero", "Haaland", "Noruega", 1)
mi_equipo.fuera()
mi_equipo.ganador()


