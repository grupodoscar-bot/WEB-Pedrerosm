#!/bin/bash

# Script de despliegue para Plesk
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando proceso de despliegue..."

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json no encontrado. Ejecuta este script desde la raíz del proyecto.${NC}"
    exit 1
fi

# Instalar pnpm si no existe
if ! command -v pnpm &> /dev/null; then
    echo -e "${BLUE}📦 Instalando pnpm...${NC}"
    npm install -g pnpm
fi

# Instalar dependencias
echo -e "${BLUE}📦 Instalando dependencias...${NC}"
pnpm install

# Crear build de producción
echo -e "${BLUE}🔨 Creando build de producción...${NC}"
pnpm build

# Verificar que el build se creó correctamente
if [ ! -d "dist/public" ]; then
    echo -e "${RED}❌ Error: El directorio dist/public no se generó correctamente.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completado exitosamente!${NC}"
echo -e "${BLUE}📁 Los archivos están en: dist/public/${NC}"
echo ""
echo -e "${GREEN}Próximos pasos:${NC}"
echo "1. Sube todo el contenido de dist/public/ a tu servidor Plesk (httpdocs/)"
echo "2. Configura la reescritura de URLs (ver DEPLOY_PLESK.md)"
echo "3. Verifica que el sitio funcione correctamente"
echo ""
echo -e "${BLUE}💡 Tip: Puedes usar FTP, SFTP o el administrador de archivos de Plesk${NC}"
