# Finanzas Personales

Actividad de Educacion Financiera.

## Crear una plantilla para la actividad

Copia o clona el repositorio de [Sugarizer](https://github.com/llaske/Sugarizer),

```bashscript
$ git clone https://github.com/llaske/Sugarizer
```

y copia el contenido de la carpeta `activities/ActivityTemplate` a la carpeta de tu proyecto.

## Estructura de archivos

En su nueva actividad, encontrará la siguiente estructura de archivos:

	my-activity/
	|-- activity/
	|   |-- activity.info
	|   `-- activity-icon.svg
	|-- index.html
	|-- css/
	|   `-- activity.css
	|-- js/
	|   |-- activity.js
	|   `-- loader.js
	|-- lib/
	|-- package.json
	`-- setup.py

## [MustacheJS](https://mustache.github.io/), manejador de plantillas

La mayor parte de trabajo se realiza pasando datos desde javascript a html, llegado a este punto en la mayoria de los casos se requerira usar un sistema de plantillas aligerar la carga.

Lo primero es descargar [mustache.js](https://raw.githubusercontent.com/janl/mustache.js/master/mustache.min.js) y colocarlo en la carpeta `lib` de nuestro proyecto.

Luego solo hace falta incluirlo en las definiciones del nuestro archivo `js/activity.js` y empezar a usarlo.

```jaascript
var Mustache = require("mustache");
```
## Sugarizar
Construir el paquete `XO`. Para esto ejecute el siguiente comando en la raiz del proyecto:

	$ python setup.py dist_xo

de esta manera se genera el archivo `*.xo` en la carpeta dist.
