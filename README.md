# API Gestión de Vehículos Concesionaria

Este es un backend construido con Node.js y Express, que gestiona marcas, modelos y vehículos, utilizando Firebase Firestore como base de datos. Incluye validaciones con Joi para garantizar la calidad de los datos.

## Tecnologías Utilizadas

- Node.js
- Express.js
- Firebase/Firestore (Base de datos)
- Joi (Validación de datos)

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (Node Package Manager)
- Una cuenta en Firebase y un proyecto configurado

## Configuración del Proyecto

1. Clonae el repositorio:
```bash
git clone [url-del-repositorio]
cd backend_vehiculos
```

2. Instala las dependencias:
```bash
npm install
```

3. Configurar Firebase:
   - Verificar que la configuración en `src/config/firebase.js` 
  
4. Variables utilizadas
FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_EMAIL


## Características

- CRUD completo para vehículos
- Gestión de marcas y modelos
- Validación de datos con Joi
- Almacenamiento en Firestore

## API Endpoints

### Marcas (Brands)
- GET /brands - Obtener todas las marcas
- GET /brands/:id - Obtener una marca específica
- POST /brands - Crear una nueva marca
- PUT /brands/:id - Actualizar una marca
- DELETE /brands/:id - Eliminar una marca

### Modelos (Models)
- GET /models - Obtener todos los modelos
- GET /models/:id - Obtener un modelo específico
- POST /models - Crear un nuevo modelo
- PUT /models/:id - Actualizar un modelo
- DELETE /models/:id - Eliminar un modelo

### Vehículos (Vehicles)
- GET /vehicles - Obtener todos los vehículos
- GET /vehicles/:id - Obtener un vehículo específico
- POST /vehicles - Crear un nuevo vehículo
- PUT /vehicles/:id - Actualizar un vehículo
- DELETE /vehicles/:id - Eliminar un vehículo

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
npm start
```

El servidor se iniciará por defecto en `http://localhost:3000`

## Documentación y Pruebas

### Colección de Postman
La colección de Postman con todos los endpoints está disponible en el archivo `postman_Api Vehiculos.json`. Descarga este archivo para probar todos los endpoints desde Postman.

### Despliegue en Railway
El backend está desplegado en Railway, lo que permite que los endpoints estén disponibles públicamente para realizar pruebas y validaciones.

URL de la API: [https://apivehiculosprueba-production.up.railway.app/](https://apivehiculosprueba-production.up.railway.app/)

