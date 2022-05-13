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
      let elemento = document.getElementById("Nombre")
      let elemento_nombre = document.getElementById("nombre")
      let elemento_edad = document.getElementById("edad")
      //console.log(elemento.value)
      let contacto = new Object()
      contacto.nombre = elemento_nombre.value
      contacto.edad = elemento_edad.value
      
      elemento_nombre.value = ""
      elemento_edad.value = ""
      

      console.log(contacto)
      arreglo.push(contacto)

   }

   function list(){
      elemento_respuesta = document.getElementById("resp-gral")
      console.log(arreglo)
   }