//var pacientes = document.querySelectorAll(".paciente");

var tblPacientes = document.querySelector("#tabela-pacientes");

tblPacientes.addEventListener("dblclick",function(event){
		var alvoEvento = event.target;
		var paiAlvo = alvoEvento.parentNode;
		paiAlvo.classList.add("fadeOut");
		setTimeout(function(){
			paiAlvo.remove();
		},500);
	});