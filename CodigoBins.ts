const tipoBins = document.getElementById("tipoBins") as HTMLSelectElement;

let pesoEntrada = document.getElementById("pesoEntrada") as HTMLInputElement;
let pesoSalida = document.getElementById("pesoSalida") as HTMLInputElement;
let numeroBins1 = document.getElementById("numeroBins1") as HTMLInputElement;

let resultado = document.getElementById("resultado1") as HTMLDivElement;
const boton = document.getElementById("boton") as HTMLButtonElement;

const check1 = document.getElementById("check1") as HTMLInputElement;
const xRomana = document.getElementById("xRomana") as HTMLElement;
const xRomanaHidden = document.querySelector(".xRomanaHidden") as HTMLElement;

if (boton) {// Checkeo de null. Si no existe el boton, no se ejecuta el codigo. Si type esta definido en la constante, no tira error.
  boton.addEventListener("click", () => {
    if (
      pesoEntrada.value.trim() === "" ||
      pesoSalida.value.trim() === "" ||
      numeroBins1.value.trim() === ""
    ) {
      resultado.textContent = "Por favor, complete todos los campos";
    } else {
      resultado.textContent =
        "Resultado: " +
        (parseInt(pesoEntrada.value) - parseInt(pesoSalida.value) - parseInt(tipoBins.selectedOptions[0].value) * parseInt(numeroBins1.value)) / parseInt(numeroBins1.value);
    }
  });
}
check1.addEventListener("change",()=>{
  if (check1.checked) {
    // xOficinaHidden.classList.add("mostrar2");
    xRomana.style.height = "fit-content";
    xRomana.style.transition = "all 0.5s ease";
    xRomanaHidden.style.opacity = "1";
    xRomanaHidden.style.transform = "translateX(0px)";
  }else{
    // xOficinaHidden.classList.remove("mostrar2");
    // clases no afectan de lamisma manera a un div que a un form
    xRomana.style.height = "45px";
    xRomana.style.transition = "all 0.5s ease";
    xRomanaHidden.style.opacity = "0";
    xRomanaHidden.style.transform = "translateX(-450px)";
  }
})



const submit = document.getElementById("submit") as HTMLButtonElement;
let xOficinaHidden = document.querySelector(".xOficinaHidden") as HTMLElement;
let xOficina = document.getElementById("xOficina") as HTMLElement;
const aImprimir = document.getElementById("aImprimir") as HTMLDivElement;

let pesoTorre = document.getElementById("pesoTorre") as HTMLInputElement;
let resultado2 = document.getElementById("resultado2") as  HTMLDivElement;
let resultado3 = document.getElementById("resultado3") as HTMLDivElement;
let numeroBins2 = document.getElementById("numeroBins2") as  HTMLInputElement;

let pesoBinsVacios = document.getElementById("pesoBinsVacios") as HTMLDivElement;
let soloFruta = document.getElementById("soloFruta") as HTMLDivElement;
let promedio = document.getElementById("promedio") as HTMLDivElement;
const check2 = document.getElementById("check2") as HTMLInputElement;


const checkPremium = document.getElementById("s1-14") as HTMLInputElement;
const totes2 = document.getElementById("totes2") as HTMLInputElement;
const checkCalculoTotes = document.getElementById("s1-2") as HTMLInputElement;
const divCalcTotes = document.querySelector(".checkbox-wrapper-2") as HTMLDivElement;

// function calcularTotes(){
//   if (checkCalculoTotes.checked && Number(numeroBins2.value) > 0|| totes2.value === ""){
//     numeroBins2.addEventListener("input",()=>{
//       totes2.value = (Number(numeroBins2.value)*24).toString();
// })}}

checkPremium.addEventListener("change",()=>{
  if (checkPremium.checked) {
    totes2.style.display = "block";
    totes2.setAttribute("required","true");
    totes2.setAttribute("value","");
    divCalcTotes.style.display = "block";
  }else{
    divCalcTotes.style.display = "none";
    totes2.style.display = "none";
    totes2.setAttribute("value","0")
  }
})
checkCalculoTotes.addEventListener("change",()=>{
  if (checkCalculoTotes.checked){
    numeroBins2.addEventListener("input",()=>{
    totes2.value = (Number(numeroBins2.value)*24).toString();
  })
}else{
  numeroBins2.addEventListener("input",()=>{
    totes2.value = totes2.value = "";
})}})


let sumaTorres:number = 0;//se inicializa en 0 para declarar antes del uso (del loop). Abajo se usa como acumulador.
let resultadoBinsVacios:number = 0;
let resultadoSoloFruta:number = 0;
let kgBt:number = 0;

xOficinaHidden.addEventListener("submit",evt=>{
  evt.preventDefault();
  aImprimir.style.transition = "all 0.5s ease";
  aImprimir.style.opacity = "1";

  let nuevoPeso = document.createElement("div");
  nuevoPeso.innerHTML = parseInt(pesoTorre.value).toString();
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
      if (arrayPesos.length == 0) {
        sumaTorres = 0;
        resultadoBinsVacios=0;
        resultadoSoloFruta=0;
        kgBt=0;
      }
}
      sumaTorres = arrayPesos.reduce((accumulator, currentValue) => accumulator + currentValue,0,);// Acaba siendo un acumulador.
      resultado3.innerHTML = "La suma de bins da "+sumaTorres;
      resultadoBinsVacios = (Number(tipoBins.selectedOptions[0].value)*Number(numeroBins2.value))+Number(totes2.value);
      pesoBinsVacios.innerHTML = "El peso de los recipientes sin fruta es "+ resultadoBinsVacios;
      resultadoSoloFruta = sumaTorres-resultadoBinsVacios;
      soloFruta.innerHTML = "Solo la fruta pesa "+resultadoSoloFruta;
      kgBt = resultadoSoloFruta/(checkPremium.checked ? Number(totes2.value) : Number(numeroBins2.value));
      promedio.innerHTML = isNaN(kgBt) ? '' : "Eso da un promedio de "+kgBt.toFixed(5)+" por bins";
    }
    actualizarValor();
    const limpiarTodo = document.getElementById("limpiarTodo") as HTMLButtonElement;
limpiarTodo.addEventListener("click",()=>{
  aImprimir.style.transition = "all 0.5s ease";
  aImprimir.style.opacity = "0";
  numeroBins2.value = "";
  totes2.value = "";
  kgBt=0;
  console.log("Array vaciado");
  setTimeout(() => {
    resultado2.innerHTML = "";
    resultado3.innerHTML = "";
    pesoBinsVacios.innerHTML = "";
    soloFruta.innerHTML = "";
    promedio.innerHTML = "";
    sumaTorres = 0;
    resultadoBinsVacios=0;
    resultadoSoloFruta=0;
    actualizarValor();
  }, 510);
})
})
check2.addEventListener("change",()=>{
  if (check2.checked) {
    // xOficinaHidden.classList.add("mostrar2");
    // xOficina.style.display = "block";
    xOficina.style.height = "fit-content";
    xOficina.style.transition = "all 0.5s ease";
    xOficinaHidden.style.opacity = "1";
    xOficinaHidden.style.transform = "translateX(0px)";
  }else{
    // xOficinaHidden.classList.remove("mostrar2");
    // clases no afectan de lamisma manera a un div que a un form
    // xOficina.style.display = "none";
    xOficina.style.height = "45px";
    xOficina.style.transition = "all 0.5s ease";
    xOficinaHidden.style.opacity = "0";
    xOficinaHidden.style.transform = "translateX(-450px)";
  }
})

