## Clase: DQL, Funciones SQL y Optimización de Consultas en SQL Server
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. Introducción a DQL (Data Query Language)
✅ DQL es el conjunto de comandos en SQL que permiten consultar y recuperar datos de la base de datos.
✅ Comandos principales de DQL:

SELECT → Recuperar datos.

WHERE → Filtrar registros.

ORDER BY → Ordenar resultados.

GROUP BY → Agrupar datos similares.

HAVING → Filtrar después de agrupar.

JOIN → Unir tablas.
## 🔹 2. Comandos Básicos de DQL

📌 2.1 SELECT - Obtener Datos
Obtener todos los registros de la tabla Clientes:
```sql 
SELECT * FROM Clientes;
``` 
Obtener solo Nombre y Email:
```sql 
SELECT Nombre, Email FROM Clientes;
```

📌 2.2 WHERE - Filtrar Datos
Clientes de Bogotá:
```sql 
SELECT * FROM Clientes WHERE Ciudad = 'Bogotá';
```
Filtrar por múltiples condiciones:
```sql 
SELECT * FROM Ventas WHERE Precio > 500 AND ClienteID = 1; 
```

📌 2.3 ORDER BY - Ordenar Resultados
Ordenar productos del más caro al más barato:
```sql 
SELECT * FROM Productos ORDER BY Precio DESC; 
```

📌 2.4 GROUP BY - Agrupar Datos y Contar Registros
Cantidad de ventas por cliente:
```sql 
SELECT ClienteID, COUNT(*) AS TotalVentas FROM Ventas GROUP BY ClienteID; 
```
🔹 Ejemplo de salida:

| ClienteID | TotalVentas |
|-----------|------------|
| 1         | 3          |
| 2         | 1          |
| 3         | 2          |

📌 2.5 HAVING - Filtrar Grupos
Mostrar clientes con más de 2 compras:
```sql 
SELECT ClienteID, COUNT(*) AS TotalVentas FROM Ventas GROUP BY ClienteID HAVING COUNT(*) > 2; 
```
 🔹 Salida: Solo muestra ClienteID con más de 2 compras.

## 🔹 3. Funciones en SQL Server

✅ SQL Server incluye muchas funciones que ayudan a procesar cadenas de texto, realizar cálculos numéricos y manejar fechas.

📌 3.1 Funciones de Cadenas (Strings)

| Función |	Descripción |	Ejemplo |
|---------|-------------|---------|
| UPPER(campo) |	Convierte a mayúsculas |	UPPER(Nombre) |
| LOWER(campo) |	Convierte a minúsculas |	LOWER(Email) |
| LEN(campo) |	Devuelve la longitud de una cadena |	LEN(Nombre) |
| CONCAT(campo1, campo2) |	Une cadenas |	CONCAT(Nombre, ' ', Apellido) |
| SUBSTRING(campo, inicio, longitud) |	Extrae parte de una cadena |	SUBSTRING(Email, 1, 5) |

🔹 Ejemplo de Uso:
```sql 
SELECT Nombre, UPPER(Nombre) AS NombreMayus, LOWER(Email) AS EmailMinus FROM Clientes; 
```

📌 3.2 Funciones Numéricas

| Función |	Descripción |	Ejemplo |
|---------|-------------|---------|
| ABS(numero) |	Valor absoluto |	ABS(-15) → 15 |
| ROUND(numero, decimales) |	Redondea un número |	ROUND(12.3456, 2) → 12.35 |
| CEILING(numero) |	Redondea hacia arriba |	CEILING(12.3) → 13 |

🔹 Ejemplo de Uso:
```sql 
SELECT Producto, Precio, ROUND(Precio, 1) AS PrecioRedondeado FROM Productos; 
```

📌 3.3 Funciones de Fechas

| Función |	Descripción |	Ejemplo |
|---------|-------------|---------| 
| GETDATE() |	Fecha y hora actual |	GETDATE() |
| DATEADD(intervalo, cantidad, fecha) |	Suma o resta tiempo |	DATEADD(DAY, 7, GETDATE()) |
| DATEDIFF(intervalo, fecha1, fecha2) |	Diferencia entre dos fechas |	DATEDIFF(YEAR, '2000-01-01', GETDATE()) |

🔹 Ejemplo de Uso:
```sql 
SELECT GETDATE() AS FechaActual, DATEADD(MONTH, 1, GETDATE()) AS ProximoMes; 
```

## 🔹 4. Optimización de Consultas SQL Server

📌 4.1 Evitar SELECT *
❌ Ineficiente
```sql
 SELECT * FROM Productos; 
``` 
✅ Optimizado
```sql 
SELECT Nombre, Precio FROM Productos; 
```
🔹 Evita traer columnas innecesarias y mejora el rendimiento.

📌 4.2 Uso de Índices (CREATE INDEX)
Si Clientes.Email se usa en WHERE, agrega un índice:
```sql 
CREATE INDEX idx_clientes_email ON Clientes (Email); 
```
🔹 Mejora la velocidad de búsqueda en consultas filtradas.

📌 4.3 Analizar Consultas con EXPLAIN
```sql 
EXPLAIN SELECT * FROM Ventas WHERE FechaVenta >= '2024-01-01';
```
🔹 Muestra cómo SQL Server ejecuta la consulta y sugiere mejoras.

📌 4.4 Evitar Subconsultas Innecesarias
❌ Consulta ineficiente:
```sql 
SELECT Nombre FROM Clientes WHERE ID = (SELECT ID FROM Clientes WHERE Email = 'juan@mail.com'); 
```
✅ Mejor consulta:
```sql 
SELECT Nombre FROM Clientes WHERE Email = 'juan@mail.com';
```

## 🔹 5. Práctica Guiada (40 min)
1️⃣ Ejercicio de Funciones de Cadenas:

📌 Obtén todos los nombres de clientes en mayúsculas.

2️⃣ Ejercicio de Funciones Numéricas:

📌 Redondea los precios de los productos a 2 decimales.

3️⃣ Ejercicio de Optimización:

📌 Usa EXPLAIN para analizar una consulta y agregar un índice.
