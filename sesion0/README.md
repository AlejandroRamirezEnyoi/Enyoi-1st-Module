# Fundamentos basicos

## 1. Conceptos basicos
### 1.1. ¿Que es un lenguaje de programación?
✅ Un lenguaje de programación es un conjunto de reglas y símbolos que permiten a los programadores dar instrucciones a una computadora. Estas instrucciones se escriben en un formato que la computadora puede entender, pero que también es fácil de leer y entender para los humanos.

ejemplo:
```javascript
console.log('Hola mundo');
```

### 1.2. Tipos de lenguajes de programación

💡 Por nivel:
- **Lenguajes de bajo nivel**: Son lenguajes que están más cerca del lenguaje máquina y son difíciles de leer y escribir. Ejemplos: Ensamblador.
- **Lenguajes de alto nivel**: Son lenguajes que están más cerca del lenguaje humano y son más fáciles de leer y escribir. Ejemplos: JavaScript, Python, Ruby.
💡 Por paradigma:
- **Programación imperativa**: Se basa en la ejecución de instrucciones en un orden específico. Ejemplos: C, Java.
- **Programación declarativa**: Se basa en la descripción de un problema y no en la secuencia de instrucciones. Ejemplos: SQL, Haskell.
- **Programación orientada a objetos**: Se basa en la creación de objetos que contienen datos y métodos. Ejemplos: Java, Python.
- **Programación funcional**: Se basa en la ejecución de funciones puras. Ejemplos: Haskell, Clojure.

### 1.3 Variables y tipos de datos

✅ Una variable es un espacio de memoria que se utiliza para almacenar un valor. Los tipos de datos son las diferentes formas en que se pueden representar los valores en un lenguaje de programación.

Declaración de variables en JavaScript:
```javascript
let nombre = 'Juan';
let edad = 30;
let esMayor = true;
```

Tipos de datos en JavaScript:
- **String**: Cadena de texto. Ejemplo: 'Hola mundo'.
- **Number**: Número. Ejemplo: 42.
- **Boolean**: Valor booleano. Ejemplo: true.
- **Array**: Arreglo de valores. Ejemplo: [1, 2, 3].
- **Object**: Objeto con propiedades. Ejemplo: { nombre: 'Juan', edad: 30 }.

### 1.4 Operadores y expresiones

✅ Los operadores son símbolos que se utilizan para realizar operaciones sobre valores. Las expresiones son combinaciones de valores, variables y operadores que se evalúan para producir un resultado.

Operadores aritméticos en JavaScript:
- **Suma (+)**: Suma dos valores. Ejemplo: 2 + 3.
- **Resta (-)**: Resta dos valores. Ejemplo: 5 - 2.
- **Multiplicación (*)**: Multiplica dos valores. Ejemplo: 3 * 4.
- **División (/)**: Divide dos valores. Ejemplo: 6 / 2.
- **Módulo (%)**: Obtiene el resto de la división de dos valores. Ejemplo: 7 % 3.

Expresiones en JavaScript:
```javascript
let suma = 2 + 3; // 5
```

Operadores de comparación en JavaScript:
- **Igual (==)**: Compara si dos valores son iguales. Ejemplo: 2 == 2.
- **Igual estricto (===)**: Compara si dos valores son iguales y del mismo tipo. Ejemplo: 2 === '2'.
- **Menor que (<)**: Compara si un valor es menor que otro. Ej
- **Menor o igual que (<=)**: Compara si un valor es menor o igual que otro. Ejemplo: 2 <= 3.
- **Mayor o igual que (>=)**: Compara si un valor es mayor o igual que otro. Ejemplo: 3 >= 2.
- **Distinto (!=)**: Compara si dos valores son distintos. Ejemplo: 2 != 3.
- **Distinto estricto (!==)**: Compara si dos valores son distintos y de distinto tipo. Ejemplo: 2 !== '2'.
- **Mayor que (>)**: Compara si un valor es mayor que otro. Ejemplo: 3 > 2.

Operadores lógicos en JavaScript:
- **AND (&&)**: Devuelve true si ambos valores son true. Ejemplo: true && true.
- **OR (||)**: Devuelve true si al menos uno de los valores es true. Ejemplo: true || false.
- **NOT (!)**: Devuelve true si el valor es false. Ejemplo: !false.

### 1.5 Estructuras de control

✅ Las estructuras de control son bloques de código que permiten controlar el flujo de ejecución de un programa. Las estructuras de control más comunes son las siguientes:

- **if**: Permite ejecutar un bloque de código si se cumple una condición.
- **else**: Permite ejecutar un bloque de código si no se cumple la condición de un if.
- **else if**: Permite evaluar múltiples condiciones en un if.
- **switch**: Permite evaluar múltiples casos y ejecutar un bloque de código según el caso.
- **for**: Permite ejecutar un bloque de código un número determinado de veces.
- **while**: Permite ejecutar un bloque de código mientras se cumpla una condición.
- **do while**: Permite ejecutar un bloque de código al menos una vez y luego mientras se cumpla una condición.

Ejemplo de estructura if en JavaScript:
```javascript
let edad = 18;
if (edad >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('Eres menor de edad');
}
```
Ejemplo de estructura switch en JavaScript:
```javascript
let dia = 'lunes';
switch (dia) {
  case 'lunes':
    console.log('Hoy es lunes');
    break;
  case 'martes':
    console.log('Hoy es martes');
    break;
  default:
    console.log('Hoy es otro día');
}
```

Ejemlo de estructura for en JavaScript:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Ejemlo de estructura while en JavaScript:
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

Ejemlo de estructura do while en JavaScript:
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### 1.6 Funciones

✅ Una función es un bloque de código que se puede ejecutar en cualquier momento y desde cualquier lugar. Las funciones pueden recibir parámetros y devolver un valor.

Declaración de una función en JavaScript:
```javascript
function saludar(nombre) {
  return 'Hola ' + nombre;
}
```

Llamada a una función en JavaScript:
```javascript
let saludo = saludar('Juan');
console.log(saludo); // Hola Juan
```

Funciones flecha en JavaScript:
```javascript
let saludar = (nombre) => {
  return 'Hola ' + nombre;
}
```

Funciones anónimas en JavaScript:
```javascript
let saludar = function(nombre) {
  return 'Hola ' + nombre;
}
```

### 1.7 Estructuras de datos

✅ Las estructuras de datos son formas de organizar y almacenar datos en un programa. Algunas estructuras de datos comunes son las siguientes:

- **Array**: Colección ordenada de elementos.
- **Object**: Colección de pares clave-valor.

Creación de un array en JavaScript:
```javascript
let numeros = [1, 2, 3, 4, 5];
```

Acceso a un elemento de un array en JavaScript:
```javascript
let primerNumero = numeros[0];
console.log(primerNumero); // 1
```

Creación de un objeto en JavaScript:
```javascript
let persona = {
  nombre: 'Juan',
  edad: 30
};
```

Acceso a una propiedad de un objeto en JavaScript:
```javascript
let nombre = persona.nombre;
console.log(nombre); // Juan
```

Ejercicio de práctica:
1. Crea una función que reciba un número y devuelva el cuadrado de ese número.
2. Crea una función que reciba un array de números y devuelva la suma de todos los números.
3. Crea una función que reciba un array de números y devuelva el número más grande.
4. Crea una función que reciba un array de números y devuelva el número más pequeño.
5. Crea una función que reciba un array de números y devuelva un array con los números pares.
6. Crea una función que reciba un array de números y devuelva un array con los números impares.
7. Crea una función que reciba un array de números y devuelva un array con los números ordenados de menor a mayor.
8. Crea una función que reciba un array de números y devuelva un array con los números ordenados de mayor a menor.



