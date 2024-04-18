document.getElementById('compareBtn').addEventListener('click', buscarPersonajes);

function buscarPersonajes() {
    const char1Id = document.getElementById('char1').value;
    const char2Id = document.getElementById('char2').value;

    fetch(`https://rickandmortyapi.com/api/character/${char1Id},${char2Id}`)
    .then(response => response.json())
    .then(data => {
    const character1 = data[0];
    const character2 = data[1];

    mostrarPersonaje(character1, 'personaje1');
    mostrarPersonaje(character2, 'personaje2');

    if (character1.id === character2.id) {
        mostrarResultado('Los personajes son iguales.')
    } else {
        mostrarResultado('Los personajes son distintos.')
        {
            checkmarkDiv.innerHTML = `<img src="IMG/cross.png" alt="cross">`;
        };
    }
    })
    .catch(error => console.error('Error al obtener los personajes:', error));
}

function mostrarPersonaje(character, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
    <img src="${character.image}" alt="${character.name}">
    <p>${character.name}</p>
    `;
}

function mostrarResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = resultado;

    const checkmarkDiv = document.getElementById('checkmark');
    const crossDiv = document.getElementById('cross');

if (resultado ==='Los personajes son iguales.') {
    checkmarkDiv.innerHTML = `<img src="IMG/checkmark.png" alt="checkmark">`;
} else {
    checkmarkDiv.innerHTML = `<img src="IMG/cross.png" alt="cross">`;
}
}