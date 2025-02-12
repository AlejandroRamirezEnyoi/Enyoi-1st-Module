## Clase: Levantamiento de Requerimientos, Tipos, Técnicas y Documentación
⏳ Duración: 2 horas
📌 Enfoque: 30% teoría - 70% práctica

## 🔹 1. ¿Qué es el levantamiento de requerimientos?
✅ El levantamiento de requerimientos es el proceso de identificación, recopilación y documentación de las necesidades del cliente o usuario para el desarrollo de un sistema o producto.
✅ Es una de las fases más importantes del ciclo de vida del software, ya que define qué debe hacer el sistema.

🔹 Beneficios de un buen levantamiento de requerimientos:

Evita malentendidos entre los desarrolladores y los clientes.
Reduce el riesgo de cambios tardíos y costosos.
Permite estimar tiempos y costos de manera más precisa.
Facilita la validación y verificación del sistema.
## 🔹 2. Tipos de Requerimientos
Los requerimientos se dividen en dos grandes categorías:

Tipo	Descripción	Ejemplo
Funcionales	Definen qué debe hacer el sistema.	"El usuario debe poder registrarse con su correo y contraseña."
No funcionales	Definen restricciones o características de calidad.	"El sistema debe responder en menos de 2 segundos."
📌 Ejemplo en una aplicación web de reservas:
```plaintext 
📌 Requerimiento Funcional: ✅ El usuario debe poder reservar una cita médica a través de la plataforma.

📌 Requerimiento No Funcional: ✅ La plataforma debe garantizar un tiempo de respuesta menor a 1.5 segundos por operación. 
```

## 🔹 3. Técnicas Básicas de Recopilación de Requerimientos
Para obtener información sobre los requerimientos, se pueden aplicar diferentes técnicas:

Técnica	Descripción	Cuándo usarla
Entrevistas	Conversaciones con stakeholders para obtener información detallada.	Cuando se requiere información específica de los usuarios clave.
Cuestionarios	Encuestas estructuradas para recopilar datos de múltiples usuarios.	Cuando hay muchos usuarios y se necesita cuantificar la información.
Observación	Análisis del entorno de trabajo real del usuario.	Cuando se quiere comprender cómo interactúan los usuarios con un sistema actual.
Análisis de documentos	Revisión de documentación existente.	Cuando se trabaja en una mejora de un sistema ya en uso.
Talleres y sesiones de brainstorming	Reuniones colaborativas para definir requerimientos.	Cuando se busca definir requisitos en equipo con varias partes interesadas.
📌 Ejemplo de entrevista con un cliente:
```plaintext 
🗣 Entrevistador: ¿Qué funciones necesita que tenga la aplicación de reservas? 
👨‍💼 Cliente: Necesitamos que los usuarios puedan agendar y cancelar sus citas médicas. 
🗣 Entrevistador: ¿Hay restricciones de horario o días disponibles? 
👨‍💼 Cliente: Sí, solo pueden agendar de lunes a viernes entre 8:00 a 17:00. 
```

## 🔹 4. Documentación Básica: Casos de Uso e Historias de Usuario
Para formalizar los requerimientos, se utilizan distintos documentos:

📌 4.1 Casos de Uso
✅ Un caso de uso describe las interacciones entre el usuario y el sistema.
✅ Se representa con un diagrama UML o con una descripción textual estructurada.

📌 Ejemplo de un caso de uso:
```plaintext 
📌 Caso de Uso: Reservar Cita Médica 
✅ Actor: Usuario registrado 
✅ Descripción: El usuario selecciona un médico, fecha y hora, y confirma la reserva. 
✅ Flujo principal:

El usuario ingresa al sistema.
Busca un médico disponible.
Selecciona la fecha y hora de la cita.
Confirma la reserva.
El sistema envía una confirmación. ✅ Alternativas:
Si no hay horarios disponibles, se muestra un mensaje de error.
Si el usuario cancela la acción, la cita no se reserva. 
```
📌 4.2 Historias de Usuario (Metodología Ágil)
✅ Son descripciones cortas y simples de una funcionalidad desde el punto de vista del usuario.
✅ Se estructuran con la siguiente plantilla:
"Como [rol], quiero [acción], para [beneficio]."

📌 Ejemplo de historia de usuario:
```plaintext 
📌 Historia de Usuario: Reservar una cita médica 
✅ Como usuario registrado, 
✅ Quiero poder reservar una cita médica con un doctor disponible, 
✅ Para recibir atención médica cuando lo necesite. 
```

📌 Ejemplo en una aplicación de e-commerce:
```plaintext 
📌 Historia de Usuario: Realizar una compra 
✅ Como cliente, 
✅ Quiero poder agregar productos al carrito y finalizar mi compra, 
✅ Para recibir mis productos en mi domicilio. 
```

## 🔹 5. Práctica Guiada (40 min)
1️⃣ Ejercicio de Tipos de Requerimientos:
📌 Define 3 requerimientos funcionales y 2 no funcionales para una aplicación de pedidos de comida.

2️⃣ Ejercicio de Técnicas de Recopilación:
📌 Simula una entrevista con un cliente para definir los requisitos de una plataforma de educación en línea.

3️⃣ Ejercicio de Casos de Uso:
📌 Escribe el caso de uso "Registrar un usuario" para un sistema bancario.

4️⃣ Ejercicio de Historias de Usuario:
📌 Crea 3 historias de usuario para una aplicación de reservas de hoteles.

## 🔹 6. Desafío Final (30 min)
📌 Crea una especificación de requerimientos para un sistema de gestión de empleados:
✅ Incluye al menos 4 requerimientos funcionales y 2 no funcionales.
✅ Escribe un caso de uso principal para "Registrar un empleado".
✅ Redacta 2 historias de usuario relevantes.

## 🔹 7. Cierre y Preguntas (10 min)
✅ Repaso de conceptos clave.
✅ Resolución de dudas.
✅ Desafío extra para casa: Redactar un caso de uso para "Generar un reporte de ventas".

