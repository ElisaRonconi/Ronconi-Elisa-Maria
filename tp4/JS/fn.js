var valores1 = [];
var valores2 = [];

function Capturar1() {
    let agregarNum = parseInt(document.getElementById("numeros").value);
    console.log(agregarNum);

    if (isNaN(agregarNum) || agregarNum < 1 || agregarNum > 826) {
        alert("Ingrese un número válido entre 1 y 826.");
        return;
    }

    valores1.push(agregarNum);
    console.log(valores1);

    if (valores1.length == 3) {
        alert("Ya se han ingresado 3 números.");
        document.getElementById("numeros").disabled = true; // Inhabilitar el input
    }

    document.getElementById("numeros").value = ""; // Limpiar el input
}

function Capturar2() {
    let agregarNum2 = parseInt(document.getElementById("numeros2").value);
    console.log(agregarNum2);

    if (isNaN(agregarNum2) || agregarNum2 < 1 || agregarNum2 > 826) {
        alert("Ingrese un número válido entre 1 y 826.");
        return;
    }

    valores2.push(agregarNum2);
    console.log(valores2);

    if (valores2.length == 3) {
        alert("Ya se han ingresado 3 números.");
        document.getElementById("numeros2").disabled = true; 
    }

    document.getElementById("numeros2").value = ""; 
}

async function buscarPersonajes() {
    
    const todosValores = valores1.concat(valores2);
    const equipo1Div = document.getElementById("equipo1");
    const equipo2Div = document.getElementById("equipo2");
    for (let i=0; i<todosValores.length; i++){

        const url = `https://rickandmortyapi.com/api/character/${todosValores[i]}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.image)
                const personajeDiv = document.createElement("div");
                const imagen = document.createElement("img");
                const nombre = document.createElement("p");
                const id = document.createElement("p");

                imagen.src = data.image;
                nombre.textContent = `Nombre: ${data.name}`;
                id.textContent = `ID: ${data.id}`;

            
                if (i < valores1.length) {
                    equipo1Div.appendChild(personajeDiv);
                } else {
                    equipo2Div.appendChild(personajeDiv);
                }
                personajeDiv.appendChild(imagen);
                personajeDiv.appendChild(nombre);
                personajeDiv.appendChild(id);
            })
            .catch(error => console.error('Error al obtener los personajes:', error));
    };}
    buscarPersonajes([]);
