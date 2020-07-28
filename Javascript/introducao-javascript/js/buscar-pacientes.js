var btBuscar = document.querySelector("#buscar-paciente")

btBuscar.addEventListener("click", function(){
	console.log("Buscando Pacientes...");
	
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){
		
		if ( xhr.status == 200) {
			var pacientes = JSON.parse(xhr.responseText);
			for (var i = 0 ; i < pacientes.length; i++) {
				adicionaPacienteNaTabela(pacientes[i]);
			}
		}else{
			console.log(xhr.status);
		}
	})

	xhr.send();
});
