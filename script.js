let apiKey = "297b7e8e9b3e9673ae95894eb24494dc";
let dif = 273.15;
let ciudad = "París";

document.getElementById("botonBusqueda").addEventListener("click", () => {
	const ciudad = document.getElementById("ciudadEntrada").value;
	if (ciudad) {
		fechtDatos(ciudad);
	}
});

function fechtDatos(ciudad) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
	)
		.then((data) => data.json())
		.then((data) => mostrarDatos(data));
}

function mostrarDatos(data) {
	const datosClima = document.getElementById("datosClima");
	datosClima.innerHTML = "";

    console.log(data);
	const nombre = data.name;
    const ubicacion = {
        latitud: data.coord.lat,
        longitud: data.coord.lon
    };
    const pais = data.sys.country;
	const temperatura = data.main.temp;
	const descripcion = data.weather[0].description;
	const icono = data.weather[0].icon;


	const ciudadTitulo = document.createElement("h2");
	ciudadTitulo.textContent = nombre;

	const ciudadUbicacion = document.createElement("p");
	ciudadUbicacion.textContent = `Latitud: ${ubicacion.latitud} / Longitud: ${ubicacion.longitud}`;

	const ciudadPais = document.createElement("p");
	ciudadPais.textContent = `Pais: ${pais}`;

	const ciudadTemperatura = document.createElement("p");
	ciudadTemperatura.textContent = `Temperatura: ${Math.floor(temperatura-dif)} °C`;

	const ciudadDescripcion = document.createElement("p");
	ciudadDescripcion.textContent = `Descripcion: ${descripcion}`;

	const ciudadIcono = document.createElement("img");
	ciudadIcono.src = `https://openweathermap.org/img/wn/${icono}.png`;
    ciudadIcono.width = "100";

	datosClima.appendChild(ciudadTitulo);
	datosClima.appendChild(ciudadUbicacion);
	datosClima.appendChild(ciudadPais);
	datosClima.appendChild(ciudadTemperatura);
	datosClima.appendChild(ciudadDescripcion);
	datosClima.appendChild(ciudadIcono);
}
