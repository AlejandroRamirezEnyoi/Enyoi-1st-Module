//literal object

// let estudiante1 = {
// 	name:"Alejandro",
// 	lastName: "Ramirez",
// 	curses: ["matematicas", "fisica", "programacion"],
// 	saludar: function(){
// 		console.log( "Hola "+ this.name + " este es tu apellido " + this.lastName )
// 	} 
// }

//instanciando objeto de new Object()

// let persona1 = new Object()
// persona1.name = "Alejandro"
// persona1.lastname = "Pepito"

// console.log(estudiante1.curses[1]);

// class Animal {
// 	constructor(nombre, tipo) {
// 		this.nombre = nombre
// 		this.tipo = tipo
// 	}
// 	hacerSonido() {
// 		console.log(`${this.nombre} hace un sonido.`) // template literal `${perro} es un objeto de la clase Animal `
// 	} 
// }

// let perro = new Animal("Firulais", "canino")
// let gato = new Animal("michi", "felino")
// let elefante = new Animal("Dumbo", "paquidermo")
// perro.hacerSonido() // Firulais hace un sonido.
// gato.hacerSonido()
// elefante.hacerSonido()

// console.log();

class Car {
	constructor(color, engine){
		this.color = color
		this.engine = engine
	}
	run(speed){
		console.log(`El carro de color ${this.color} está andando a ${speed} kilometros por hora`)
	}
}

let carGreen = new Car("verde", 2000)
let carRed = new Car("rojo", 1600)

carGreen.color
carRed.run(80)

console.log(typeof(carGreen))
let arrayNumbers = [1,5,6,2]

arrayNumbers.push(7)
console.log(arrayNumbers);

let prhase = "mi casa es bonita"
let arrayWithoutSpacase = prhase.split(" ")
console.log(arrayWithoutSpacase);



