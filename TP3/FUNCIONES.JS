    const boton= document.querySelector('#boton');
    
    
    const tilesP= 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let mapa= L.map('map'). setView([51.505, -0.09],13)
    l.tiles(tilesP, {
        maxZoom:18,
    }).addTo(map)

    /* fetch(`https://randomuser.me/api/${persona}`)
    .then(response => response.json())
    .then(data => {
    const persona1 = data[0];
    
    mostrarPersonaje(persona1, 'personaje1');


  //  .catch(error => console.error('Error al obtener los personajes:', error));
//}*/