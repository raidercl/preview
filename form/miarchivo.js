/*function Enviar(){
   let elem = document.getElementById("Nombre")
   let msj = ""
   if(elem.value == ""){
      msj = "debe completar el campo nombre"

   }else{
      msj = "nombre ok"
   }
   document.getElementById("Nombre").innerHTML=msj
}

var alertPlaceholder = document.getElementById('buttonbtn')
var alertTrigger = document.getElementById()
 function alert(message, type) {
   var wrapper = document.createElement('div')
   wrapper.innerHTML = 
 
   
   
   
   alertPlaceholder.append(wrapper)
   }
   
   if (alertTrigger) {
   alertTrigger.addEventListener('click', function () {
   alert('Envío exitoso, Gracias por su tiempo', 'danger')
   }*/
   var arreglo = []
   var obj = new Object()

   function Enviar(){
      flag = 0
      let elemento_marca = document.getElementById("Marca")
      let elemento_modelo = document.getElementById("Modelo")
      let elemento_anio = document.getElementById("Anio")


      //console.log(elemento.value)
      valor = document.getElementById("Anio").value;
      if ( isNaN(valor) ) {
        alert("SOLO VALOR NUMERICO GIL")
         return false;
      }


      

      let contacto = new Object()
      contacto.marca = elemento_marca.value
      contacto.modelo = elemento_modelo.value
      contacto.anio = elemento_anio.value
      

      if(elemento_marca.value == ""){
         flag = 1
      }
      if(elemento_modelo.value == ""){
         flag = 1
      }
      if(elemento_anio.value == ""){
         flag = 1
      }
    
      
      elemento_marca.value = ""
      elemento_modelo.value = ""
      elemento_anio.value = ""
      


      
      
      if(flag == ""){
         console.log(contacto)
         arreglo.push(contacto)
         
   
      }else{
         alert("No paso las validaciones, CAMPOS VACIOS!")
      }
      
      

  

   }

   function list(){
      elemento_respuesta = document.getElementById("resp-gral")
      console.log(arreglo)
   }

   function listar(){
      let resp = document.getElementById("resp")
      let html = ""
      arreglo.forEach
   }