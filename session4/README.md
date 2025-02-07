## Clase: Herencia, Polimorfismo e Inyección de Dependencias en JavaScript
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. Herencia en JavaScript
✅ La herencia permite que una clase derive (herede) propiedades y métodos de otra.
✅ Se usa la palabra clave extends para establecer la relación entre clases.

📌 Ejemplo de herencia en JavaScript:
```js 
class Animal {
	constructor(nombre) {
		this.nombre = nombre
	}

	hacerSonido() {
		console.log(`${this.nombre} hace un sonido.`)
	}
}

class Perro extends Animal {
	ladrar() {
		console.log(`${this.nombre} dice: ¡Guau guau!`)
	} 
}

let miPerro = new Perro("Firulais")
miPerro.hacerSonido() // Firulais hace un sonido. 
miPerro.ladrar(); // Firulais dice: ¡Guau guau! 
```

📌 Uso de super() para reutilizar el constructor de la clase padre:
```js
class Gato extends Animal {
	constructor(nombre, color) {
		super(nombre) // Llama al constructor de Animal 
		this.color = color
	}

	maullar() {
		console.log(`${this.nombre} dice: ¡Miau!`)
	} 
}

let miGato = new Gato("Michi", "Blanco")
miGato.hacerSonido() // Michi hace un sonido. 
miGato.maullar() // Michi dice: ¡Miau! 
console.log(miGato.color); // Blanco 
```

## 🔹 2. Polimorfismo en JavaScript
✅ El polimorfismo permite que un método tenga diferentes comportamientos según el contexto.
✅ Se logra mediante la sobrescritura (override) de métodos en clases hijas.

📌 Ejemplo de polimorfismo:
```js
class Vehiculo {
	moverse() {
		console.log("El vehículo se está moviendo.")
	} 
}

class Coche extends Vehiculo {
	moverse() {
		console.log("El coche está circulando por la carretera.")
	} 
}

class Barco extends Vehiculo {
	moverse() {
		console.log("El barco está navegando en el agua.")
	} 
}

let miCoche = new Coche()
let miBarco = new Barco()

miCoche.moverse() // El coche está circulando por la carretera. 
miBarco.moverse() // El barco está navegando en el agua. 
```

📌 Uso de polimorfismo con una misma interfaz:
```js 
function moverVehiculo(vehiculo) {
	vehiculo.moverse()
}

moverVehiculo(miCoche) // El coche está circulando por la carretera. 
moverVehiculo(miBarco) // El barco está navegando en el agua. 
```

## 🔹 3. Inyección de Dependencias en JavaScript
✅ La inyección de dependencias (DI) es un patrón que permite pasar objetos como parámetros en lugar de instanciarlos dentro de una clase.
✅ Ayuda a que el código sea más flexible, testeable y reutilizable.

📌 Ejemplo sin inyección de dependencias (mala práctica):
```js 
class Motor {
	encender() {
		console.log("Motor encendido.")
	} 
}

class Coche {
	constructor() {
		this.motor = new Motor() // ❌ Se acopla directamente la dependencia 
	}
	arrancar() {
		this.motor.encender()
	}
}

let auto = new Coche()
auto.arrancar() // Motor encendido. 
```

📌 Ejemplo con inyección de dependencias (buena práctica):
```js
class Motor {
	encender() {
		console.log("Motor encendido.")
	}
}

class Coche {
	constructor(motor) {
		this.motor = motor // ✅ Se pasa como parámetro (inyección de dependencias) 
	}

	arrancar() {
		this.motor.encender()
	} 
}

let miMotor = new Motor()
let auto = new Coche(miMotor) // Se inyecta la dependencia desde fuera 
auto.arrancar() // Motor encendido. 
```

📌 Ventajas de usar inyección de dependencias:
✅ Código más modular y desacoplado.
✅ Facilita pruebas unitarias.
✅ Permite cambiar dependencias sin modificar la clase.

📌 Ejemplo con múltiples dependencias:
```js
class Motor {
	encender() {
		console.log("Motor encendido.")
	} 
}

class Radio {
	encender() {
		console.log("Radio encendida.")
	} 
}

class Coche { 
	constructor(motor, radio) {
		this.motor = motor
		this.radio = radio
}

	arrancar() {
		this.motor.encender()
		this.radio.encender()
}
}

let miMotor = new Motor()
let miRadio = new Radio()
let auto = new Coche(miMotor, miRadio)
auto.arrancar(); // Motor encendido. Radio encendida.
```

## 🔹 4. Práctica Guiada (40 min)
1️⃣ Ejercicio de Herencia:
📌 Crea una clase Empleado con propiedades nombre y salario.
📌 Crea una clase Gerente que herede de Empleado y agregue un bono.

2️⃣ Ejercicio de Polimorfismo:
📌 Crea una clase InstrumentoMusical con un método tocar().
📌 Crea Guitarra y Piano, sobrescribiendo tocar().

3️⃣ Ejercicio de Inyección de Dependencias:
📌 Crea una clase BaseDatos con un método guardar().
📌 Crea una clase UsuarioService que reciba BaseDatos como dependencia.

## 🔹 5. Desafío Final (30 min)
📌 Implementa un sistema de vehículos con herencia, polimorfismo e inyección de dependencias:
✅ Crea una clase base Vehiculo.
✅ Crea Moto y Camion que hereden de Vehiculo.
✅ Usa polimorfismo en moverse().
✅ Usa inyección de dependencias para pasar un motor a Camion.

📌 Ejemplo de salida esperada:
``` La moto se mueve rápidamente. El camión usa su motor diésel y avanza lentamente. ```

## 🔹 6. Cierre y Preguntas (10 min)
✅ Repaso de conceptos clave.
✅ Resolución de dudas.
✅ Desafío extra para casa: Crear una clase Animal con herencia, polimorfismo e inyección de dependencias para el sonido.