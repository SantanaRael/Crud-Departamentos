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

let btn_edit = document.createElement("input")
let btn_delete = document.createElement("input")




consultar.addEventListener("click", function mostrarForm() {
    formu.classList="formulario mostrarForm"
    btn_confirm.classList="confirm";
    if(document.querySelector(".mostrarIncluir")){
        closeAdd.classList="incluir"
    }
});




incluir.addEventListener(
  "click",
  function mostrarInputs() {
      

    if(formu.classList == "formulario mostrarForm"){
        inputs.classList.toggle("mostrarInput");
    }
    
  }
  
);


btn_add.addEventListener("click", function(){
    let cod = document.querySelector("#codigo").value;
    let desc = document.querySelector("#descricao").value;
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let text_input1 = document.createElement("input")
    let text_input2 = document.createElement("input")

    
    text_input1.classList="inputs"
    text_input1.type="text"
    text_input1.value=`${cod}`
    text_input1.disabled="true"

    text_input2.classList="inputs"
    text_input2.type="text"
    text_input2.value=`${desc.toUpperCase()}`
    text_input2.disabled="true"

    table.appendChild(tr)
    tr.appendChild(td1)
    td1.appendChild(text_input1)
    td2.appendChild(text_input2)

    tr.appendChild(td2)
    alert("Item Adicionado!")

});

incluir.addEventListener("click", function(){
    closeAdd.classList.toggle("mostrarIncluir");
    if(document.querySelector(".mostrarForm")){
        formu.classList="formulario"
    }
})

alterar.addEventListener("click", function(){

    if(document.querySelector(".mostrarIncluir")){
        closeAdd.classList="incluir"
    }

    btn_confirm.classList="confirm open";
    let inputs = document.querySelectorAll(".inputs")
    formu.classList="formulario mostrarForm"
    inputs.forEach((element) => (element.disabled = false));
    

})

btn_confirm.addEventListener("click", function(){
    let inputs = document.querySelectorAll(".inputs")

    inputs.forEach((element) => (element.disabled = true));
    
})

excluir.addEventListener("click", function(){
    alert("não deu tempo :/")
})





///erro: não ta dando pra editar os novos itens, apenas os já existentes








