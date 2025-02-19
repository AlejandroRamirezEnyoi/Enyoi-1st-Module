## Clase: Manipulación y Modificación de Datos con SQL
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. Introducción a la Manipulación de Datos en SQL
✅ SQL permite modificar, insertar, actualizar y eliminar datos en las tablas de una base de datos.
✅ Las operaciones de manipulación de datos se realizan con los comandos:

INSERT → Agregar datos a una tabla.
UPDATE → Modificar datos existentes.
DELETE → Eliminar registros.
📌 Ejemplo de una tabla Clientes antes de modificar datos:
```plaintext

ID	Nombre	Email	Ciudad
1	Juan	juan@mail.com	Bogotá
2	María	maria@mail.com	Cali
3	Pedro	pedro@mail.com	Medellín
```			
## 🔹 2. Insertar Datos en SQL (INSERT INTO)
✅ Se usa para agregar registros en una tabla.

📌 Ejemplo básico:
```sql 
INSERT INTO Clientes (ID, Nombre, Email, Ciudad) VALUES (4, 'Ana', 'ana@mail.com', 'Barranquilla'); 
```
📌 Insertar múltiples registros:
```sql 
INSERT INTO Clientes (ID, Nombre, Email, Ciudad) VALUES (5, 'Carlos', 'carlos@mail.com', 'Cartagena'), (6, 'Luis', 'luis@mail.com', 'Bucaramanga'); 
```
📌 Insertar datos sin definir todas las columnas:
```sql 
INSERT INTO Clientes (Nombre, Email) VALUES ('Elena', 'elena@mail.com'); 
```
 🔹 Las columnas no definidas toman valores por defecto o NULL.


## 🔹 3. Modificar Datos en SQL (UPDATE)
✅ Se usa para cambiar valores en registros existentes.

📌 Actualizar el email de un cliente:
```sql 
UPDATE Clientes SET Email = 'nuevojuan@mail.com' WHERE ID = 1; 
```

📌 Actualizar la ciudad de todos los clientes de Bogotá a Medellín:
```sql 
UPDATE Clientes SET Ciudad = 'Medellín' WHERE Ciudad = 'Bogotá'; 
```

📌 Actualizar múltiples columnas:
```sql 
UPDATE Clientes SET Email = 'nuevoemail@mail.com', Ciudad = 'Cali' WHERE Nombre = 'Ana'; 
```

## 🔹 4. Eliminar Datos en SQL (DELETE)
✅ Se usa para borrar registros de una tabla.
✅ ¡Cuidado! Si no agregas WHERE, eliminarás todos los registros.

📌 Eliminar un cliente específico:
```sql 
DELETE FROM Clientes WHERE ID = 3; 
```

📌 Eliminar todos los clientes de Medellín:
```sql 
DELETE FROM Clientes WHERE Ciudad = 'Medellín'; 
```

📌 Eliminar todos los registros (⚠️ Peligroso, borra todo de la tabla)
```sql 
DELETE FROM Clientes; 
```

📌 Eliminar todos los registros y resetear el contador de ID (⚠️ Irreversible)
```sql 
TRUNCATE TABLE Clientes; 
``` 
🔹 TRUNCATE borra todos los datos y reinicia los ID AUTO_INCREMENT, pero no elimina la estructura de la tabla.

## 🔹 5. Modificación de Tablas (ALTER TABLE)
✅ Se usa para modificar la estructura de una tabla.
✅ Permite agregar, eliminar o modificar columnas sin perder los datos existentes.

📌 Agregar una nueva columna Telefono a la tabla Clientes:
```sql 
ALTER TABLE Clientes ADD Telefono VARCHAR(15); 
```

📌 Modificar el tipo de dato de una columna:
```sql 
ALTER TABLE Clientes ALTER COLUMN Telefono INT;
```

📌 Renombrar una columna:
```sql 
EXEC sp_rename 'Clientes.Telefono', 'NumeroTelefono', 'COLUMN';
```

📌 Eliminar una columna:
```sql 
ALTER TABLE Clientes DROP COLUMN Telefono; 
```

## 🔹 6. Práctica Guiada (40 min)
1️⃣ Ejercicio de Inserción de Datos:
📌 Inserta 3 nuevos clientes en la base de datos.

2️⃣ Ejercicio de Modificación de Datos:
📌 Cambia la ciudad de un cliente específico.

3️⃣ Ejercicio de Eliminación de Datos:
📌 Borra un cliente con un WHERE específico.

4️⃣ Ejercicio de Alteración de Tablas:
📌 Agrega una columna FechaRegistro a la tabla Clientes y asigna valores.

## 🔹 7. Desafío Final (30 min)
📌 Modifica una base de datos de una tienda online con los siguientes requerimientos:
✅ Agrega una columna Stock a la tabla Productos.
✅ Actualiza los precios de los productos en un 10%.
✅ Elimina un producto específico de la base de datos.
✅ Inserta 5 nuevos productos en la tabla.

📌 Ejemplo de actualización de precios:
```sql 
UPDATE Productos SET Precio = Precio * 1.10; 
```

## 🔹 8. Cierre y Preguntas (10 min)
✅ Repaso de conceptos clave.
✅ Resolución de dudas.
✅ Desafío extra para casa: Diseñar un sistema de ventas con actualización de inventario.

