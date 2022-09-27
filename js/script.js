let consultar = document.querySelector(".botoes-dep").children[0];
let formu = document.querySelector(".formulario");
let incluir = document.querySelector(".botoes-dep").children[1];
let inputs = document.querySelector(".inputs");
let btn_add = document.querySelector("#add");
let table = document.querySelector("table")
let alterar = document.querySelector(".botoes-dep").children[2];
let add = document.querySelector("#add")
let btn_edit = document.createElement("input")
let btn_delete = document.createElement("input")
let excluir = document.querySelector(".botoes-dep").children[3];
let closeAdd = document.querySelector(".incluir")




consultar.addEventListener("click", function mostrarForm() {
    formu.classList.toggle("mostrarForm");
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

    
    td1.innerHTML= cod
    td2.innerHTML= desc.toUpperCase()

    table.appendChild(tr)
    tr.appendChild(td1)
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
    alert("não deu tempo :/")
})

excluir.addEventListener("click", function(){
    alert("não deu tempo :/")
})












