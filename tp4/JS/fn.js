var valores1 = [];
var valores2 = [];

function Capturar1() {

    let agregarNum = document.getElementById("numeros").value; 
    console.log(agregarNum);

    valores1.push(agregarNum);
    console.log(valores1)

    if (valores1.length ==3) {
        alert("Ya se han ingresado 3 números.");
        } 
    
    if (valores1 < 1 || valores1> 183) {
        alert("Ingrese un número válido entre 1 y 183.");
        return;
        }
        document.getElementById("numeros").value = ""; // Limpiar el input

}

function Capturar2() {

console.log("capturar2")
    let agregarNum2 = document.getElementById("numeros2").value; 
    console.log(agregarNum2);

    valores2.push(agregarNum2);
    console.log(valores2)

    if (valores2.length ==3) {
         alert("Ya se han ingresado 3 números.");
        } 
    
    if (valores2 < 1 || valores2> 183) {
       alert("Ingrese un número válido entre 1 y 183.");
       return;
       }
        document.getElementById("numeros2").value = ""; // Limpiar el input

}
function buscarPersonajes(valores1) {
    valores1.forEach(valores1 => {
        const url =(`https://rickandmortyapi.com/api/character/${valores1}`)
        
    fetch(url)
    .then(response => response.json())
    .then(data => {
  
    
    console.log(data.image);
    
    })
    .catch(error => console.error('Error al obtener los personajes:', error));
   
})}

function mostrarPersonaje(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
    <img src="${data.image}" alt="${data.name}">
    <p>${data.name}</p>
    `;
}

