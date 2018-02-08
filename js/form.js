$(document).ready(function() {
  // Creando variables booleanas que nos ayudaran 
  var verifyPassword = false;
  var verifyEmail = false;
  var verifycheck = false;

  function activeButton() {
		if (verifyPassword && verifyEmail && verifycheck) {
      $('#button-form').attr('disabled', false);
    }
  }

  function desactiveButton() {
		if (verifyPassword && verifyEmail && verifycheck) {
      $('#button-form').attr('disabled', true);
    }
  }      

  // Funcion para validar el input de email
  $('#email').on('input', function() {
    var parameterEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/); // Expresiones regulares que nos ayudara a validar el email
    if (parameterEmail.test($(this).val()) === false || $(this).val() === '') {
      $('#msj1').text('Ingrese su correo correcto');
      $(this).focus();
      desactiveButton();
      return false;
    } else {
      $('#msj1').text('');
      verifyEmail = true;
		  activeButton();
		}

  });
	
  $('#pass').on('input', function() {
    const passNot = '123456';
    let password = $('#pass').val();
    if (password === passNot || password.length < 6) {
      $('#msj2').text('Ingrese contraseña valida');
			desactiveButton();
			return false;
    } else {
      $('#msj2').text('');
      verifyPassword = true;
      activeButton();
    }
  });

	
  // Funcion para validar checkbox
  $('#check').on('click', function() {
    if (($(this).prop('checked'))) {
      $('#msj3').text('');
      verifycheck = true;
			activeButton();
    } else {
      $('#msj3').text('Rellena el chek')
			desactiveButton();
    }
	});
	
  // Enviando a la Vista collage
  $('#button-form').click(function() {
    event.preventDefault();
    window.location.href = 'views/collage.html';
	});
	

});