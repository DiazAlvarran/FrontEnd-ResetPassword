var sistemasActivos = [];

var arregloSistema = ["SARP", "SIR", "PERMISOS", "BLOQUEOS", "SISTRAM"];
//var arregloSistema = [];

$(document).ready(function() {
	alertify.success("¡BIENVENIDO!");
	
	// Evento de botón
	$("#btn_cerrar_sesion").click(cerrarSesion);
	$("#btn_recuperar").click(resetear);

	cabecera_configuracion();
	listarSistemas();
});

function cerrarSesion() {
	window.location = 'index.html';
}

function cabecera_configuracion(){
	
	var nombre_usuario = $("#nombre_usuario");
	var nombre_area = $("#nombre_area");

	nombre_usuario.html("<i class='fas fa-user fa'></i> Jorge Victor Diaz Alvarran");
	nombre_area.html("<i class='fas fa-sitemap fa'></i> Unidad de tecnologías de la información");
}

function listarSistemas(){
	
	var tabla = $("#contenido_tabla");
	var contenido =  "";

	if(arregloSistema.length > 0){
		contenido += "<thead>";
		contenido += "<tr>";
		contenido += "<th scope='col' id='head1'>Sistemas</th>";
		contenido += "<th scope='col' id='head2'>Resetear</th>";
		contenido += "</tr>";
		contenido += "</thead>";
		contenido += "<tbody>";
		for(var i = 0; i < arregloSistema.length; i++){
			contenido += "<tr>";
			contenido += "<td>" + arregloSistema[i] + "</td>";
			contenido += "<td>";
			contenido += "<div class='custom-control custom-checkbox mr-sm-2'>";
			contenido += "<input type='checkbox' class='custom-control-input' id='checkbox_" + i + "'>";
			contenido += "<label class='custom-control-label' for='checkbox_" + i + "'></label>";
			contenido += "</div>";
			contenido += "</td>";
			contenido += "</tr>";
		}
		contenido += "</tbody>";
	} else {
		contenido += "<thead>";
		contenido += "<tr>";
		contenido += "<th scope='col' id='head1'>No hay sistemas</th>";
		contenido += "</tr>";
		contenido += "</thead>";
		$('#btn_recuperar').hide();
	}
	// mostrar contenido en elemento tabla
	tabla.html(contenido);
}

/*=============================================
 * EVENTO DE BOTÓN PARA RESETEAR LAS CONTRASEÑAS
 * ============================================*/
function resetear(){
	// deshabilitar botones momentáneamente
	$('#btn_recuperar').attr("disabled", true);
	$('#btn_cerrar_sesion').attr("disabled", true);
	
	// verificar que si se ha seleccionado al menos un sistema
	if(noHayCheckSeleccionado()){
		alertify.warning("No ha seleccionado ningún sistema");
	} else {
		alertify.confirm("Se va resetear los sitemas seleccionados\n¿Quieres continuar?",
			function(){
				// recorrer todos los checkbox
				for(var i = 0; i < arregloSistema.length; i++){
					var id = "#checkbox_" + i;
					var valor = $(id);
					if( valor.prop('checked') ) { // si el checkbox está seleccionado -> reseteo
					    console.log(arregloSistema[i]);
					}
		        }
		        desmarcarTodosLosSistemas();
				alertify.success("¡ÉXITO!");
		  	},
		  	function(){
		    	alertify.error('Ha cancelado la operación');
			}
		);
	}
	// habilitar botones al finalizar el reseteo
	$('#btn_recuperar').attr("disabled", false);
	$('#btn_cerrar_sesion').attr("disabled", false);
}

/*=============================================
 * DEVUELVE TRUE SI NO HAY NI UN SISTEMA SELECCIONADO
 * ============================================*/
function noHayCheckSeleccionado(){
	// recorrer todos los checkbox
	for(var i = 0; i < arregloSistema.length; i++){
		var id = "#checkbox_" + i;
		var valor = $(id);
		if( valor.prop('checked') ) { // si el checkbox está seleccionado
		    return false;
		}
    }
	return true;
}

/*=============================================
 * DESMARCAR TODOS LOS CHECKBOX
 * ============================================*/
function desmarcarTodosLosSistemas(){
	// recorrer todos los checkbox
	for(var i = 0; i < arregloSistema.length; i++){
		var id = "#checkbox_" + i;
		var valor = $(id);
		valor.prop('checked', false);
    }
}