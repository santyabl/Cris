# Velocita RAW // Motor & Lifestyle Studio

Aplicación web interactiva para estudio fotográfico automotriz, expediciones de alta montaña y catálogo técnico de equipamiento motor.

---

## 🚀 Requisitos previos

- **Node.js**: versión 18.0 o superior (recomendado 20.x o superior)
- **npm**, **pnpm**, **yarn** o **bun**

---

## 📦 Cómo exportar desde Google AI Studio

1. **Desde la interfaz de AI Studio**:
   - En la barra superior derecha, haz clic en el botón **"Export"** o **"Download ZIP"** (o en el icono de **GitHub** si prefieres conectar y clonar un repositorio directamente).
   - Extrae el archivo ZIP descargado en la carpeta de tu computadora donde desees trabajar.

---

## 🛠️ Instalación y ejecución local

Abre una terminal en la carpeta raíz del proyecto y ejecuta:

### 1. Instalar dependencias
```bash
npm install
```
*(O `bun install` / `pnpm install` / `yarn` si utilizas otro gestor de paquetes).*

### 2. Variables de entorno (Opcional)
Copia el archivo de ejemplo para configurar tus variables locales si lo necesitas:
```bash
cp .env.example .env
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

El servidor estará disponible en:
👉 **[http://localhost:3000](http://localhost:3000)** (o el puerto indicado en la consola con Vite).

---

## 🏗️ Compilación para producción

Para generar los archivos optimizados de producción:

```bash
npm run build
```

Para previsualizar la compilación de producción localmente:

```bash
npm run preview
```

---

## 📂 Estructura del proyecto

```text
├── index.html                  # Plantilla HTML principal y fuentes (Oswald, Inter, Space Mono)
├── package.json                # Dependencias y scripts de Vite
├── vite.config.ts              # Configuración de Vite y Tailwind CSS v4
├── tsconfig.json               # Configuración de TypeScript
├── src/
│   ├── main.tsx                # Punto de entrada de React
│   ├── App.tsx                 # Enrutador y orquestador de estado de la aplicación
│   ├── index.css               # Estilos globales y tokens de diseño
│   ├── types/
│   │   └── index.ts            # Tipos de TypeScript (Portfolio, Expediciones, Gear, etc.)
│   ├── data/
│   │   └── mockData.ts         # Catálogo de imágenes en CDN, telemetría y especificaciones
│   └── components/
│       ├── Header.tsx          # Barra superior con logo, estado y perfil
│       ├── BottomNav.tsx       # Navegación inferior fija por pestañas
│       ├── RawInspectionModal.tsx # Visor interactivo de telemetría y sensor RAW
│       ├── ProfileModal.tsx    # Modal con bio y maleta técnica del fotógrafo
│       ├── PreorderModal.tsx   # Diálogo de reserva de equipamiento
│       └── screens/
│           ├── PortafolioScreen.tsx   # Pantalla 1: Portafolio y visor editorial
│           ├── ExpedicionesScreen.tsx # Pantalla 2: Bitácora viva y preset Lightroom
│           ├── GearStoreScreen.tsx    # Pantalla 3: Tienda y laboratorio técnico de gear
│           └── ServiciosScreen.tsx    # Pantalla 4: Paquetes y cotización técnica
```

---

## 💡 Tecnologías principales

- **React 19**
- **Vite 8**
- **Tailwind CSS v4**
- **TypeScript**
- **Material Symbols Outlined**
