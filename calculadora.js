const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

let operacion = "";

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const valor = btn.getAttribute("data-valor");
        const accion = btn.getAttribute("data-accion");

        if (valor) {
            operacion += valor;
            pantalla.value = operacion;
        }

        if (accion) {
            if (accion === "limpiar") {
                operacion = "";
                pantalla.value = "";
            } else if (accion === "borrar") {
                operacion = operacion.slice(0, -1);
                pantalla.value = operacion;
            } else if (accion === "igual") {
                try {
                    pantalla.value = eval(operacion);
                    operacion = pantalla.value;
                } catch {
                    pantalla.value = "Error";
                    operacion = "";
                }
            }
        }
    });
});