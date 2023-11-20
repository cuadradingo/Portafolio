
  document.addEventListener('DOMContentLoaded', function() {
    var elemsparallax = document.querySelectorAll('.parallax');
    var instancesparallax = M.Parallax.init(elemsparallax);
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {indicators:true});
    var elemssidenav = document.querySelectorAll('.sidenav');
    var instancessidenav = M.Sidenav.init(elemssidenav);
  });

  
  function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();

    if (nombre === "" || apellido === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }


    // Validación adicional del campo de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return false; // Evita el envío del formulario
    }


    // Si todo está bien, puedes enviar el formulario
    alert("Su mensaje ha sido enviado con exito");
    return true;

 }
