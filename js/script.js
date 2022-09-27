let consultar = document.querySelector(".botoes-dep").children[0];
let formu = document.querySelector(".formulario");
let incluir = document.querySelector(".botoes-dep").children[1];
let inputs = document.querySelector(".inputs");
let btn_add = document.querySelector("#add");
let table = document.querySelector("table")
let alterar = document.querySelector(".botoes-dep").children[2];

let btn_edit = document.createElement("input")
let btn_delete = document.createElement("input")
let excluir = document.querySelector(".botoes-dep").children[3];




consultar.addEventListener(
  "click",
  function mostrarForm() {
    formu.classList.toggle("mostrarForm");
  }
  
);




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

    btn_edit.type="button"
    btn_edit.value="Edit"
    btn_edit.className="btn-edit"
    btn_delete.type="button"
    btn_delete.value="Del"
    btn_delete.className="btn-delete"
    td1.innerHTML= cod
    td2.innerHTML= desc.toUpperCase()

    table.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    td2.appendChild(btn_edit)
    td2.appendChild(btn_delete)

});


alterar.addEventListener("click", function(){
    btn_edit.classList.toggle("edit-block");

})

btn_edit.addEventListener("click", function(){
    alert("não deu tempo :/")
})


excluir.addEventListener("click", function(){
    btn_delete.classList.toggle("delete-block");
})

btn_delete.addEventListener("click", function(){
    this.parentNode.remove()
})






