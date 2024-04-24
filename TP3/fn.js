const boton = document.querySelector('#boton');

function searchUser() {
    const urlRandom = 'https://randomuser.me/api/';

    fetch(urlRandom)
    .then(response => response.json())
    .then(data => {
        const userName = data.results[0].name.first;
        const latitude = data.results[0].location.coordinates.latitude;
        const longitude = data.results[0].location.coordinates.longitude;
        
        
        document.getElementById('data.name').textContent = userName;// Mostrar el nombre del usuario en el HTML
        
        
        createMap(latitude, longitude);// Crear el mapa y centrarlo en la ubicación obtenida
    });
}

function createMap(latitude, longitude) {
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    
    L.marker([latitude, longitude]).addTo(map)// Añadir marcador en la ubicación obtenida
        .bindPopup('¡Aquí está el usuario!')
        .openPopup();
}

boton.addEventListener('click', searchUser);