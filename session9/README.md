## Clase: Restricciones y Desencadenadores en SQL Server
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. Restricciones en SQL Server
✅ Las restricciones (constraints) en SQL Server garantizan la integridad de los datos al definir reglas en las tablas.
✅ Se aplican al crear una tabla con CREATE TABLE o al modificarla con ALTER TABLE.

📌 Tipos de Restricciones
| Restriccion | Descripcion                               | Ejemplo            |   
|-------------|-------------------------------------------|--------------------|
| PRIMARY KEY | Identifica un registro único en la tabla. | ID INT PRIMARY KEY |
| FOREIGN KEY | Relaciona una tabla con otra.             | FOREIGN KEY (ClienteID) REFERENCES Clientes(ID) |
| NOT NULL    | Obliga a que una columna tenga siempre un valor. | Nombre VARCHAR(100) NOT NULL  |
| UNIQUE      | Garantiza que los valores de una columna sean únicos. | Email VARCHAR(100) UNIQUE |
| CHECK       | Restringe los valores de una columna según una condición. | Edad INT CHECK (Edad >= 18) |
| DEFAULT	    | Asigna un valor por defecto si no se proporciona uno.     | FechaRegistro DATETIME DEFAULT GETDATE()   |


📌 1.1 Creación de una Tabla con Restricciones
```sql 
CREATE TABLE Clientes ( ID INT PRIMARY KEY, Nombre VARCHAR(100) NOT NULL, Email VARCHAR(100) UNIQUE, Edad INT CHECK (Edad >= 18), FechaRegistro DATETIME DEFAULT GETDATE() ); 
```

📌 Insertar un registro correcto:
```sql 
INSERT INTO Clientes (ID, Nombre, Email, Edad) VALUES (1, 'Juan', 'juan@mail.com', 25);
```

📌 Intentar insertar un registro con edad inválida (FALLARÁ):
```sql 
INSERT INTO Clientes (ID, Nombre, Email, Edad) VALUES (2, 'Ana', 'ana@mail.com', 15); -- Error: Violación de la restricción CHECK 
```

📌 1.2 Agregar Restricciones a una Tabla Existente (ALTER TABLE)
📌 Agregar NOT NULL a una columna existente:
```sql 
ALTER TABLE Clientes ALTER COLUMN Nombre VARCHAR(100) NOT NULL; 
```

📌 Agregar una clave foránea (FOREIGN KEY):
```sql 
ALTER TABLE Ventas ADD FOREIGN KEY (ClienteID) REFERENCES Clientes(ID);
```

📌 Eliminar una restricción (DROP CONSTRAINT):
```sql 
ALTER TABLE Clientes DROP CONSTRAINT FK_Clientes_Ventas;
```

## 🔹 2. Desencadenadores (Triggers) en SQL Server
✅ Un desencadenador (trigger) es un bloque de código que se ejecuta automáticamente cuando ocurre un evento en la base de datos.
✅ Se usa para auditar cambios, validar datos y automatizar procesos.

📌 2.1 Tipos de Triggers en SQL Server

		
		
		
		
| Tipo				 | Descripcion                                | Se ejecuta cuando...            |
|--------------|--------------------------------------------|---------------------------------|
| AFTER INSERT | Se activa después de insertar un registro. | INSERT                          |
| AFTER UPDATE | Se activa después de actualizar un registro. | UPDATE                        |
| AFTER DELETE | Se activa después de eliminar un registro. | DELETE                          |
| INSTEAD OF | Reemplaza la operación antes de ejecutarse. | INSERT, UPDATE, DELETE           |
📌 2.2 Creación de un Trigger para Registrar Cambios
📌 Ejemplo: Registrar en una tabla cada vez que se inserta un cliente.
```sql 
CREATE TABLE HistorialClientes ( ID INT IDENTITY(1,1) PRIMARY KEY, ClienteID INT, Nombre VARCHAR(100), Email VARCHAR(100), FechaRegistro DATETIME DEFAULT GETDATE() );

CREATE TRIGGER trg_AfterInsertClientes
ON Clientes
AFTER INSERT
AS
BEGIN
INSERT INTO HistorialClientes (ClienteID, Nombre, Email)
SELECT ID, Nombre, Email FROM inserted;
END; 
```

📌 Insertar un cliente y ver el historial:
```sql 
INSERT INTO Clientes (ID, Nombre, Email, Edad) VALUES (3, 'Luis', 'luis@mail.com', 30); 
SELECT * FROM HistorialClientes; -- Verifica el registro guardado 
```

📌 2.3 Crear un Trigger para Evitar Eliminaciones
📌 Evitar que se eliminen clientes accidentalmente.
```sql 
CREATE TRIGGER trg_PreventDeleteClientes ON Clientes INSTEAD OF DELETE AS BEGIN PRINT 'No se permite eliminar clientes.';
 END; 
 ```

📌 Intentar eliminar un cliente (FALLARÁ):
```sql 
DELETE FROM Clientes WHERE ID = 1;
```
 🔹 SQL Server mostrará:

No se permite eliminar clientes.
📌 2.4 Crear un Trigger para Validar Datos en una Venta
📌 Evitar que una venta se registre con un cliente que no existe.
```sql 
CREATE TRIGGER trg_VerificarClienteVenta ON Ventas AFTER INSERT AS BEGIN IF NOT EXISTS (SELECT 1 FROM Clientes WHERE ID IN (SELECT ClienteID FROM inserted)) BEGIN RAISERROR ('El cliente no existe.', 16, 1); ROLLBACK TRANSACTION;
 END; 
 END;
```

📌 Intentar registrar una venta con un cliente inexistente (FALLARÁ):
```sql 
INSERT INTO Ventas (ID, ClienteID, ProductoID, Fecha) VALUES (1, 999, 2, '2024-02-12'); 
```
🔹 SQL Server mostrará:

El cliente no existe.
## 🔹 3. Práctica Guiada (40 min)
1️⃣ Ejercicio de Restricciones:
📌 Crea una tabla Pedidos con restricciones:
✅ ID como PRIMARY KEY.
✅ ClienteID como FOREIGN KEY referenciando Clientes.
✅ Total debe ser mayor a 0 (CHECK).

2️⃣ Ejercicio de Triggers:
📌 Crea un trigger que:
✅ Evite la inserción de pedidos con un total menor a 0.
✅ Registre cada inserción en una tabla HistorialPedidos.

3️⃣ Ejercicio de Auditoría:
📌 Crea un trigger que guarde en una tabla CambiosClientes cada vez que se actualiza un Email.

## 🔹 4. Desafío Final (30 min)
📌 Crea un sistema de control de inventario con restricciones y triggers:
✅ La tabla Productos debe tener una restricción CHECK para evitar precios negativos.
✅ Cada vez que se inserte una compra en Ventas, debe actualizarse el stock en Productos.
✅ Si el stock es menor a 5, registrar un aviso en una tabla AlertasStock.

📌 Ejemplo de actualización de stock en Productos:
```sql 
CREATE TRIGGER trg_ActualizarStock ON Ventas AFTER INSERT AS BEGIN UPDATE Productos SET Stock = Stock - (SELECT COUNT(*) FROM inserted WHERE ProductoID = Productos.ID) WHERE ID IN (SELECT ProductoID FROM inserted);
END;
```

## 🔹 5. Cierre y Preguntas (10 min)
✅ Repaso de conceptos clave.

✅ Resolución de dudas.

✅ Desafío extra para casa: Crear un trigger que notifique cuando un cliente haga su primera compra.