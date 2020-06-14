		var titulo = document.querySelector(".Titulo");
		titulo.textContent = "Aparecida Nutricionista";

		var paciente = document.querySelectorAll(".paciente");
		
		for (var i = 0; i < paciente.length ; i++){

			var peso = paciente[i].querySelector(".info-peso").textContent;
			var altura = paciente[i].querySelector(".info-altura").textContent;
			var imc_page = paciente[i].querySelector(".info-imc");

			var pesook = validaPeso(peso);
			if (!pesook){
				console.log("Peso Inválido!!")
				imc_page.textContent = "Peso Inválido!";
				paciente[i].classList.add("paciente-invalido");
			}

			var alturaok = validaAltura(altura);
			if (!alturaok){
				console.log("Altura Inválida!!")
				imc_page.textContent = "Altura Inválida!";
				paciente[i].classList.add("paciente-invalido");
				//paciente[i].style.backgroundColor = "red";
			}

			if (pesook & alturaok){
				var imc = calculaImc(peso, altura);
				imc_page.textContent = imc;
			}
		}

function validaPeso(peso){
	if (peso >= 0 && peso <= 1000){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura <= 3.0){
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso,altura){

	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}