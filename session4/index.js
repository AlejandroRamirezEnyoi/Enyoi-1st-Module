// class Animal {
// 	constructor(especie, raza, color, nombre){
// 		this.especie = especie
// 		this.raza = raza
// 		this.color = color
// 		this.nombre = nombre
// 	}
// 	respirar(){
// 		console.log(`todos los ${this.especie}s respiran`);
// 	}
// 	hacerSonido(){
// 		console.log("Los animales hacen sonido");
// 	}
// }

// class Perro extends Animal {
// 	constructor(especie, raza, color, nombre, largoHocico){
// 		super(especie, raza, color, nombre)
// 		this.largoHocico = largoHocico
// 	}
// 	hacerSonido(){
// 		console.log(`${this.nombre} hace: gua, gua!!`);
// 	}
// }

// let miPerrito = new Perro("canino", "schnauzer", "beige", "Danna", "15cm")
// console.log(miPerrito.especie)
// miPerrito.respirar()

// class Gato extends Animal {
// 	constructor(especie, raza, color, nombre, numeroDeVidas){
// 		super(especie, raza, color, nombre)
// 		this.vidas = numeroDeVidas
// 	}
// 	hacerSonido(){
// 		console.log(`${this.nombre} hace: miau, miau`);
// 	}
// }

// let unGatico = new Gato("felino", "persa", "Blanco", "michi", 5)
// unGatico.respirar()

// let sonar = (animal) => {
// 	animal.hacerSonido()
// }
// function sonar(animal){
// 	animal.hacerSonido()
// }

// function ladrar(perro){ // esta funcion recibe un OBJETO, recordemos que los objetos son instancias de clases
// 	perro.hacerSonido()
// }

// let unPerrito = new Perro("canino", "pincher", "negro", "Tony", "5cm")
// sonar(unPerrito) // unPerrito.hacerSonido()
// sonar(miPerrito)// miPerrito.hacerSonido()
// sonar(unGatico)// unGatico.hacerSonido()
// ladrar(unPerrito)
//---------------------------------------------------------------------------------------
// class Vehiculo {
// 	moverse() {
// 		console.log("El vehículo se está moviendo.")
// 	} 
// }

// class Coche extends Vehiculo {
// 	moverse() {
// 		console.log("El coche está circulando por la carretera.")
// 	} 
// }

// class Barco extends Vehiculo {
// 	moverse() {
// 		console.log("El barco está navegando en el agua.")
// 	} 
// }

// class Cuatrimoto extends Vehiculo {
// }

// let miCoche = new Coche()
// let miBarco = new Barco()
// let otroBarquito = new Barco()
// let miCuatrimoto = new Cuatrimoto()

// miCoche.moverse() // El coche está circulando por la carretera. 
// miBarco.moverse() // El barco está navegando en el agua. 
// miCuatrimoto.moverse()

// miCuatrimoto.moverse = function(){
// 	console.log("La cuatrimoto se esta moviendo");
// }

// let cuatrimoto2 = new Cuatrimoto()

// miCuatrimoto.moverse()
// cuatrimoto2.moverse()
//---------------------------------------------------------------------------------------------
// class Motor {
// 	constructor(numeroPistones, cubicaje, fechaDeFabricacion, material, configuracion){
// 		this.numeroPistones = numeroPistones
// 		this.cubicaje = cubicaje
// 		this.fechaDeFabricacion = fechaDeFabricacion
// 		this.material = material
// 		this.configuracion = configuracion
// 	}
// 	encender() {
// 		console.log("Motor encendido.")
// 	}
// }

// class Coche {
// 	constructor(motor) {
// 		this.motor = motor
// 	}

// 	arrancar() {
// 		this.motor.encender()
// 	} 
// }

// let miMotor = new Motor()
// let auto = new Coche(miMotor) // Se inyecta la dependencia desde fuera 
// auto.arrancar() // Motor encendido. 
//-------------------------------------------------------------------------------
class Celular{
	constructor(display, sistemaCarga, modelo){
		this.display = display
		this.sistemaCarga = sistemaCarga
		this.modelo = modelo
	}
}

class Display {
	constructor(tamaño){
		this.tamaño = tamaño
	}
}

class SistemaCarga {

}

let display1 = new Display("15in")
let sistemaCarga1 = new SistemaCarga()
let display2 = new Display("3in")

let n1100 = new Celular(display1, sistemaCarga1, 1100)
let a2 = new Celular(display2, sistemaCarga1, "A2")