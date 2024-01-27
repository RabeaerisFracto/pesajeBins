const tipoBins = document.getElementById("tipoBins");

let pesoEntrada = document.getElementById("pesoEntrada");
let pesoSalida = document.getElementById("pesoSalida");
let numeroBins1 = document.getElementById("numeroBins1");

let resultado = document.getElementById("resultado1");
const boton = document.getElementById("boton");

const check1 = document.getElementById("check1");
const xRomana = document.getElementById("xRomana");
const xRomanaHidden = document.querySelector(".xRomanaHidden");

boton.addEventListener("click", ()=>{
  if (
    pesoEntrada.value.trim() === "" ||
    pesoSalida.value.trim() === "" ||
    numeroBins1.value.trim() === ""
  ) {
    resultado.textContent = "Por favor, complete todos los campos";
  }else{
  resultado.textContent = "Resultado: "+((parseInt(pesoEntrada.value) - parseInt(pesoSalida.value) - (tipoBins.selectedOptions[0].value*numeroBins1.value))/numeroBins1.value)
}});
check1.addEventListener("change",()=>{
  if (check1.checked) {
    xRomanaHidden.classList.add("mostrar1");
    xRomana.style.height = "fit-content";
  }else{
    xRomanaHidden.classList.remove("mostrar1");
    xRomana.style.height = "45px";
  }
})


let pesoTorre = document.getElementById("pesoTorre");
const submit = document.getElementById("submit");
let xOficinaHidden = document.querySelector(".xOficinaHidden");
let xOficina = document.getElementById("xOficina");
let resultado2 = document.getElementById("resultado2");
let resultado3 = document.getElementById("resultado3");
let numeroBins2 = document.getElementById("numeroBins2");
let pesoBinsVacios = document.getElementById("pesoBinsVacios");
let soloFruta = document.getElementById("soloFruta");
let promedio = document.getElementById("promedio");
const check2 = document.getElementById("check2");


xOficinaHidden.addEventListener("submit",evt=>{
  evt.preventDefault();
  let nuevoPeso = document.createElement("div");
  nuevoPeso.innerHTML = parseInt(pesoTorre.value);
  resultado2.appendChild(nuevoPeso);
  pesoTorre.value = "";
  nuevoPeso.addEventListener("dblclick",()=>{
    nuevoPeso.remove()
    actualizarValor();
  })
  function actualizarValor(){
    let arrayPesos = [];
    for (let i = 0; i < resultado2.children.length; i++) {
      arrayPesos.push(parseInt(resultado2.children[i].innerHTML));
      console.log(arrayPesos);
      if (arrayPesos == 0) {
        sumaTorres = "";
        resultadoBinsVacios="";
        resultadoSoloFruta="";
        kgBt="";
      }
}
      let sumaTorres = arrayPesos.reduce((accumulator, currentValue) => accumulator + currentValue,0,);
      resultado3.innerHTML = "La suma de bins da "+sumaTorres;
      let resultadoBinsVacios = (tipoBins.selectedOptions[0].value*numeroBins2.value);
      pesoBinsVacios.innerHTML = "El peso de bins sin fruta es "+ resultadoBinsVacios;
      let resultadoSoloFruta = sumaTorres-resultadoBinsVacios;
      soloFruta.innerHTML = "Solo la fruta pesa "+resultadoSoloFruta;
      let kgBt = resultadoSoloFruta/numeroBins2.value;
      promedio.innerHTML = "Eso da un promedio de "+kgBt.toFixed(5)+" por bins";
    }
    actualizarValor();
})
check2.addEventListener("change",()=>{
  if (check2.checked) {
    // xOficinaHidden.classList.add("mostrar2");
    xOficina.style.height = "fit-content";
    xOficina.style.transition = "all 3s ease";
    xOficinaHidden.style.opacity = "1";
    xOficinaHidden.style.transform = "translateX(0px)";
  }else{
    // xOficinaHidden.classList.remove("mostrar2");
    // clases no afectan de lamisma manera a un div que a un form
    xOficina.style.height = "45px";
    xOficina.style.transition = "all 3s ease";
    xOficinaHidden.style.opacity = "0";
    xOficinaHidden.style.transform = "translateX(-450px)";
  }
})




