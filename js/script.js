let consultar = document.querySelector(".botoes-dep").children[0];
let formu = document.querySelector(".formulario");
let incluir = document.querySelector(".botoes-dep").children[1];
let btn_add = document.querySelector("#add");
let table = document.querySelector("table")
let alterar = document.querySelector(".botoes-dep").children[2];
let add = document.querySelector("#add")
let excluir = document.querySelector(".botoes-dep").children[3];
let closeAdd = document.querySelector(".incluir")
let btn_confirm = document.querySelector(".confirm")
let deletar = document.querySelector("#delete")
let btn_edit = document.createElement("input")
let btn_delete = document.createElement("input")
let mostrarExcluir = document.querySelector(".excluir")
consultar.addEventListener("click", function mostrarForm() {
	formu.classList = "formulario mostrarForm"
	btn_confirm.classList = "confirm";
	closeAdd.classList = "incluir"
	mostrarExcluir.classList = "excluir"
});
incluir.addEventListener("click", function mostrarInputs() {
	if(formu.classList == "formulario mostrarForm") {
		inputs.classList.toggle("mostrarInput");
	}
});
btn_add.addEventListener("click", function() {
	let cod = document.querySelector("#codigo");
	let desc = document.querySelector("#descricao");
	let tr = document.createElement("tr")
	tr.id = "a" + cod.value
	let td1 = document.createElement("td")
	let td2 = document.createElement("td")
	let text_input1 = document.createElement("input")
	let text_input2 = document.createElement("input")
	if(document.getElementById("a" + cod.value)) {
		alert("Matricula já existente!")
		cod.value = ""
		desc.value = ""
	} else {
		text_input1.classList = "inputs"
		text_input1.type = "number"
		text_input1.value = `${cod.value}`
		text_input1.disabled = "true"
		text_input2.classList = "inputs"
		text_input2.type = "text"
		text_input2.value = `${desc.value.toUpperCase()}`
		text_input2.disabled = "true"
		table.appendChild(tr)
		tr.appendChild(td1)
		td1.appendChild(text_input1)
		td2.appendChild(text_input2)
		tr.appendChild(td2)
		btn_confirm.addEventListener("click", function() {
			let inputs = document.querySelectorAll(".inputs")
			inputs.forEach((element) => (element.disabled = true));
			let matriculaAlterada = document.querySelector(".inputs").value
			tr.id = "a" + matriculaAlterada
		})
		alert("Pessoa Adicionada!")
	}
	cod.value = ""
	desc.value = ""
});
incluir.addEventListener("click", function() {
	closeAdd.classList = "incluir mostrarIncluir"
	mostrarExcluir.classList = "excluir"
	formu.classList = "formulario"
})
alterar.addEventListener("click", function() {
	closeAdd.classList = "incluir"
	mostrarExcluir.classList = "excluir"
	btn_confirm.classList = "confirm open";
	let inputs = document.querySelectorAll(".inputs")
	formu.classList = "formulario mostrarForm"
	inputs.forEach((element) => (element.disabled = false));
})
deletar.addEventListener("click", function() {
	let codigoExclusao = document.querySelector("#codigoExcluir").value
	codigoExclusao = "a" + codigoExclusao;
	let elementoDeletado = document.getElementById(codigoExclusao)
	if(document.getElementById(codigoExclusao)) {
		elementoDeletado.remove()
		alert("Pessoa Excluida!")
	} else {
		alert("Matrícula inválida.")
	}
});
excluir.addEventListener("click", function() {
	closeAdd.classList = "incluir"
	formu.classList = "formulario"
	mostrarExcluir.classList = "excluir mostrando"
})