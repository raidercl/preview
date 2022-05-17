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
      let elemento_nombreusuario = document.getElementById("nombredeusuario")
      let elemento_nombre = document.getElementById("nombre")
      let elemento_apellido = document.getElementById("apellido")
      let elemento_edad = document.getElementById("edad")
      let elemento_fecha = document.getElementById("fecha")
      let elemento_mensaje = document.getElementById("mensaje")

      //console.log(elemento.value)

      


      let contacto = new Object()
      contacto.nombre = elemento_nombre.value
      contacto.edad = elemento_edad.value
      contacto.apellido = elemento_apellido.value
      contacto.nombreusuario = elemento_nombreusuario.value
      contacto.fecha = elemento_fecha.value
      contacto.mensaje = elemento_mensaje.value

      if(elemento_nombreusuario.value == ""){
         flag = 1
      }
      if(elemento_nombre.value == ""){
         flag = 1
      }
      if(elemento_edad.value == ""){
         flag = 1
      }
      if(elemento_apellido.value == ""){
         flag = 1
      }
      if(elemento_fecha.value == ""){
         flag = 1
      }
      if(elemento_mensaje.value == ""){
         flag = 1
      }
      
      elemento_nombre.value = ""
      elemento_edad.value = ""
      elemento_apellido.value = ""
      elemento_nombreusuario.value = ""
      elemento_fecha.value = ""
      elemento_mensaje.value = ""


      
      let msj = ""
      if(flag == ""){
         console.log(contacto)
         arreglo.push(contacto)
         
   
      }else{
         alert("No paso las validaciones, CAMPOS VACIOS!")
      }
      
      

      console.log(contacto)
      arreglo.push(contacto)

   }

   function list(){
      elemento_respuesta = document.getElementById("resp-gral")
      console.log(arreglo)
   }