# Guía de Despliegue en Plesk

Esta guía te ayudará a desplegar el sitio web de Pedrero Social Media en un servidor con Plesk.

## Requisitos Previos

- Acceso a Plesk con permisos de administrador
- Node.js 18+ instalado en el servidor (o acceso SSH para instalarlo)
- Dominio configurado en Plesk (ej: pedrerosm.com)

## Opción 1: Despliegue Manual (Más Simple)

### Paso 1: Build Local

En tu máquina local, ejecuta:

```bash
# Clonar repositorio
git clone https://github.com/grupodoscar-bot/WEB-Pedrerosm.git
cd WEB-Pedrerosm

# Instalar dependencias
pnpm install

# Crear build de producción
pnpm build
```

Esto generará una carpeta `dist/public/` con todos los archivos estáticos.

### Paso 2: Subir Archivos a Plesk

1. **Accede a Plesk** → Tu dominio → Administrador de archivos
2. **Navega a la carpeta** `httpdocs/` o `public_html/`
3. **Sube todo el contenido** de la carpeta `dist/public/` (no la carpeta, solo su contenido)
4. **Asegúrate de subir** el archivo `index.html` y todas las carpetas (`assets/`, etc.)

### Paso 3: Configurar Reescritura de URLs

Para que las rutas de React funcionen correctamente:

1. En Plesk → Tu dominio → **Configuración de Apache y nginx**
2. Añade esta configuración en **Directivas adicionales de nginx**:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

3. **Guarda** y **Aplica** los cambios

### Paso 4: Verificar

Visita tu dominio y verifica que el sitio funcione correctamente.

---

## Opción 2: Despliegue Automático con Git (Avanzado)

### Paso 1: Configurar Git en Plesk

1. En Plesk → Tu dominio → **Git**
2. **Añadir repositorio**:
   - URL: `https://github.com/grupodoscar-bot/WEB-Pedrerosm.git`
   - Rama: `main`
   - Ruta de despliegue: `/httpdocs/`

### Paso 2: Configurar Script de Despliegue

En Plesk → Git → **Acciones de despliegue**, añade:

```bash
#!/bin/bash

# Instalar pnpm si no existe
npm install -g pnpm

# Instalar dependencias
pnpm install

# Build de producción
pnpm build

# Copiar archivos al directorio web
cp -r dist/public/* /var/www/vhosts/tudominio.com/httpdocs/

# Limpiar archivos temporales
rm -rf node_modules dist
```

### Paso 3: Configurar Reescritura de URLs

Igual que en la Opción 1, añade la configuración de nginx.

### Paso 4: Desplegar

1. Haz clic en **"Pull and Deploy"** en Plesk
2. Espera a que se complete el proceso
3. Verifica tu sitio

---

## Configuración de .htaccess (Si usas Apache)

Si tu servidor usa Apache en lugar de nginx, crea un archivo `.htaccess` en `httpdocs/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Solución de Problemas

### Error: "Cannot GET /servicios" o rutas 404

**Causa**: La reescritura de URLs no está configurada.

**Solución**: Asegúrate de haber añadido la configuración de nginx o el archivo `.htaccess`.

### Archivos CSS/JS no cargan

**Causa**: Rutas incorrectas o archivos no subidos.

**Solución**: 
1. Verifica que todos los archivos de `dist/public/` estén en `httpdocs/`
2. Revisa la consola del navegador (F12) para ver qué archivos faltan

### Página en blanco

**Causa**: Error de JavaScript o archivos faltantes.

**Solución**:
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que `index.html` esté en la raíz de `httpdocs/`

---

## Mantenimiento

### Actualizar el Sitio

**Opción Manual**:
1. Haz cambios en el código local
2. Ejecuta `pnpm build`
3. Sube los archivos de `dist/public/` a Plesk

**Opción Git**:
1. Haz push de cambios a GitHub
2. En Plesk → Git → **"Pull and Deploy"**

---

## Optimizaciones Recomendadas

### 1. Habilitar Compresión Gzip

En Plesk → Apache y nginx → Directivas adicionales de nginx:

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### 2. Configurar Caché de Navegador

```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. Certificado SSL

1. En Plesk → Tu dominio → **SSL/TLS**
2. Instala un certificado **Let's Encrypt** (gratuito)
3. Habilita **"Redirigir HTTP a HTTPS"**

---

## Contacto

Para soporte adicional, contacta al desarrollador o consulta la documentación de Plesk.
