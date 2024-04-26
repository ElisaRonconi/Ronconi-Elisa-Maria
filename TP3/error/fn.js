const boton = document.querySelector('#boton');
let x = document.getElementById("error").value;
function searchUser() {
    const urlRandom = 'https://randomuser.me/api/';

    fetch(urlRandom)
    .then(response => response.json())
    .then(data => {
        const nombre = data.results[0].name.first;
        const latitude = data.results[0].location.coordinates.latitude;
        const longitude = data.results[0].location.coordinates.longitud; // Saque la e final para captar error
        
        document.getElementById('data.name').textContent = nombre;// muestra el nombre del usuario en el HTML
        
        createMap(latitude, longitude);// crea el mapa y centrarlo en la ubicación obtenida
    })
    .catch(err=>{
        document.getElementById('error').innerHTML = " "+ err +".";
        console.log(err);
      })
     

function createMap(latitude, longitude) {
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    
    L.marker([latitude, longitude]).addTo(map)// marcador de  ubicación 
        .bindPopup('¡Aquí está el usuario!')
        .openPopup();
}

boton.addEventListener('click', searchUser);
 }