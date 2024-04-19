/*function buscar(){
  var n=document.getElementById("numero").value;
  if (personaje.id==n){
      document.getElementById("result"). innerHTML="El personaje "+data.name+" esta "+data.status
  } else {
      document.getElementById("result"). innerHTML="El personaje no esta registrado en Json"
  }
}*/
function buscar(){
  var valor=document.getElementById('numero').value;
 fetch('https://rickandmortyapi.com/api/character/'+valor)
.then(response=>response.json())
.then(data=>{
  console.log(data.image)
}) 
}
