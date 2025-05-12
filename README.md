# 📚 Proyecto de Biblioteca - Backend y Frontend

Este proyecto consta de dos partes:

- 🖥️ **Backend** (Node.js + PostgreSQL en Docker)
- 🌐 **Frontend** (Vite + React)

---

## 🚀 Requisitos previos

- Tener instalado **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**.
- Tener instalado **Node.js (v18 o superior)** y **npm** (para el frontend).

---

## ⚙️ Cómo correr el Backend

1. **Clonar el repositorio**

```bash
git clone https://github.com/G1LB3T0/Proyecto3_BD.git
cd /Back_End
```

2. **Construir e iniciar los contenedores**

```bash
docker compose up --build
```

Esto levantará automáticamente:
- Un contenedor de PostgreSQL con la base de datos inicializada usando tu archivo `init.sql`.
- El backend en Node.js usando Express y Prisma, ya conectado a la base de datos.

> ⏳ Espera unos segundos a que todo cargue y el backend quedará accesible por defecto en `http://localhost:3000`.

---

## 🌐 Cómo correr el Frontend

1. **Abrir otra terminal y moverse a la carpeta del frontend:**

```bash
cd /Front_End
```

2. **Instalar Vite (si aún no lo tienes):**

```bash
npm install -g vite
```

3. **Instalar dependencias del proyecto:**

```bash
npm install
```

4. **Levantar el servidor de desarrollo:**

```bash
npm run dev
```

La app estará disponible en:

```
http://localhost:5173/
```

---

## 🧪 Verificar funcionamiento

- Backend corriendo: [http://localhost:3000/reportes/accesos](http://localhost:3000/reportes/accesos)
- Frontend corriendo: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Notas adicionales

- El backend usa Prisma conectado a PostgreSQL, ya configurado para producción local.
- Los datos se cargan automáticamente al construir los contenedores (gracias al `init.sql`).
- Para reiniciar todo desde cero, puedes usar:

```bash
docker compose down -v
docker compose up --build
```

---
