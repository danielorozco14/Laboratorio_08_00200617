
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
function validarCampo() {
    var fechaActividad = document.getElementById("fecha");
    var description = document.getElementById("descp");
    var cantity = document.getElementById("cant");
    if (fechaActividad.value.length == 0 && description.value.length == 0 && cantity.value.length == 0) {
        alert('El campo de texto esta vacio!');
        fechaActividad.style.borderColor = "red";
        description.style.borderColor = "red";
        cantity.style.borderColor = "red";
        return false;
    }
    else if (fechaActividad.value.length == 0 ) {
        alert('El campo de texto esta vacio!');
        fechaActividad.style.borderColor = "red";
        return false;
    } else if (description.value.length == 0 ) {
        alert('El campo de texto esta vacio!');
        description.style.borderColor = "red";
        return false;
    } else if (cantity.value.length == 0 ) {
        alert('El campo de texto esta vacio!');
        cantity.style.borderColor = "red";
        return false;
    }
    else {
        fechaActividad.style.borderColor = "green";
        description.style.borderColor = "green";
        cantity.style.borderColor = "green";
        return true;
    }
}
var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

console.log(formulario)
//ELEMENTO SUBMIT
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});
//CREAR NODO
const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}
//ELIMINAR NODO

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
const agregar = () => {
    if (validarCampo() === true) {
        var eventtr = document.querySelectorAll(".click");
        eventtr.forEach((item, index) => {
            item.addEventListener("click", () => {

                document.querySelector("#fecha").value = item.childNodes[1].textContent;
                document.querySelector("#descp").value = item.childNodes[2].textContent;
                document.querySelector("#cant").value = item.childNodes[3].textContent;

            });
        })
    }

}

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

//VALIDACIONES DE FORMULARIO

