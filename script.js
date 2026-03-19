let api_key = '7a787d456be42decf676303a12ac8f8d';

const url_base = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&appid=${api_key}`;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad) {
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad) {
    fetch(`${url_base}&q=${ciudad}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
    .catch(error => console.error('Error al obtener datos del clima:', error));
}

function mostrarDatosClima(data) {
    
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const icon = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = ciudadNombre;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `Temperatura: ${temperatura}°C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = ` La descripción meteorológica es: ${descripcion}`;
    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    iconoInfo.alt = descripcion;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(iconoInfo);

}
