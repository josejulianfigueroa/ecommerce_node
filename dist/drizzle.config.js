import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    out: './drizzle',
    schema: [
        './src/db/productsSchema.ts',
        './src/db/usersSchema.ts',
        './src/db/ordersSchema.ts',
    ],
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    verbose: true,
    strict: true,
});
// al crear este archivo se ejecuta npx drizzle-kit push para subir los esquemas, luego si se hacen modificaciones a los esquemas
// se usa db:generate db:migrate y db:studio para ver la data en local, se van genwerando migraciones por cada cambio...
