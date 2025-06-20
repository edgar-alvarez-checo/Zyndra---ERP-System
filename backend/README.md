# Zyndra Backend

Este es el backend del sistema Zyndra, desarrollado en Node.js con TypeScript, Express y Prisma ORM.

## Requisitos

- Node.js >= 18
- PostgreSQL
- Yarn o npm

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL-del-repo>
   cd backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:
   - Copia el archivo `.env.example` a `.env` y completa los valores necesarios.

4. Aplica las migraciones y genera el cliente de Prisma:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

## Scripts útiles

- `npm run dev` — Inicia el servidor en modo desarrollo con recarga automática.
- `npm run build` — Compila el proyecto a JavaScript.
- `npm start` — Ejecuta el servidor en producción.
- `npm run prisma:studio` — Abre Prisma Studio para explorar la base de datos.

## Estructura del proyecto

```
backend/
├── src/
│   ├── config/
│   ├── modules/
│   ├── middlewares/
│   ├── shared/
│   ├── docs/
│   ├── database/
│   ├── app.ts
│   └── server.ts
├── tests/
├── .env
├── package.json
├── tsconfig.json
├── Dockerfile
└── docker-compose.yml
```

- **src/modules/**: Contiene los módulos principales (usuarios, empleados, productos, etc).
- **src/middlewares/**: Middlewares personalizados.
- **src/config/**: Configuración de la app y de Prisma.
- **src/database/**: Conexión y utilidades de base de datos.
- **src/docs/**: Documentación de la API.
- **tests/**: Pruebas unitarias y de integración.

## Uso con Docker

Puedes levantar el backend y la base de datos con Docker Compose:

```bash
docker-compose up --build
```

## Endpoints principales

- `/users`
- `/employees`
- `/products`
- `/sales`
- `/suppliers`
- `/customers`
- `/purchase_orders`
- `/payments`
- `/shipments`
- `/auth`

Consulta la documentación en `src/docs` para más detalles.

## Licencia

MIT