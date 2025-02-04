## Clase: Pensamiento Algorítmico, Tipos de Algoritmos y Depuración
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. Pensamiento Algorítmico (30 min - Teoría + Ejemplos)
### ¿Qué es el pensamiento algorítmico?
✅ Es la capacidad de descomponer problemas y estructurar soluciones en pasos secuenciales.
✅ Se basa en:

Descomposición → Dividir el problema en partes más pequeñas.
Reconocimiento de patrones → Identificar similitudes con problemas anteriores.
Abstracción → Filtrar información irrelevante.
Diseño de algoritmos → Crear una serie de pasos ordenados para resolver el problema.
### Ejemplo de pensamiento algorítmico
📌 Problema: Hacer café ☕
Pasos:

Calentar agua.
Agregar café al filtro.
Verter agua caliente sobre el café.
Esperar que el café se filtre.
Servir en una taza.
📌 Ejemplo en pseudocódigo:
```plaintext Inicio Calentar agua Poner café en el filtro Verter agua caliente sobre el café Esperar filtrado Servir en taza Fin ```

## 🔹 2. Tipos de Algoritmos (30 min - Teoría + Ejemplos)
Los algoritmos pueden clasificarse de diferentes formas:

Tipo	Descripción	Ejemplo
Secuenciales	Siguen una serie de pasos en orden.	Receta de cocina.
Condicionales	Toman decisiones basadas en condiciones.	Si está lloviendo, llevar paraguas.
Iterativos (cíclicos)	Repiten un conjunto de pasos hasta cumplir una condición.	Contar del 1 al 10.
Recursivos	Se llaman a sí mismos para resolver problemas complejos.	Factorial de un número.
### Ejemplo en JavaScript
📌 1. Algoritmo Secuencial
```js 
console.log("Paso 1: Calentar agua")
console.log("Paso 2: Agregar café al filtro")
console.log("Paso 3: Verter agua caliente")
console.log("Paso 4: Esperar filtrado")
console.log("Paso 5: Servir en la taza") 
```

📌 2. Algoritmo Condicional
```js
 	let clima = "lluvia"
 	if (clima === "lluvia") {
		console.log("Lleva un paraguas")
	} else {
		console.log("No necesitas paraguas")
	} 
 ```

📌 3. Algoritmo Iterativo (Bucle for)
```js
 for (let i = 1; i <= 5; i++) {
	console.log("Número: " + i)
	}
  ```

📌 4. Algoritmo Recursivo (Factorial)
```js 
function factorial(n) {
	if (n === 0)
		return 1
	return n * factorial(n - 1)
	}

console.log(factorial(5)) // 120 
```

## 🔹 3. Pruebas y Depuración de Algoritmos (30 min - Teoría + Práctica)
✅ Pruebas → Verificar que el algoritmo funciona correctamente con diferentes entradas.
✅ Depuración → Identificar y corregir errores en el código.

📌 Herramientas para depuración en JavaScript

console.log() → Mostrar valores en la consola.

### Ejemplo: Detectando un error con console.log()
📌 Código con error:
```js 
let x = 10
let y = "5"
console.log(x + y) // ¿Qué resultado esperas? /~ 🔹 Solución: Convertir y a número.
```
```js
console.log(x + Number(y)) // 15 
```

## 🔹 4. Práctica Guiada (30 min)
1️⃣ Ejercicio Secuencial:
📌 Escribe un algoritmo en pseudocódigo que describa cómo hacer un sándwich.

2️⃣ Ejercicio Condicional:
📌 Escribe un programa que reciba una edad y muestre si es menor de edad, adulto o adulto mayor.

3️⃣ Ejercicio Iterativo:
📌 Escribe un programa que imprima los primeros 10 números de la secuencia de Fibonacci.

4️⃣ Ejercicio de Depuración:
📌 Encuentra el error en este código:
```js
let num = 10
if (num = 5) {
	console.log("Es cinco")
	}
else {
	console.log("No es cinco")
	} 
```

## 🔹 5. Desafío Final (30 min)
📌 Crea un algoritmo que:
✅ Pregunte al usuario un número.
✅ Verifique si el número es primo.
✅ Muestra "Es primo" o "No es primo".

Pistas:

Un número primo solo es divisible por 1 y por sí mismo.
Usa un bucle para verificar divisibilidad.
Ejemplo de salida:
/~ Ingrese un número: 7 Es primo /~

## 🔹 6. Cierre y Preguntas (10 min)
✅ Repaso rápido de los conceptos clave.
✅ Resolución de dudas.
✅ Desafío extra para casa: Crear un algoritmo que determine si una palabra es un palíndromo.

