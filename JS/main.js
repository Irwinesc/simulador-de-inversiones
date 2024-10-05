// Varibles Globales
let periodos, tasa, renta, resultado;

function inversion() {
    periodos = document.getElementById("periodo").value;
    tasa = document.getElementById("ts").value;
    renta = document.getElementById("rnt").value; 
    return renta*(((1+((tasa)/100)/12)**periodos)-1)/((tasa)/100/12);
};

let input = document.getElementsByTagName("INPUT")

for (i=0; i<input.length; i++) {
    input[i].addEventListener("change",  function(){
    resultado = inversion();
    resultado = resultado.toFixed(2);
    resultado = resultado.toString();
    resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
     console.log(resultado);
    });
   };
  

function mostrar() {
    document.getElementById('resultado').innerHTML = resultado;
};

