$(document).ready(function() {
	// Evento de botón
	$("#btn_ingresar").click(login);
	
	configEnter();
});

function login() {
	
	// recoge los valores
	var user = $("#user").val();
	var pass = $("#pass").val();
	
	if ( user === '' || pass === '') {
  		alertify.warning('Ingresar Usuario y/o Contraseña');
	} else {
		
		var body = {
			user: user,
			pass: pass
		};
		
		console.log(body);

		if(body.user == 'JORGE'){
			window.location = 'logged.html';
		} else {
			alertify.error('Usuario y/o contraseña incorrecto(s)');
		}

		
	}
}

function configEnter(){
	var inputUser = document.getElementById("user");
	var inputPass = document.getElementById("pass");

	inputUser.addEventListener("keyup", function(event) {
  		if (event.keyCode === 13) {
   			event.preventDefault();
   			document.getElementById("btn_ingresar").click();
  		}
	});

	inputPass.addEventListener("keyup", function(event) {
  		if (event.keyCode === 13) {
   			event.preventDefault();
   			document.getElementById("btn_ingresar").click();
  		}
	});
}