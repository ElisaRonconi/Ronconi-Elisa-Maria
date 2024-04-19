const boton= document.querySelector('#boton');
    
console.log('ok')


function searchUser(){
    console.log('anda')
    const urlRandom=`https://randomuser.me/api/`;

  fetch(urlRandom)
  .then(response => response.json())
  .then(data => {

  let latitude=(data.results[0].location.coordinates.latitude)
  let longitude=(data.results[0].location.coordinates.longitude); 
  console.log(latitude);
  console.log(longitude);
});
};

function createmap(){
  let map = L.map('map').setView([51.505, -0.09], 17);
}
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// inicializar nuevamente
//container=L.DomUtil