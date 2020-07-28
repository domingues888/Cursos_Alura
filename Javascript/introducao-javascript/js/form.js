var btAdicionarPaciente = document.querySelector("#adicionar-paciente");

btAdicionarPaciente.addEventListener("click", function(event) {
	event.preventDefault();
	
	var form = document.querySelector("#addPaciente");
	
	//Obtém informações do form
	var paciente = obtemPacienteForm(form);

	// valida os dados do paciente inserido
	var erros = validaPaciente(paciente);
	if(erros.length > 0){
		exibeMsgErros(erros);
    	return;
	}

	adicionaPacienteNaTabela(paciente);

	form.reset();
	var msgErros = document.querySelector("#mensagens-erro");
	msgErros.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente) {
	// Criar a tr e a td dos dados do Paciente
	var pacienteTr = montaTr(paciente);
	//Adiconanto Tr na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function exibeMsgErros(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = ""
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obtemPacienteForm(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

	return pacienteTr;
}

function montaTd(info, classe){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = info;

	return td
}

function validaPaciente(paciente) {

	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco!")
	}
	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco!")
	}
	if(paciente.altura.length == 0){
		erros.push("A altura não pode ser em branco!")
	}
	 if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco!")
	}  
    if (!validaPeso(paciente.peso)) {
   		erros.push("Peso é inválido!");
    }
    if (!validaAltura(paciente.altura)) {
   		erros.push("Altura é inválida!");
    } 
    return erros;
}
