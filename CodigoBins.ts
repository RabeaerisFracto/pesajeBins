const tipoBins = document.getElementById("tipoBins") as HTMLSelectElement;
const tipoTote = document.getElementById("tipoTote") as HTMLSelectElement;

let pesoEntrada = document.getElementById("pesoEntrada") as HTMLInputElement;
let pesoSalida = document.getElementById("pesoSalida") as HTMLInputElement;
let numeroBins1 = document.getElementById("numeroBins1") as HTMLInputElement;
const boton = document.getElementById("boton") as HTMLFormElement;

let promedioBinsRomana = document.getElementById("promedioBinsRomana") as HTMLDivElement;


const check1 = document.getElementById("check1") as HTMLInputElement;
const xRomana = document.getElementById("xRomana") as HTMLElement;
const xRomanaHidden = document.querySelector(".xRomanaHidden") as HTMLElement;

const checkTotesRomana = document.getElementById("s1-14Romana") as HTMLInputElement;//x CheckPremium1
const totes1 = document.getElementById("totes1") as HTMLInputElement;
const checkCalculoTotesRomana = document.getElementById("s1-2Romana") as HTMLInputElement;
const divCalcTotesRomana = document.getElementById("checkbox-wrapper-2-Romana") as HTMLDivElement;

const checkTotesVaciosRomana = document.getElementById("s1-2totesVaciosRomana") as HTMLInputElement;
const inputTotesVaciosRomana = document.getElementById("inputTotesVaciosRomana") as HTMLInputElement;

//DISPLAY DE INPUT TOTES
checkTotesRomana.addEventListener("change",()=>{
  if (checkTotesRomana.checked) {
    totes1.style.display = "block";
    totes1.setAttribute("required","true");
    totes1.value = "";
    divCalcTotesRomana.style.display = "block";
    checkTotesVaciosRomana.addEventListener("change",()=>{
      if (checkTotesVaciosRomana.checked) {
        inputTotesVaciosRomana.style.display = "block";
        inputTotesVaciosRomana.style.margin = "0 0 0 10px";
        // inputTotesVaciosRomana.setAttribute("required","true");
        inputTotesVaciosRomana.setAttribute("value","");
        numeroBins1.focus();
        
      }else{
        inputTotesVaciosRomana.value = "";
        inputTotesVaciosRomana.style.display = "none";
      }
    })
  }else{
    inputTotesVaciosRomana.value = "";
    divCalcTotesRomana.style.display = "none";
    totes1.style.display = "none";
    totes1.setAttribute("value","0");
    checkTotesVaciosRomana.checked = false;
    inputTotesVaciosRomana.style.display = "none";
  }
})

//CALCULO TOTES
checkCalculoTotesRomana.addEventListener("change",()=>{
  if (checkCalculoTotesRomana.checked){
    numeroBins1.focus();
    numeroBins1.addEventListener("input",()=>{
    totes1.value = (Number(numeroBins1.value)*(tipoTote.selectedOptions[0].innerHTML === "SPIC" ? 57 : 24)).toString();
  })
}else{
  numeroBins1.focus();
  numeroBins1.addEventListener("input",()=>{
    totes1.value = totes1.value = "";
})}})

xRomanaHidden.addEventListener("submit", evt => {
  evt.preventDefault();
  console.log("Formulario enviado");
  let diferenciaPesoRomana = (parseInt(pesoEntrada.value) - parseInt(pesoSalida.value));
  let pesoRecipientesRomana = (parseInt(tipoBins.selectedOptions[0].value) * parseInt(numeroBins1.value)+ (parseInt(totes1.value)*parseFloat(tipoTote.selectedOptions[0].value))+((inputTotesVaciosRomana.value === "" ? 0 : parseInt(inputTotesVaciosRomana.value))*parseFloat(tipoTote.selectedOptions[0].value)))
  promedioBinsRomana.innerHTML =
    "Diferencia de peso: " + diferenciaPesoRomana +
    "<br>Peso de Recipientes: " + pesoRecipientesRomana +
    "<br/>Solo Fruta neto: " + (diferenciaPesoRomana - pesoRecipientesRomana)+
    "<br/>Promedio: " + ((diferenciaPesoRomana - pesoRecipientesRomana) / (checkTotesRomana.checked ? (parseInt(totes1.value)) : parseInt(numeroBins1.value))).toFixed(5);
  }
);
//BOTON LIMPIAR Y ESTILO
const limpiarRomana = document.getElementById("limpiarRomana") as HTMLButtonElement;
limpiarRomana.addEventListener("click",()=>{
  promedioBinsRomana.style.transition = "all 0.5s ease";
  promedioBinsRomana.style.opacity = "0";
  numeroBins1.value = "";
  totes1.value = (checkTotesRomana.checked ? "" : "0");
  numeroBins1.focus();
  pesoEntrada.value = "";
  pesoSalida.value = "";
  inputTotesVaciosRomana.value = "";
  console.log("Romana limpiada");
  setTimeout(() => {
    promedioBinsRomana.innerHTML = "";
    promedioBinsRomana.style.opacity = "1";
  }, 510);
})


//--------------------OFICINA--------------------
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
let promedioTotalOficina = document.getElementById("promedioTotalOficina") as HTMLDivElement;
let recipientesTotales2 = document.getElementById("recipientesTotales2") as HTMLInputElement;
const check2 = document.getElementById("check2") as HTMLInputElement;


const checkPremium = document.getElementById("s1-14Oficina") as HTMLInputElement;
const totes2 = document.getElementById("totes2") as HTMLInputElement;
const checkCalculoTotes = document.getElementById("s1-2Oficina") as HTMLInputElement;
const divCalcTotes = document.getElementById("checkbox-wrapper-2-Oficina") as HTMLDivElement;

const checkTotesVacios = document.getElementById("s1-2totesVacios") as HTMLInputElement;
const inputTotesVacios = document.getElementById("inputTotesVacios") as HTMLInputElement;



//DISPLAY DE INPUT TOTES
checkPremium.addEventListener("change",()=>{
  if (checkPremium.checked) {
    totes2.style.display = "block";
    totes2.setAttribute("required","true");
    totes2.value = "";
    divCalcTotes.style.display = "flex";
//////////////TOTES VACIOS
    checkTotesVacios.addEventListener("change",()=>{
      if (checkTotesVacios.checked) {
        inputTotesVacios.style.display = "block";
        inputTotesVacios.style.margin = "0 0 0 10px";
        // inputTotesVacios.setAttribute("required","true");
        inputTotesVacios.value = "";
        numeroBins2.focus();
        
      }else{
        inputTotesVacios.style.display = "none";
        inputTotesVacios.value = "";
      }
    })
  }else{
    divCalcTotes.style.display = "none";
    totes2.style.display = "none";
    totes2.value = "";
    checkTotesVacios.checked = false;
    inputTotesVacios.style.display = "none";
  }
})
//CALCULO TOTES
checkCalculoTotes.addEventListener("change",()=>{
  if (checkCalculoTotes.checked){
    numeroBins2.focus();
    numeroBins2.addEventListener("input",()=>{
    totes2.value = (Number(numeroBins2.value)*(tipoTote.selectedOptions[0].innerHTML === "SPIC" ? 57 : 24)).toString();
  })
}else{
  numeroBins2.focus();
  numeroBins2.addEventListener("input",()=>{totes2.value = ""})}})


let sumaTorres:number = 0;//se inicializa en 0 para declarar antes del uso (del loop). Abajo se usa como acumulador.
let resultadoBinsVacios:number = 0;
let resultadoSoloFruta:number = 0;
let kgBt:number = 0;


//IMPRESION DE RESULTADOS
xOficinaHidden.addEventListener("submit",evt=>{
  evt.preventDefault();
  aImprimir.style.transition = "all 0.5s ease";
  aImprimir.style.opacity = "1";
//PESO DE TORRES EN VIEWPORT
  let nuevoPeso = document.createElement("div");
  nuevoPeso.innerHTML = parseInt(pesoTorre.value).toString()+" +  ";
  resultado2.appendChild(nuevoPeso);
  pesoTorre.value = "";
  nuevoPeso.addEventListener("dblclick",()=>{
    nuevoPeso.remove()
    actualizarValor();
  })
  //FUNCION DE CALCULOS
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
//CALCULOS
      sumaTorres = arrayPesos.reduce((accumulator, currentValue) => accumulator + currentValue,0,);// Acaba siendo un acumulador.
      resultado3.innerHTML = "Diferencia de peso: "+sumaTorres;
      resultadoBinsVacios = (Number(tipoBins.selectedOptions[0].value)*Number(numeroBins2.value))+(parseInt(totes2.value)*parseFloat(tipoTote.selectedOptions[0].value)+(inputTotesVacios.value === "" ? 0 : (parseInt(inputTotesVacios.value)*parseFloat(tipoTote.selectedOptions[0].value))));
      pesoBinsVacios.innerHTML = "Peso de recipientes: "+ resultadoBinsVacios;
      resultadoSoloFruta = sumaTorres-resultadoBinsVacios;
      soloFruta.innerHTML = "Solo fruta neto: "+resultadoSoloFruta;
      kgBt = resultadoSoloFruta/(checkPremium.checked ? Number(totes2.value) : Number(numeroBins2.value));
      promedio.innerHTML = isNaN(kgBt) ? '' : "Promedio: "+kgBt.toFixed(5);
      if (recipientesTotales2.value === "") {
        promedioTotalOficina.style.display = "none";
    }else{
      promedioTotalOficina.style.display = "block";
      promedioTotalOficina.innerHTML = "Promedio total: "+(kgBt*Number(recipientesTotales2.value)).toFixed(5);
  }}
    actualizarValor();
  
//BOTON LIMPIAR (transformar a funcion??)
  const limpiarTodo = document.getElementById("limpiarTodo") as HTMLButtonElement;
  limpiarTodo.addEventListener("click",()=>{
    numeroBins2.focus();
    aImprimir.style.transition = "all 0.5s ease";
    aImprimir.style.opacity = "0";
    numeroBins2.value = "";
    totes2.value = (checkPremium.checked ? "" : "0"); //Asi se evita NaN despues de limpieza
    inputTotesVacios.value = "";
    recipientesTotales2.value = "";
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

//ESTILO xImprimir
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

