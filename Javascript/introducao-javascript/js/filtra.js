var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
	console.log(this.value);
	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length <= 0){
		for (var i = 0 ; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			paciente.classList.remove("invisble");
		}
		return;
	}

	for (var i = 0 ; i < pacientes.length; i++) {
		var paciente = pacientes[i];
		var nome = paciente.querySelector(".info-nome").textContent;

		var expressao = new RegExp(this.value, "i");
		if(expressao.test(nome)){
			paciente.classList.remove("invisble");
		}else{
			paciente.classList.add("invisble");
		}
 	}

});