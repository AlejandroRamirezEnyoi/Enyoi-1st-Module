## Clase: Asincronismo en JavaScript – Callbacks, Callback Hell, Promesas y Async/Await
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría – 70% práctica

## 1. Introducción al Asincronismo en JavaScript
JavaScript es un lenguaje de programación no bloqueante y basado en eventos. Esto significa que, para tareas que requieren tiempo (como peticiones a un servidor, lecturas de archivos, temporizadores, etc.), se usan técnicas asincrónicas para no detener la ejecución del resto del código.

Bloqueante vs. No bloqueante:
Bloqueante: Se espera a que la tarea finalice.
No bloqueante: Se delega la tarea y se continúa ejecutando el programa.
Motivación: Mejorar la experiencia de usuario y el rendimiento, evitando que la aplicación se “congele”.
## 2. Callbacks
Los callbacks son funciones que se pasan como argumento a otras funciones para ejecutarse una vez finalizada una tarea asincrónica.

2.1 Ejemplo Básico de Callback
```js 
function saludar(nombre, callback) { 
	console.log("Hola, " + nombre + "!")
	callback()
}

function despedirse() {
	console.log("Adiós!") 
}

saludar("Juan", despedirse) 
// Salida: 
// Hola, Juan! 
// Adiós! 
```

2.2 Explicación
La función saludar recibe un nombre y una función callback.
Una vez que imprime el saludo, llama a la función callback para continuar con otra acción (en este caso, despedirse).
## 3. Callback Hell
El Callback Hell (infierno de callbacks) ocurre cuando se encadenan múltiples callbacks anidados, lo que resulta en código difícil de leer y mantener.

3.1 Ejemplo de Callback Hell
```js 
obtenerUsuario(1, function(usuario) {
	obtenerPedidos(usuario.id, function(pedidos)
		{ obtenerDetallePedido(pedidos[0].id, function(detalle) {
			console.log("Detalle del primer pedido:", detalle);
		})
	}) 
})
```

3.2 Problemas
Código anidado y difícil de seguir.
Manejo de errores complicado, ya que cada nivel debe controlar sus propios errores.
Mantenimiento y escalabilidad reducidos.
## 4. Promesas
Las promesas son objetos que representan el eventual resultado (éxito o fracaso) de una operación asincrónica, permitiendo encadenar operaciones y manejar errores de manera más limpia.

4.1 Creación y Uso de una Promesa
```js 
function obtenerUsuario(id) {
	return new Promise((resolve, reject) => { 
		// Simula una operación asincrónica 
		setTimeout(() => {
			if (id > 0) {
				resolve({
					id: id, nombre: "Juan" 
				})
			} 
			else {
				reject("ID inválido") 
			} 
		}, 1000) 
	})
}

obtenerUsuario(1) 
	.then(usuario => {
		console.log("Usuario obtenido:", usuario)
		return usuario
	}) 
	.catch(error => {
		console.error("Error:", error)
	}) 
```

4.2 Encadenar Promesas (Chaining)
```js 
function obtenerPedidos(usuarioId) { 
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([{ id: 101, total: 50.0 }, { id: 102, total: 75.0 }]) 
		}, 1000)
	}) 
}

obtenerUsuario(1) 
	.then(usuario => {
		console.log("Usuario:", usuario)
		return obtenerPedidos(usuario.id) 
	}) 
	.then(pedidos => { 
		console.log("Pedidos:", pedidos)
	}) 
	.catch(error => { 
		console.error("Error en la cadena de promesas:", error)
	}) 
	```

4.3 Ventajas de las Promesas
Código más limpio y lineal que los callbacks anidados.
Manejo centralizado de errores mediante catch().
Facilitan la lectura y el mantenimiento.
## 5. Async/Await
Async/Await es la forma más moderna y limpia de trabajar con operaciones asincrónicas, permitiendo escribir código que se parece a código síncrono, pero que maneja promesas en el fondo.

5.1 Ejemplo de Async/Await
```js 
async function procesarDatos() { 
	try { 
		const usuario = await obtenerUsuario(1)
		console.log("Usuario obtenido:", usuario)
		const pedidos = await obtenerPedidos(usuario.id)
		console.log("Pedidos obtenidos:", pedidos)
	} 
	catch (error) { 
		console.error("Error:", error) 
	} 
}

procesarDatos()
```

5.2 Explicación
La palabra clave async declara una función asincrónica.
Dentro de la función, await se usa para esperar a que una promesa se resuelva antes de continuar.
El bloque try/catch permite capturar errores de manera sencilla, similar al manejo de excepciones en código síncrono.

## 6. Ver el flujo
Abre en tu navegador el siguiente link https://www.jsv9000.app/ y analiza, paso a paso cada una de las lineas de tu codigo, para ver su flujo y orden de ejecución. 
Es un muy buen sandbox para entender asincronismos, tambien te podria interesar profundizar más sobre conceptos como: Event loop, Queue, micro y macro tareas, callstack.

## 7. Práctica (40 min)

Ejercicio 1: Callback Básico
Crea una función que simule obtener datos de un servidor usando setTimeout y llame a un callback una vez finalizado.
Ejercicio 2: Callback Hell
Encadena tres operaciones asincrónicas utilizando callbacks.
Luego, discute cómo se podría mejorar usando promesas.
Ejercicio 3: Promesas
Convierte las funciones del ejercicio anterior en promesas y encádelas con .then() y .catch().
Ejercicio 4: Async/Await
Reescribe la cadena de promesas utilizando async/await.
Verifica el manejo de errores con try/catch.
## 8. Desafío Final (30 min)

Desarrolla una aplicación simple que simule la consulta de un usuario, sus pedidos y el detalle de un pedido utilizando promesas y async/await.
Compara ambos métodos y explica las ventajas y desventajas de cada uno.
