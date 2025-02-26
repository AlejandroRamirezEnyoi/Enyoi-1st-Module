# 🔹 Seguridad en SQL Server

🔹 **Objetivo**:
 Aprender los fundamentos de seguridad en bases de datos SQL Server y cómo administrar permisos y roles utilizando SSMS.

🔹 **Duración:** 2 horas  
🔹 **Temas:**
1. Fundamentos de Seguridad en Bases de Datos  
2. Roles y Permisos en SQL Server  
3. Administración de Seguridad en SQL Server Management Studio (SSMS)  
4. Buenas Prácticas de Seguridad en SQL Server

---

## 🔹 1. Fundamentos de Seguridad en Bases de Datos

La seguridad en bases de datos protege la información contra accesos no autorizados, modificaciones indebidas y ataques. Se basa en tres pilares:

- **Autenticación:** Verifica la identidad de quien accede.  
- **Autorización:** Define qué acciones puede realizar cada usuario.  
- **Auditoría:** Registra las acciones para monitoreo y detección de actividades sospechosas.

💡 **Principio del Menor Privilegio:** Cada usuario debe tener solo los permisos necesarios para cumplir sus funciones.

---

## 🔹 2. Roles y Permisos en SQL Server

SQL Server administra la seguridad mediante **roles** que agrupan permisos. Existen roles a nivel de servidor y de base de datos.

### 📌 Roles a Nivel de Servidor
| **Rol**       | **Descripción**                          |
|---------------|------------------------------------------|
| `sysadmin`    | Control total del servidor.              |
| `serveradmin` | Configuración del servidor.              |
| `securityadmin` | Gestión de inicios de sesión y permisos. |

### 📌 Roles a Nivel de Base de Datos
| **Rol**        | **Descripción**                           |
|----------------|-------------------------------------------|
| `db_owner`     | Control total sobre la base de datos.     |
| `db_datareader`| Permite leer datos de la base.            |
| `db_datawriter`| Permite modificar o insertar datos.       |
| `public`       | Permisos básicos para todos los usuarios. |

💡 **Ejemplo: Crear un usuario y asignarlo al rol de lectura**
```sql
CREATE LOGIN usuario_prueba WITH PASSWORD = 'MiContraseñaSegura!';
CREATE USER usuario_prueba FOR LOGIN usuario_prueba;
ALTER ROLE db_datareader ADD MEMBER usuario_prueba;
```

---

## 🔹 3. Administración de Seguridad en SSMS

### 📌 Crear un Nuevo Usuario (Login)
1. Abre **SQL Server Management Studio (SSMS)** y conéctate al servidor.  
2. En el **Explorador de Objetos**, expande la carpeta **Security > Logins**.  
3. Haz clic derecho en **Logins** y selecciona **New Login...**.  
4. Define el nombre del usuario y configura la autenticación (SQL Server o Windows).  
5. Establece la contraseña y, en la pestaña **Server Roles**, asigna los roles adecuados.  
6. En **User Mapping**, asigna el usuario a las bases de datos correspondientes y sus roles.

### 📌 Asignar Permisos Específicos
Puedes otorgar o denegar permisos mediante los comandos `GRANT`, `DENY` y `REVOKE`.

```sql
-- Otorgar permisos de lectura y escritura sobre la tabla Productos
GRANT SELECT, INSERT, UPDATE ON Productos TO usuario_prueba;

-- Denegar el permiso de eliminación en la tabla Productos
DENY DELETE ON Productos TO usuario_prueba;

-- Revocar el permiso de inserción (si ya se otorgó previamente)
REVOKE INSERT ON Productos FROM usuario_prueba;
```

---

## 🔹 4. Buenas Prácticas de Seguridad en SQL Server

- **Utilizar la Autenticación de Windows:** Siempre que sea posible, prefiere Windows Authentication sobre SQL Authentication.  
- **Aplicar el Principio del Menor Privilegio:** Otorga a los usuarios solo los permisos necesarios para sus tareas.  
- **Utilizar Roles en Lugar de Permisos Directos:** Facilita la administración agrupando permisos.  
- **Auditar y Monitorear:** Implementa auditorías para registrar actividades y detectar comportamientos sospechosos.  
- **Cifrar Datos Sensibles:** Usa características como Transparent Data Encryption (TDE) o Always Encrypted para proteger información crítica.  
- **Gestionar los Backups de Forma Segura:** Asegura que las copias de seguridad tengan cifrado y accesos restringidos.

---

## 🔹 5. Actividad Práctica

### 📌 Ejercicio 1: Crear un Usuario y Asignar Permisos
1. En SSMS, crea un nuevo login y usuario llamado `Vendedor1` con SQL Authentication.  
2. Asigna a `Vendedor1` el rol `db_datareader` en la base de datos `Tienda`.  
3. Verifica la conexión con `Vendedor1` para confirmar que puede leer datos pero no modificarlos.

### 📌 Ejercicio 2: Crear un Rol Personalizado y Asignar Permisos
1. En la base de datos `Tienda`, crea un rol llamado `Vendedores`.
2. Otorga permisos al rol `Vendedores` para:
   - Seleccionar datos de la tabla `Productos`.
   - Insertar registros en la tabla `Ventas`.
3. Agrega el usuario `Vendedor1` al rol `Vendedores` con:
```sql
ALTER ROLE Vendedores ADD MEMBER Vendedor1;
```
4. Verifica que `Vendedor1` tiene los permisos asignados.

---