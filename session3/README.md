## Clase: Programación Orientada a Objetos en JavaScript
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. ¿Qué es la Programación Orientada a Objetos (POO)?
✅ La Programación Orientada a Objetos (POO) es un paradigma de programación basado en el uso de objetos que representan entidades del mundo real.
✅ Cada objeto tiene propiedades (datos) y métodos (acciones).

Principios fundamentales de POO
1️⃣ Encapsulamiento → Agrupar datos y funciones dentro de un objeto.
2️⃣ Abstracción → Ocultar detalles innecesarios y exponer solo lo esencial.
3️⃣ Herencia → Un objeto puede heredar características de otro.
4️⃣ Polimorfismo → Un método puede comportarse de diferentes formas según el contexto.

## 🔹 2. Objetos en JavaScript
✅ Un objeto es una estructura que contiene propiedades y métodos.
✅ En JavaScript, se pueden crear objetos de varias formas:

📌 1. Creación de un objeto literal:
```js 
let persona = {
	nombre: "Alejandro",
	edad: 25,
	saludar: function() {
		console.log("Hola, soy " + this.nombre) } 
};

console.log(persona.nombre); // Alejandro 
persona.saludar(); // Hola, soy Alejandro 
```

📌 2. Creación con new Object():
```js 
let coche = new Object()
coche.marca = "Toyota"
coche.modelo = "Corolla"
coche.mostrarInfo = function() {
	console.log(`Coche: ${this.marca} ${this.modelo}`)
};

coche.mostrarInfo(); // Coche: Toyota Corolla 
```

📌 3. Uso de class (Moderno - ES6)
```js
class Animal {
	constructor(nombre, tipo) {
		this.nombre = nombre
		this.tipo = tipo
	}
	hacerSonido() {
		console.log(`${this.nombre} hace un sonido.`)
	} 
}

let perro = new Animal("Firulais", "Perro"); perro.hacerSonido(); // Firulais hace un sonido. 
```

## 🔹 3. Propiedades y Métodos
✅ Propiedades → Son los atributos de un objeto.
✅ Métodos → Son funciones dentro de un objeto que pueden manipular sus propiedades.

📌 Ejemplo:
```js
class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre
		this.edad = edad 
	}
	saludar() {
		console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`) 
	} 
}

let juan = new Persona("Juan", 30)
juan.saludar()// Hola, soy Juan y tengo 30 años. 
```

📌 Modificación de propiedades
```js 
juan.edad = 31 // Cambiar edad 
console.log(juan.edad) // 31 
```

📌 Métodos con parámetros
```js
class Calculadora {
	sumar(a, b) {
		return a + b
	}
}

let calc = new Calculadora() 
console.log(calc.sumar(5, 3)) // 8 
```

## 🔹 4. Constructores en JavaScript
✅ Un constructor es una función especial dentro de una clase que inicializa las propiedades del objeto.
✅ Se define con el método constructor().

📌 Ejemplo de constructor en una clase:
```js
class Automovil {
	constructor(marca, modelo, año)
		{ 
			this.marca = marca
			this.modelo = modelo
			this.año = año
		}
	mostrarInfo() {
		console.log(`Auto: ${this.marca} ${this.modelo} (${this.año})`)
	}
}
let miAuto = new Automovil("Ford", "Mustang", 2022)
miAuto.mostrarInfo() // Auto: Ford Mustang (2022) 
```

📌 Uso de this para referenciar propiedades:

this.marca → Se refiere a la propiedad marca del objeto que se está creando.
this.modelo → Se refiere a la propiedad modelo del objeto.
## 🔹 5. Práctica Guiada (40 min)
1️⃣ Crear un objeto literal
📌 Define un objeto celular con propiedades marca, modelo y un método llamar().

2️⃣ Crear una clase con constructor
📌 Crea una clase Estudiante con nombre, edad y un método presentarse().

3️⃣ Modificar propiedades de un objeto
📌 Crea un objeto usuario y cambia su edad después de crearlo.

4️⃣ Añadir métodos a una clase
📌 Agrega un método calcularIMC() a una clase Persona que calcule el índice de masa corporal.

## 🔹 6. Desafío Final (30 min)
📌 Crear una clase CuentaBancaria con las siguientes características:
✅ Propiedades: titular, saldo.
✅ Métodos: depositar(monto), retirar(monto), mostrarSaldo().
✅ Restringir los retiros si el saldo es insuficiente.

📌 Ejemplo de uso esperado:
```js 
let cuenta = new CuentaBancaria("Alejandro", 1000)
cuenta.depositar(500)
cuenta.retirar(300)
cuenta.mostrarSaldo() // Saldo actual: 1200
```

## 🔹 7. Cierre y Preguntas (10 min)
✅ Repaso de conceptos clave.
✅ Resolución de dudas.
✅ Desafío extra para casa: Crear una clase Libro con título, autor y un método mostrarInfo().

