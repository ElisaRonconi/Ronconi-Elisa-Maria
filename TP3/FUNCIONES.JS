document.getElementById('buscar').addEventListener('click');

function buscarPersonajes() {
    const persona = document.getElementById('persona').nombre;


    fetch(`https://randomuser.me/api/${persona}`)
    .then(response => response.json())
    .then(data => {
    const persona1 = data[0];
    
    mostrarPersonaje(persona1, 'personaje1');


    .catch(error => console.error('Error al obtener los personajes:', error));
}