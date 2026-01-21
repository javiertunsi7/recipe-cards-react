# 🍳 RecetasFáciles - Tarjetas con React

Proyecto de práctica de React que implementa un sistema de tarjetas informativas para recetas de cocina, utilizando componentes reutilizables y props.

## 📸 Captura del Proyecto

![alt text](image.png)

## 📋 Descripción

Este proyecto fue desarrollado como práctica de React para el curso de FrontEnd, enfocándose en la creación de componentes reutilizables y el uso de props para pasar información dinámica.

La aplicación muestra una colección de 5 recetas de cocina, cada una presentada en una tarjeta visualmente atractiva que incluye:
- 📸 **Imagen** de la receta
- 🏷️ **Nombre** del platillo
- 🍽️ **Tipo** (Desayuno, Comida, Postre)
- ⏱️ **Tiempo** de preparación
- 📊 **Nivel de dificultad**
- 📝 **Descripción** detallada
- 🔘 **Botón** de acción "Ver Receta"

## 🎯 Requisitos Cumplidos

### ✅ Requisitos Principales
- [x] Componente `Tarjeta.jsx` creado y reutilizable
- [x] Componente usado dentro de `App.jsx`
- [x] Información pasada mediante **props**
- [x] Imágenes mostradas correctamente
- [x] **5 tarjetas** de recetas diferentes
- [x] Tarjetas con contenedor principal, imagen, título y 2-3 textos
- [x] **Clases CSS** bien nombradas y organizadas
- [x] Estilos CSS implementados

### 🌟 Extras Implementados
- [x] Componente `Navbar` con navegación
- [x] Componente `Footer` con información y redes sociales
- [x] **Diseño responsive** completo (móvil, tablet, desktop)
- [x] Animaciones y efectos hover
- [x] Sistema de Grid adaptable
- [x] Paleta de colores profesional

## 🚀 Tecnologías Utilizadas

- **React** 18.3.1
- **Vite** 5.4.2 (Build tool)
- **CSS3** (Flexbox y Grid)
- **JavaScript** ES6+
- **Unsplash** (Imágenes de recetas)

## 📁 Estructura del Proyecto

```
clone_cards/
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   │       ├── brownie.png
│   │       ├── ensalada.png
│   │       └── pancakes.png
│   │       ├── sushi.png
│   │       ├── taco.png
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Tarjeta.jsx
│   ├── styles/
│   │   ├── Footer.css
│   │   ├── Navbar.css
│   │   └── Tarjeta.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 💻 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn
- Git

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
```bash
git clone https://github.com/javiertunsi7/recipe-cards-react.git
cd recetas-faciles-react
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173/
```

5. **Compilar para producción**
```bash
npm run build
```

6. **Vista previa de producción**
```bash
npm run preview
```

## 🎨 Componentes

### 1. Tarjeta.jsx
Componente principal reutilizable que muestra la información de cada receta.

**Props:**
| Prop | Tipo | Descripción |
|------|------|-------------|
| `nombre` | String | Nombre de la receta |
| `tipo` | String | Tipo de platillo (Desayuno, Comida, Postre) |
| `imagen` | String | Clave de identificación de la imagen |
| `tiempo` | String | Tiempo de preparación |
| `dificultad` | String | Nivel de dificultad (Fácil, Media, Difícil) |
| `descripcion` | String | Descripción detallada de la receta |

**Ejemplo de uso:**
```jsx

```

### 2. Navbar.jsx
Componente de barra de navegación superior que incluye:
- Logo con ícono de cocina 🍳
- Nombre de la aplicación "RecetasFáciles"
- Menú de navegación (Inicio, Recetas, Contacto)
- Diseño responsive para móviles

### 3. Footer.jsx
Componente de pie de página que muestra:
- Información de la aplicación
- Enlaces útiles
- Iconos de redes sociales
- Copyright dinámico con el año actual

## 📱 Diseño Responsive

El proyecto está optimizado para diferentes dispositivos:

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Mobile Small**: < 480px

### Características Responsive
- Grid de tarjetas adaptable (3 columnas → 2 columnas → 1 columna)
- Navegación que se reorganiza en pantallas pequeñas
- Imágenes optimizadas con `object-fit: cover`
- Tipografía escalable
- Espaciados ajustables

## 🎨 Clases CSS Principales

### Tarjeta.css
```css
.tarjeta-contenedor         
.tarjeta-imagen-wrapper     
.tarjeta-imagen              
.tarjeta-tipo               
.tarjeta-contenido          
.tarjeta-titulo              
.tarjeta-info               
.tarjeta-info-item           
.tarjeta-descripcion         
.tarjeta-boton               
```

### Convenciones de Nomenclatura
- Uso de **kebab-case** para nombres de clases
- Prefijo consistente `tarjeta-`, `navbar-`, `footer-`
- Nombres descriptivos y semánticos
- Estructura BEM simplificada

## 🎨 Paleta de Colores

```css

--color-principal: #e74c3c;    
--color-secundario: #c0392b;   
--color-fondo: #f8f9fa;        
       
--texto-medio: #555555;        
--texto-claro: #7f8c8d;        


--blanco: #ffffff;
--gris-claro: #f0f0f0;
```

## 🍽️ Recetas Incluidas

1. **Tacos al Pastor** (Comida - Media)
   - Tacos mexicanos con carne marinada
   - Tiempo: 45 minutos

2. **Pancakes Esponjosos** (Desayuno - Fácil)
   - Hot cakes suaves para el desayuno
   - Tiempo: 20 minutos

3. **Brownie de Chocolate** (Postre - Fácil)
   - Brownies húmedos con centro fundido
   - Tiempo: 35 minutos

4. **Ensalada César** (Comida - Fácil)
   - Ensalada fresca con aderezo casero
   - Tiempo: 15 minutos

5. **Sushi Rolls** (Comida - Difícil)
   - Rolls de sushi caseros japoneses
   - Tiempo: 60 minutos

## 🔄 Historial de Commits

```bash
feat: estructura inicial del proyecto con Vite y React
feat: crear componente Tarjeta reutilizable con props
style: implementar estilos CSS para tarjetas con diseño responsive
feat: agregar 5 tarjetas de recetas con información completa
feat: crear componente Navbar con navegación y logo
feat: crear componente Footer con información y redes sociales
style: actualizar estilos globales y animaciones
style: implementar sistema de grid responsive para tarjetas
refactor: optimizar imports y estructura de componentes
docs: crear documentación completa del proyecto en README
```

## 🌟 Características Destacadas

### Interactividad
- **Hover effects**: Las tarjetas se elevan al pasar el mouse
- **Transiciones suaves**: Animaciones CSS en todos los elementos interactivos
- **Zoom en imágenes**: Las imágenes hacen zoom al hacer hover en la tarjeta
- **Botones animados**: Efectos de elevación y sombra en botones

### Accesibilidad
- Alt text descriptivo en todas las imágenes
- Estructura semántica HTML5
- Contraste de colores adecuado
- Navegación por teclado funcional

### Rendimiento
- Imágenes optimizadas desde CDN (Unsplash)
- CSS modular para carga eficiente
- Sin dependencias pesadas
- Build optimizado con Vite


## 🙏 Agradecimientos

- **freeCodeCamp** por la inspiración en el diseño inicial
- **Unsplash** por las imágenes de alta calidad
- **Vite** por la excelente experiencia de desarrollo
- **React** por el framework

---

⭐ **Si te gustó este proyecto, no olvides darle una estrella en GitHub**

📧 **Para dudas o sugerencias, puedes contactarme a través de GitHub**

---

### 📝 Notas de Desarrollo

**Versión**: 1.0.0  
**Última actualización**: Enero 2026  
**Node version**: 14+  
**React version**: 18.3.1  
**Vite version**: 5.4.2