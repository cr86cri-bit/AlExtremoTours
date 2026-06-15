# Seguridad

Esta landing es estatica y no procesa datos personales en un servidor propio.

## Medidas aplicadas

- Politica CSP restrictiva para limitar scripts, estilos, imagenes, fuentes y formularios.
- Enlaces externos con `rel="noopener noreferrer"`.
- Cabeceras recomendadas en `_headers` y `.htaccess`.
- Sin dependencias JavaScript externas.

## Recomendaciones de despliegue

- Publicar siempre con HTTPS.
- Mantener activas las cabeceras de `_headers` si usas Netlify/Cloudflare Pages.
- Mantener activas las cabeceras de `.htaccess` si usas Apache.
- Si usas Nginx, replica las mismas cabeceras de `_headers`.
- No agregar scripts de terceros sin actualizar la CSP.
