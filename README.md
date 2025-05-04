# PROJECT_BREAK_FINAL_BACK
# 🧶 Tienda Artesanal

Proyecto para BootCamp FullStack desarrollo Project Break del Sprint 23 y 24. 

Consiste en una tienda online de productos artesanales:

· Elaboraciones de crochet
· Encuadernaciones 
· Elaboraciones con bordados
· Cerámica
· Patrones 
· Cursos 

En ella el usuario debe poder:
-registrarse
-iniciar sesión
-visualizar catalogo 
-añadir productos al carrito de compras
-añadir productos a wishlist
-En el caso de administrador desde panel privado: gestión de catálogo, pedidos, estadisticas de venta.

## Funcionalidades principales
- Registro y login de usuario
- Vista de productos y busqueda por categoría
- Carrito de compra (añadir, eliminar, vaciar y finalizar compra(simulada))
- Wishlist
- Panel de admin:
    - Crear y editar productos
    - Gestión de productos, pedidos y cursos
- Persistencia de datos con MongoDB Atlas
- Autenticación JWT (Node + express)
- Frontend en React
- Estilo responsive. Uso de CSS Modules

## Tecnologías utilizadas
**Backend:** 
-Node
-Express
-MongoDB Atlas
**Frontend:**
-React
-CSS Modules
- Vite

**Autenticación:**
-JWT
**Despliegue:**
-Netlify (Front)
-Railway (Back)

## Usuarios y roles

**Admin:**
-Acceso a panel privado (/admin)
-Gestión de productos (crear, editar, eliminar)
-Gestión de pedidos y cursos

**Usuario:**
-Registro
-Login
-Visualización de productos
-Compra de productos
-Wishlist
-Panel user
  ·Visualización historial de pedidos
  ·Wishlist
  ·Datos

## Admin
admin@gmail.com
contraseña:admin

## Users Ejemplo
rosa@gmail.com
contraseña:rosa

sarita@gmail.com
contraseña:sara

## Linea futura

panel admin (pedidos, materiales, cursos pasados, organización agenda)

completar perfil usuario, acceso a pedidos pasados, solicitud de cursos, opcion de solicitar productos elaborados bajo pedido eligiendo entre los materiales disponibles

Perfeccionar adaptación a distintos dispositivos

## Estructura de proyecto 
/Back
  /src
    /controllers
    /middlewares
    /models
    /routes
    index.js
/Front
  /src
    /components
    /context
    /pages
    /services
    App.jsx
    main.jsx

## Enlaces
https://github.com/Rosa-M-FS/project-break-final-front.git

https://github.com/Rosa-M-FS/project-breack-final-back.git

https://rosesartesanalshop.netlify.app/

https://project-breack-final-back-production.up.railway.app/