Sistema de Reservas

Descripción General
Este proyecto consiste en el desarrollo de un sistema de reservas para una sala de eventos, utilizando Node.js como framework backend. El objetivo es permitir a los usuarios consultar horarios disponibles y realizar reservas, mientras que los administradores pueden gestionar las mismas desde el servidor.

---

Objetivos
- Configurar correctamente el entorno de desarrollo backend con Node.js.  
- Levantar un servidor básico con un endpoint de prueba (`/` o `/hello`) para verificar la correcta ejecución local.  
- Implementar el flujo de trabajo GitFlow usando GitKraken.  
- Documentar la estructura y estándares del proyecto mediante este README.  
- Sentar las bases para la posterior ampliación del sistema de reservas.

---

Requerimientos del Proyecto
- Sistema Operativo: Windows 11 (o similar actualizado).  
- Node.js versión 18+  
- Git & GitKraken para control de versiones.  
- Editor de Código: Visual Studio Code.  
- Navegador web: Chrome o Firefox.  
- Conexión a Internet activa.  
- Cuenta en GitHub para la gestión del repositorio remoto.

---

Arquitectura Seleccionada
La arquitectura del proyecto está basada en una estructura simple por capas


- Servidor: Node.js con Express.  
- Control de versiones: Git + GitKraken con GitFlow.  
- Ejecución local: `http://localhost:3000/`

---

Estándares de Codificación
- Nombres de variables y funciones en camelCase.  
- Rutas RESTful con verbos HTTP adecuados (GET, POST, PUT, DELETE).  
- Commits frecuentes y con mensajes descriptivos.  
- Comentarios claros y consistentes en el código.  
- Estructura modular separando rutas, controladores y modelos.

---

Flujo de Trabajo GitFlow
Se aplicará GitFlow utilizando GitKraken para organizar el desarrollo:

- main → Rama principal con versiones estables.  
- develop → Rama de integración.  
- feature/ → Ramas de desarrollo de funcionalidades (ej. `feature/reservas`, `feature/rutas`).

Pasos básicos:  
1. Clonar el repositorio desde GitHub.  
2. Habilitar GitFlow en GitKraken.  
3. Crear rama feature para iniciar cada tarea.  
4. Realizar commits frecuentes y claros.  
5. Fusionar feature → develop al finalizar cada funcionalidad.  
6. Fusionar develop → main cuando haya una versión estable.

---

Instrucciones de Ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/SistemaReservas.git

👥 Equipo de Trabajo

Boris Rengel: Responsable de Backend y Configuración.

José Encalada: Responsable Backend y Documentación.

