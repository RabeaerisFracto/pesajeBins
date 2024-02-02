var tipoBins = document.getElementById("tipoBins");
var pesoEntrada = document.getElementById("pesoEntrada");
var pesoSalida = document.getElementById("pesoSalida");
var numeroBins1 = document.getElementById("numeroBins1");
var resultado = document.getElementById("resultado1");
var boton = document.getElementById("boton");
var check1 = document.getElementById("check1");
var xRomana = document.getElementById("xRomana");
var xRomanaHidden = document.querySelector(".xRomanaHidden");
if (boton) { // Checkeo de null. Si no existe el boton, no se ejecuta el codigo. Si type esta definido en la constante, no tira error.
    boton.addEventListener("click", function () {
        if (pesoEntrada.value.trim() === "" ||
            pesoSalida.value.trim() === "" ||
            numeroBins1.value.trim() === "") {
            resultado.textContent = "Por favor, complete todos los campos";
        }
        else {
            resultado.textContent =
                "Resultado: " +
                    (parseInt(pesoEntrada.value) - parseInt(pesoSalida.value) - parseInt(tipoBins.selectedOptions[0].value) * parseInt(numeroBins1.value)) / parseInt(numeroBins1.value);
        }
    });
}
check1.addEventListener("change", function () {
    if (check1.checked) {
        // xOficinaHidden.classList.add("mostrar2");
        xRomana.style.height = "fit-content";
        xRomana.style.transition = "all 0.5s ease";
        xRomanaHidden.style.opacity = "1";
        xRomanaHidden.style.transform = "translateX(0px)";
    }
    else {
        // xOficinaHidden.classList.remove("mostrar2");
        // clases no afectan de lamisma manera a un div que a un form
        xRomana.style.height = "45px";
        xRomana.style.transition = "all 0.5s ease";
        xRomanaHidden.style.opacity = "0";
        xRomanaHidden.style.transform = "translateX(-450px)";
    }
});
var submit = document.getElementById("submit");
var xOficinaHidden = document.querySelector(".xOficinaHidden");
var xOficina = document.getElementById("xOficina");
var aImprimir = document.getElementById("aImprimir");
var pesoTorre = document.getElementById("pesoTorre");
var resultado2 = document.getElementById("resultado2");
var resultado3 = document.getElementById("resultado3");
var numeroBins2 = document.getElementById("numeroBins2");
var pesoBinsVacios = document.getElementById("pesoBinsVacios");
var soloFruta = document.getElementById("soloFruta");
var promedio = document.getElementById("promedio");
var check2 = document.getElementById("check2");
var checkPremium = document.getElementById("s1-14");
var totes2 = document.getElementById("totes2");
checkPremium.addEventListener("change", function () {
    if (checkPremium.checked) {
        totes2.style.display = "block";
        totes2.setAttribute("required", "true");
        totes2.setAttribute("value", "");
    }
    else {
        totes2.style.display = "none";
        totes2.setAttribute("value", "0");
    }
});
var sumaTorres = 0; //se inicializa en 0 para declarar antes del uso (del loop). Abajo se usa como acumulador.
var resultadoBinsVacios = 0;
var resultadoSoloFruta = 0;
var kgBt = 0;
xOficinaHidden.addEventListener("submit", function (evt) {
    evt.preventDefault();
    aImprimir.style.transition = "all 0.5s ease";
    aImprimir.style.opacity = "1";
    var nuevoPeso = document.createElement("div");
    nuevoPeso.innerHTML = parseInt(pesoTorre.value).toString();
    resultado2.appendChild(nuevoPeso);
    pesoTorre.value = "";
    nuevoPeso.addEventListener("dblclick", function () {
        nuevoPeso.remove();
        actualizarValor();
    });
    function actualizarValor() {
        var arrayPesos = [];
        for (var i = 0; i < resultado2.children.length; i++) {
            arrayPesos.push(parseInt(resultado2.children[i].innerHTML));
            console.log(arrayPesos);
            if (arrayPesos.length == 0) {
                sumaTorres = 0;
                resultadoBinsVacios = 0;
                resultadoSoloFruta = 0;
                kgBt = 0;
            }
        }
        sumaTorres = arrayPesos.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0); // Acaba siendo un acumulador.
        resultado3.innerHTML = "La suma de bins da " + sumaTorres;
        resultadoBinsVacios = (Number(tipoBins.selectedOptions[0].value) * Number(numeroBins2.value)) + Number(totes2.value);
        pesoBinsVacios.innerHTML = "El peso de bins sin fruta es " + resultadoBinsVacios;
        resultadoSoloFruta = sumaTorres - resultadoBinsVacios;
        soloFruta.innerHTML = "Solo la fruta pesa " + resultadoSoloFruta;
        kgBt = resultadoSoloFruta / (checkPremium.checked ? Number(totes2.value) : Number(numeroBins2.value));
        promedio.innerHTML = isNaN(kgBt) ? '' : "Eso da un promedio de " + kgBt.toFixed(5) + " por bins";
    }
    actualizarValor();
    var limpiarTodo = document.getElementById("limpiarTodo");
    limpiarTodo.addEventListener("click", function () {
        aImprimir.style.transition = "all 0.5s ease";
        aImprimir.style.opacity = "0";
        numeroBins2.value = "";
        totes2.value = "";
        kgBt = 0;
        console.log("Array vaciado");
        setTimeout(function () {
            resultado2.innerHTML = "";
            resultado3.innerHTML = "";
            pesoBinsVacios.innerHTML = "";
            soloFruta.innerHTML = "";
            promedio.innerHTML = "";
            sumaTorres = 0;
            resultadoBinsVacios = 0;
            resultadoSoloFruta = 0;
            actualizarValor();
        }, 510);
    });
});
check2.addEventListener("change", function () {
    if (check2.checked) {
        // xOficinaHidden.classList.add("mostrar2");
        // xOficina.style.display = "block";
        xOficina.style.height = "fit-content";
        xOficina.style.transition = "all 0.5s ease";
        xOficinaHidden.style.opacity = "1";
        xOficinaHidden.style.transform = "translateX(0px)";
    }
    else {
        // xOficinaHidden.classList.remove("mostrar2");
        // clases no afectan de lamisma manera a un div que a un form
        // xOficina.style.display = "none";
        xOficina.style.height = "45px";
        xOficina.style.transition = "all 0.5s ease";
        xOficinaHidden.style.opacity = "0";
        xOficinaHidden.style.transform = "translateX(-450px)";
    }
});
