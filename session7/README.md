## Clase: Introducción a SQL y SQL Server
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. ¿Qué es SQL?
✅ SQL (Structured Query Language) es un lenguaje diseñado para gestionar y manipular bases de datos relacionales.
✅ Se utiliza para crear, leer, actualizar y eliminar datos dentro de bases de datos estructuradas.

✅ Es compatible con sistemas como MySQL, PostgreSQL, SQL Server y Oracle.
📌 Principales usos de SQL:
    • Consulta de datos (SELECT)
    • Inserción de datos (INSERT)
    • Modificación de datos (UPDATE)
    • Eliminación de datos (DELETE)
    • Definición de estructuras de datos (CREATE TABLE)
📌 Ejemplo básico de consulta SQL:
```sql 
SELECT * FROM Clientes WHERE Ciudad = 'Bogotá';
```

## 🔹 2. ¿Qué es SQL Server?
✅ SQL Server es un sistema de gestión de bases de datos relacional (RDBMS) desarrollado por Microsoft.
✅ Se utiliza en aplicaciones empresariales debido a su robustez, seguridad y escalabilidad.
📌 Características de SQL Server:
    • Transacciones ACID: Garantiza la integridad de los datos.
    • Soporte para procedimientos almacenados.
    • Alto rendimiento y optimización de consultas.
    • Integración con herramientas de Microsoft (Power BI, Azure, etc.).
📌 Ejemplo de conexión a SQL Server desde la terminal en Windows:
```sh 
sqlcmd -S localhost -U sa -P "TuContraseña"
 ```

## 🔹 3. Comandos Básicos en SQL
📌 1. Creación de una base de datos
```sql 
CREATE DATABASE Tienda; 
USE Tienda;
CREATE TABLE Productos ( ID INT PRIMARY KEY, Nombre VARCHAR(100), Precio DECIMAL(10,2) ); 
CREATE TABLE Clientes ( ID INT PRIMARY KEY, Nombre VARCHAR(100), Email VARCHAR(100) UNIQUE );
 CREATE TABLE Ventas ( ID INT PRIMARY KEY, ClienteID INT, ProductoID INT, Fecha DATE, FOREIGN KEY (ClienteID) REFERENCES Clientes(ID), FOREIGN KEY (ProductoID) REFERENCES Productos(ID) ); 
```

📌 2. Insertar datos en tablas
```sql 
INSERT INTO Productos (ID, Nombre, Precio) VALUES (1, 'Laptop', 1200.50); INSERT INTO Clientes (ID, Nombre, Email) VALUES (1, 'Carlos', 'carlos@mail.com'); 
INSERT INTO Ventas (ID, ClienteID, ProductoID, Fecha) VALUES (1, 1, 1, '2024-02-12'); 
```

📌 3. Consultas con SELECT
📌 Seleccionar todos los registros:
```sql
 SELECT * FROM Productos; SELECT * FROM Clientes; SELECT * FROM Ventas; ```
📌 Filtrar datos específicos:
```sql 
SELECT Nombre, Precio FROM Productos WHERE Precio > 1000;
 SELECT Nombre FROM Clientes WHERE Email LIKE '%@gmail.com';
 ```
📌 Unir tablas (JOIN): ***
```sql 
SELECT Clientes.Nombre, Productos.Nombre, Ventas.Fecha FROM Ventas JOIN Clientes ON Ventas.ClienteID = Clientes.ID JOIN Productos ON Ventas.ProductoID = Productos.ID; 
```

📌 4. Modificar y eliminar datos
📌 
```sql 
UPDATE Productos SET Precio = 1150.00 WHERE ID = 1; 
```
📌 Eliminar registros:
```sql 
DELETE FROM Clientes WHERE ID = 1; 
```

## 🔹 4. Práctica Guiada (40 min)
1️⃣ Ejercicio de Creación de Tablas:
📌 Crea una base de datos llamada Biblioteca con las tablas Libros, Usuarios y Prestamos.
2️⃣ Ejercicio de Inserción de Datos:
📌 Inserta 3 libros y 3 usuarios en la base de datos.
3️⃣ Ejercicio de Consultas:
📌 Obtén todos los libros prestados por un usuario en específico.
4️⃣ Ejercicio de JOIN:
📌 Crea una consulta que muestre el nombre del usuario y los libros que ha prestado.

## 🔹 5. Desafío Final (30 min)
📌 Desarrollar un esquema SQL para un sistema de facturación:
✅ Define las tablas Clientes, Productos, Facturas y DetallesFactura.
✅ Inserta datos en las tablas.
✅ Escribe una consulta que muestre el total de cada factura.
📌 Ejemplo de salida esperada:
```sql 
SELECT Facturas.ID, Clientes.Nombre, SUM(Productos.Precio) AS Total FROM Facturas JOIN Clientes ON Facturas.ClienteID = Clientes.ID JOIN DetallesFactura ON Facturas.ID = DetallesFactura.FacturaID JOIN Productos ON DetallesFactura.ProductoID = Productos.ID GROUP BY Facturas.ID, Clientes.Nombre; 
```

## 🔹 6. Cierre y Preguntas (10 min)
✅ Repaso de conceptos clave.
✅ Resolución de dudas.
✅ Desafío extra para casa: Crear un esquema de base de datos para un sistema de reservas de vuelos.
