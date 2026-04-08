
let checklist = [
    "Revisar correos",
    "Enviar informe",
    "Hacer respaldo",
    "Actualizar sistema"
];

const contenedor = document.getElementById("lista");
const agregarBtn = document.getElementById("agregarBtn");
const nuevaTareaInput = document.getElementById("nuevaTarea");


function mostrarChecklist() {
    contenedor.innerHTML = ""; 
    checklist.forEach((item, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" id="t${index}"> ${item}<br>`;
        contenedor.appendChild(label);

      
        document.getElementById(`t${index}`).addEventListener("change", function() {
            if (this.checked) {
                console.log(`✔ Completado: ${item}`);
            } else {
                console.log(`✘ Quitado: ${item}`);
            }
        });
    });
}


function mostrarEnConsola() {
    console.log("=== TAREAS COMPLETADAS ===");
    checklist.forEach((item, index) => {
        console.log(`${index + 1}. [ ] ${item}`);
    });
}

mostrarChecklist();
mostrarEnConsola();


agregarBtn.addEventListener("click", () => {
    const tarea = nuevaTareaInput.value.trim();
    if (tarea !== "") {
        checklist.push(tarea);
        nuevaTareaInput.value = "";
        mostrarChecklist();
        console.log(`➕ Nueva tarea agregada: ${tarea}`);
    }
});