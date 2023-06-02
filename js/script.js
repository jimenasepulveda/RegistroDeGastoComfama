const btnAgregar = document.querySelector("#openPopUp");
const btnEnviar = document.querySelector("#btn-cancel");
const table = document.getElementById("gastosTable");
const PopUp = document.getElementById("pop__up");
const form = document.getElementById("formjs");

document.querySelector("#pop__up")
btnAgregar.addEventListener("click", ()=>{
    PopUp.showModal();
});

btnEnviar.addEventListener("click", ()=>{
    PopUp.close();
});

const removeGastos = (id) => {
    document.getElementById(id).remove();
}

const addGasto = (id,cantidad, categoria, descripcion) => {
    
    const tr = document.createElement("tr");
    tr.setAttribute("id",id);
    const tdid= document.createElement("td");
    const tdcantidad = document.createElement("td");
    const tdcategoria = document.createElement("td");
    const tddescripcion = document.createElement("td");
    const tdAcciones = document.createElement("td");
    const btnActualizar = document.createElement("button");
    const btnEliminar = document.createElement("button");

    tdid.textContent = id;
    tdcantidad.textContent = cantidad;
    tdcategoria.textContent = categoria;
    tddescripcion.textContent = descripcion;
    btnActualizar.textContent = "Actualizar";
    btnEliminar.textContent = "Eliminar";

    tr.classList.add("table__row");
    tdid.classList.add("table__info");
    tdcantidad.classList.add("table__info");
    tdcategoria.classList.add("table__info");
    tddescripcion.classList.add("table__info");
    btnActualizar.classList.add("button", "button__text");
    btnEliminar.classList.add("button", "button__text");

   
    tr.appendChild(tdid);
    tr.appendChild(tdcantidad);   
    tr.appendChild(tdcategoria);
    tr.appendChild(tddescripcion);
    tr.appendChild(tdAcciones);
    tdAcciones.innerHTML = `<button class="button"><span class="button__text">Actualizar</span></button> 
    <button class="button button--danger" id="btnDanger" onclick="removeGastos(${id})"><span class="button__text">Eliminar</span></button>`
        
    table.appendChild(tr);
};

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cantidad = e.target.elements['cantidad'].value;
    console.log(cantidad);
    let categoria = e.target.elements['categoria'].value;
    console.log(categoria);
    let descripcion = e.target.elements['descripcion'].value;
    console.log(descripcion);
    let id = Date.now();
    addGasto(id,cantidad,categoria,descripcion);
    e.target.reset();
    PopUp.close();
});