		var titulo = document.querySelector(".Titulo");
		titulo.textContent = "Aparecida Nutricionista";

		var paciente = document.querySelectorAll(".paciente");
		
		for (var i = 0; i < paciente.length ; i++){

			var peso = paciente[i].querySelector(".info-peso").textContent;
			var altura = paciente[i].querySelector(".info-altura").textContent;
			var imc_page = paciente[i].querySelector(".info-imc");

			var pesook = true
			if (peso <= 0 || peso > 200){
				console.log("Peso Inválido!!")
				pesook = false;
				imc_page.textContent = "Peso Inválido!";
				paciente[i].classList.add("paciente-invalido");
			}

			var alturaok = true
			if (altura <= 0 || altura >= 3.0){
				console.log("Altura Inválida!!")
				alturaok = false;
				imc_page.textContent = "Altura Inválida!";
				paciente[i].classList.add("paciente-invalido");
				//paciente[i].style.backgroundColor = "red";
			}

			if (pesook & alturaok){
				var imc = peso / (altura * altura);
				imc_page.textContent = imc.toFixed(2);
			}
		}

var btAdicionarPaciente = document.querySelector("#adicionar-paciente");

btAdicionarPaciente.addEventListener("click", function(event) {
	event.preventDefault();
	
	var form = document.querySelector("#addPaciente");
	var nome, peso, altura, gordura;

	nome = form.nome.value;
	peso = form.peso.value;
	altura = form.altura.value;
	gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

})