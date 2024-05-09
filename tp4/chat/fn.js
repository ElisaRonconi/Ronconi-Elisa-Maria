let valores1 = [];
let valores2 = [];

function capturarNumero(grupo) {
    let numeroInput;
    if (grupo === 1) {
        numeroInput = document.getElementById("numeros1");
        valores1.push(numeroInput.value);
        if (valores1.length === 3) {
            mostrarMensaje("Grupo 1: Ya se han ingresado los 3 números.");
            numeroInput.disabled = true;
        } else {
            numeroInput.value = "";
        }
    } else if (grupo === 2) {
        numeroInput = document.getElementById("numeros2");
        valores2.push(numeroInput.value);
        if (valores2.length === 3) {
            mostrarMensaje("Grupo 2: Ya se han ingresado los 3 números.");
            numeroInput.disabled = true;
        } else {
            numeroInput.value = "";
        }
    }

    if (valores1.length === 3 && valores2.length === 3) {
        buscarPersonajes(valores1, valores2);
    }

   // if (numeroInput.value < 1 || numeroInput.value > 183) {
     //   alert("Ingrese un número válido entre 1 y 183.");
    //}
}

function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerText = mensaje;
}

function buscarPersonajes(valores1, valores2) {
    const allNumbers = [...valores1, ...valores2];
    allNumbers.forEach(numero => {
        const url = `https://rickandmortyapi.com/api/character/${numero}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data.image;
                document.getElementById(`per${numero}`).appendChild(img);
            })
            .catch(error => console.error('Error al obtener los personajes:', error));
    });
}