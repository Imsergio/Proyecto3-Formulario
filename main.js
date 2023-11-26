  const form = document.getElementById('form');
  boton = document.getElementById('enviar');
  const validar = document.querySelectorAll(".validar");
  
// validando campos al cambio de cada uno
  Array.from(validar).forEach(validado =>{
      validado.addEventListener('change', event => {
       // agragamos la clase, para verificar
        validado.classList.add('was-validated')
      })
    })
// validando campos al submit 
form.addEventListener('submit', event => {
  // si la funcion checkValidity es false 
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    Saludo();
  }else{
    alert(`Gracias!! ${(form.nombre.value)}`)
  }
  // agragamos la clase, para verificar todos los campos de form
  form.classList.add('was-validated')
})

const Saludo = function(){
        alert(`Gracias!! ${(form.nombre.value)}`);
};





