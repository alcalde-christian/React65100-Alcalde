# Proyecto final del curso ReactJS de Coderhouse

## Descripción

Este proyecto es una aplicación de comercio electrónico construida con **React** que permite a los usuarios explorar y comprar productos. Incluye funcionalidades como la gestión de un carrito de compras, órdenes de compra, interacción con bases de datos, y carga de productos en función de su categoría. Además, cuenta con una experiencia visual amigable y dinámica, con feedback visual usando `SweetAlert2`.

## Características

- **Catálogo de productos**: Listado de productos desde una base de datos, con opción de ver detalles de cada producto.
- **Carrito de compras**: Agregar y eliminar productos del carrito, calcular el total de la compra.
- **Formularios**: Formulario de checkout que solicita datos del cliente (nombre, correo y teléfono) y genera una orden de compra.
- **Interacción con Firebase**: Conexión con Firebase Firestore para obtener productos y guardar órdenes de compra.
- **Feedback visual con SweetAlert2**: Alertas visuales y notificaciones personalizadas para mejorar la experiencia del usuario.
- **Spinner de carga**: Visualización de un spinner mientras se cargan los datos de productos.
- **React Router**: Navegación entre las diferentes páginas de la aplicación (inicio, detalle de productos, carrito, y checkout).
  
## Tecnologías utilizadas

- **[React](https://react.dev/)**: Librería principal para la construcción de la UI.
- **[React Router DOM](https://reactrouter.com/en/main)**: Para la navegación entre rutas y manejo de URLs dinámicas.
- **[Firebase](https://firebase.google.com/docs/web/setup)**: Base de datos en la nube para gestionar los productos y las órdenes.
  - **[Firestore](https://firebase.google.com/docs/firestore)**: Base de datos NoSQL para almacenar y recuperar productos y órdenes.
- **[CSS Módulos](https://github.com/css-modules/css-modules)**: Estilos encapsulados por componentes, asegurando que no haya colisiones de estilos entre distintas partes de la app.
- **[SweetAlert2](https://sweetalert2.github.io/)**: Librería para mostrar alertas y notificaciones personalizadas.
- **Spinner**: Componente reutilizable para mostrar un spinner mientras los datos están cargando.
- **[Vite](https://vitejs.dev/)**: Herramienta utilizada para crear el proyecto React, por su rapidez en el desarrollo y compilación.


## Dependencias principales

```json
{
  "react": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "firebase": "^9.x.x",
  "sweetalert2": "^11.x.x"
}


