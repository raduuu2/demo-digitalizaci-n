# Demo Proyecto

Demo de tres páginas HTML5 para Interfaces DAM. Usa Bootstrap 5.3.9 por CDN y JavaScript sin dependencias adicionales.

## Estructura

```text
estudio-norte/
├── index.html
├── servicios.html
├── contacto.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── estudio-demo.jpg
└── README.md
```

## Cómo abrir la demo

1. Descomprime el ZIP conservando las carpetas.
2. Abre `index.html` en el navegador. También puedes abrir la carpeta en VS Code y usar Live Server si ya lo tienes instalado.
3. Mantén la conexión a Internet para que el navegador cargue Bootstrap desde jsDelivr.
4. Reduce el ancho de la ventana para probar el menú móvil. En Servicios puedes desplegar los paneles del acordeón.
5. En Contacto, prueba primero un correo sin arroba y luego un correo válido. Con todos los datos válidos, aparece una confirmación del envío simulado.

## Dónde personalizar

- Edita los tres HTML para cambiar los textos. Si modificas el menú o el pie, aplica el cambio en cada HTML. Mantén `aria-current="page"` en el enlace de la página correspondiente.
- En `css/style.css`, cambia las variables de `:root` para ajustar la paleta. Las clases de Bootstrap controlan la cuadrícula y el menú adaptable.
- Sustituye `img/estudio-demo.jpg` o modifica el atributo `src` en `index.html`. Actualiza el texto alternativo y las dimensiones declaradas según la nueva imagen.
- `js/script.js` se carga en Contacto y simula el envío en el navegador. El proyecto funciona como sitio estático y carece de un servicio de recepción de mensajes.

[Documentación oficial de Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) · [Fotografía de demostración en Unsplash](https://images.unsplash.com/photo-1497366754035-f200968a6e72)
