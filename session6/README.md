## Clase: Introducción a Bases de Datos, Tipos y Modelos
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. Introducción a Bases de Datos
✅ Una base de datos es un conjunto organizado de datos que permite almacenar, recuperar y gestionar información de manera eficiente.
✅ Se utilizan en prácticamente todas las aplicaciones modernas, desde redes sociales hasta sistemas bancarios.

📌 ¿Por qué usar bases de datos?
Permiten almacenar grandes cantidades de información.
Facilitan la consulta y recuperación eficiente de datos.
Garantizan consistencia e integridad de los datos.
Permiten la concurrencia, es decir, múltiples usuarios pueden acceder a los datos al mismo tiempo.
📌 Ejemplo de una base de datos en un sistema de ventas:
```plaintext
 Tabla: Clientes
ID	Nombre	Email
1	Ana	ana@mail.com
2	Pedro	pedro@mail.com
```		
## 🔹 2. Tipos de Bases de Datos
Las bases de datos se pueden clasificar en varios tipos según su estructura y cómo organizan los datos:

📌 1. Bases de Datos Relacionales (SQL)
✅ Organizan los datos en tablas con filas y columnas.
✅ Utilizan llaves primarias y foráneas para relacionar datos.
✅ Lenguaje principal: SQL (Structured Query Language).
✅ Ejemplos: MySQL, PostgreSQL, SQL Server, Oracle.

📌 Ejemplo de base de datos relacional (MySQL):
```sql
 CREATE TABLE Clientes ( ID INT PRIMARY KEY, Nombre VARCHAR(50), Email VARCHAR(100) ); INSERT INTO Clientes (ID, Nombre, Email) VALUES (1, 'Ana', 'ana@mail.com'); 
 ```

📌 2. Bases de Datos No Relacionales (NoSQL)
✅ Almacenan datos en formatos flexibles, como documentos JSON, grafos, clave-valor o columnas.
✅ No usan tablas rígidas como en SQL, permitiendo mayor escalabilidad.
✅ Ejemplos: MongoDB, Firebase, Cassandra, Redis.

📌 Ejemplo de base de datos NoSQL (MongoDB):
```json 
{ "ID": 1, "Nombre": "Ana", "Email": "ana@mail.com" } 
```

📌 3. Bases de Datos en Memoria
✅ Diseñadas para acceso ultrarrápido, almacenando datos en RAM.
✅ Útiles para caché y almacenamiento temporal.
✅ Ejemplos: Redis, Memcached.

📌 4. Bases de Datos Distribuidas
✅ Almacenan los datos en múltiples servidores en diferentes ubicaciones.
✅ Permiten manejar altas cargas de datos y garantizar alta disponibilidad.
✅ Ejemplos: Google Spanner, Amazon DynamoDB, Apache Cassandra.

## 🔹 3. Modelos de Bases de Datos
Los datos pueden estructurarse de diferentes formas dependiendo del modelo utilizado.

Modelo	Descripción	Ejemplo
Relacional	Datos organizados en tablas con relaciones entre ellas.	MySQL, PostgreSQL
Jerárquico	Datos organizados en una estructura de árbol (padre-hijo).	IBM IMS
En Red	Similar al jerárquico, pero permite múltiples relaciones entre nodos.	IDMS
Documental	Almacena datos en formato JSON o BSON.	MongoDB, CouchDB
Clave-Valor	Cada registro es un par clave-valor.	Redis, DynamoDB
Columnar	Datos almacenados en columnas en lugar de filas.	Apache Cassandra
📌 Ejemplo de modelo relacional:
``` plaintext 
Tabla: Empleados
ID	Nombre	Departamento
1		Juan		IT
2		María		Ventas

Tabla: Departamentos
ID	Nombre
1		IT
2		Ventas
```	
📌 Ejemplo de modelo documental (MongoDB):
```json 
{ "Empleado": { "ID": 1, "Nombre": "Juan", "Departamento": { "ID": 1, "Nombre": "IT" } } } 
```

## 🔹 4. Práctica Guiada (40 min)
1️⃣ Ejercicio de Tipos de Bases de Datos:
📌 Identifica qué tipo de base de datos sería mejor para:
✅ Un sistema bancario con transacciones.
✅ Una aplicación de redes sociales con millones de usuarios.
✅ Un sistema de caché para acelerar respuestas.

2️⃣ Ejercicio de Modelos de Datos:
📌 Diseña un modelo de base de datos para un sistema de biblioteca:
✅ Define las entidades y sus relaciones.
✅ Usa un diagrama de tablas si es relacional o estructuras JSON si es NoSQL.

3️⃣ Ejercicio de Consultas SQL:
📌 Crea una tabla Productos y agrega registros en SQL.

4️⃣ Ejercicio de Base de Datos NoSQL:
📌 Crea un documento JSON para representar un usuario en MongoDB.

## 🔹 5. Desafío Final (30 min)
📌 Desarrollar un esquema de base de datos para un sistema de reservas de hotel:
✅ Define si es SQL o NoSQL y justifica tu elección.
✅ Diseña las entidades/tablas/documentos necesarios.
✅ Escribe al menos una consulta SQL o estructura JSON de ejemplo.

📌 Ejemplo esperado:
```sql 
CREATE TABLE Reservas ( ID INT PRIMARY KEY, Cliente VARCHAR(50), Habitacion INT, FechaEntrada DATE, FechaSalida DATE ); INSERT INTO Reservas VALUES (1, 'Carlos', 101, '2024-02-01', '2024-02-05'); 
```

📌 Ejemplo en MongoDB:
```json 
{ "ID": 1, "Cliente": "Carlos", "Habitacion": 101, "FechaEntrada": "2024-02-01", "FechaSalida": "2024-02-05" } 
```

## 🔹 6. Cierre y Preguntas (10 min)
✅ Repaso de conceptos clave.
✅ Resolución de dudas.
✅ Desafío extra para casa: Diseñar un esquema de base de datos para una tienda en línea.

