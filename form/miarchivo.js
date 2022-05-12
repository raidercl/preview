function Enviar(){
   alert("hola")
   let elem = document.getElementById("Nombre")
   let msj = ""
   if(elem.value == ""){
      msj = "debe completar el campo nombre"

   }else{
      msj = "nombre ok"
   }
   document.getElementById("Nombre").innerHTML=msj
}

/*var alertPlaceholder = document.getElementById('buttonbtn')
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
