# App Clima JS

Aplicacion web sencilla para consultar el clima actual de una ciudad usando la API de OpenWeatherMap.

## Que hace esta app

- Permite escribir el nombre de una ciudad.
- Al presionar el boton Buscar, consulta el clima en tiempo real.
- Muestra nombre de ciudad, temperatura y descripcion meteorologica.
- Incluye imagen en la interfaz y fondo con opacidad.

## Tecnologias usadas

- HTML
- CSS
- JavaScript (vanilla)
- API: OpenWeatherMap

## Estructura del proyecto

- `index.html`: estructura de la pagina.
- `style.css`: estilos visuales de la app.
- `script.js`: logica de busqueda y consumo de API.
- `assets/meterologia.jpg`: imagen usada en el diseño.

## Paso a paso de instalacion y uso

1. Clona este repositorio:

```bash
git clone https://github.com/nicolassarmiento28/app-clima-JS.git
```

2. Entra a la carpeta del proyecto:

```bash
cd app-clima-JS
```

3. Abre el archivo `script.js` y verifica tu API key de OpenWeatherMap en la variable `api_key`.

4. Abre `index.html` en el navegador.

5. Escribe una ciudad en el campo de texto.

6. Haz clic en el boton Buscar.

7. La app consultara la API y mostrara los datos en pantalla.

## Paso a paso interno de la app (como funciona el codigo)

1. El usuario escribe una ciudad en el input con id `ciudadEntrada`.
2. El boton con id `botonBusqueda` dispara el evento click.
3. Se llama a `fetchDatosClima(ciudad)`.
4. La funcion hace `fetch` a OpenWeatherMap.
5. La respuesta JSON se procesa y se envia a `mostrarDatosClima(data)`.
6. Se renderizan los resultados dentro de `datosClima`.
7. Si ocurre un error en la consulta, se muestra en consola con `catch`.

## Requisitos

- Conexion a internet.
- API key valida de OpenWeatherMap.

## Mejoras sugeridas

- Mostrar mensajes de error en pantalla cuando la ciudad no exista.
- Permitir buscar con la tecla Enter.
- Mostrar icono del clima y mas datos (humedad, viento, etc.).
- Ocultar la API key en una configuracion mas segura para produccion.
