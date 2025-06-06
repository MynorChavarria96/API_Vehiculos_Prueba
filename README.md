API gestión de vehículos concesionaria.

Este es un backend construido con **Node.js** y **Express**, que gestiona marcas, modelos y vehículos, utilizando **Firebase Firestore** como base de datos. Incluye validaciones con **Joi** para garantizar la calidad de los datos.

**Endpoints principales:**

**Brands**

GET /brands

GET /brands/:id

POST /brands

PUT /brands/:id

DELETE /brands/:id

**Models**

GET /models

GET /models/:id

POST /models

PUT /models/:id

DELETE /models/:id

**Vehicles**

GET /vehicles

GET /vehicles/:id

POST /vehicles

PUT /vehicles/:id

DELETE /vehicles/:id

Descargar el archivo llamado: **postman_Api Vehiculos.json** para utilizar los endpoints desde Postman

*Despliegue en Railway*
El backend está desplegado en Railway, lo que permite que los endpoints estén disponibles públicamente para realizar pruebas y validaciones.

https://apivehiculosprueba-production.up.railway.app/

