var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("resultado");
var r = parseInt(r);

const historial = [];
const hist = document.getElementById("historial");

const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const mult = document.getElementById("mult");
const div = document.getElementById("dividir");

function crearHistorial(){
    const lista = document.createElement("ul");
    const item = document.createElement("li");
    item.textContent = historial[historial.length-1];
    lista.appendChild(item);
    hist.appendChild(lista);
}

function actualizarHistorial(n1, n2, icon,valor) {
    let ele = n1 +" "+ icon +" "+ n2 + " = " +" "+ valor;
    historial.push(ele);
    crearHistorial();
}

suma.addEventListener("click", function(){
    if(vacioCampo(n1, n2)){
        const num1 = parseInt(n1.value);
        const num2 = parseInt(n2.value);
        r = num1 + num2;
        res.textContent = r;
        actualizarHistorial(num1, num2, "+", r);
        r = 0;
    }
});

resta.addEventListener("click", function(){
    if(vacioCampo(n1, n2)){
        const num1 = parseInt(n1.value);
        const num2 = parseInt(n2.value);
        r = num1 - num2;
        res.textContent = r;
        actualizarHistorial(num1, num2, "-", r);
        r = 0;
    }
});

mult.addEventListener("click", function(){
    if(vacioCampo(n1, n2)){
        const num1 = parseInt(n1.value);
        const num2 = parseInt(n2.value);
        r = num1 * num2;
        res.textContent = r;
        actualizarHistorial(num1, num2, "*", r);
        r = 0;
    }
});

div.addEventListener("click", function(){
    if(vacioCampo(n1, n2)){
        const num1 = parseInt(n1.value);
        const num2 = parseInt(n2.value);
        if(num2 == 0){
            res.textContent = "NO DIVISION ENTRE 0";
        }else{
            r = num1 / num2;
            res.textContent = r;
            actualizarHistorial(num1, num2, "/", r);
            r = 0;
        }
    }
});

function vacioCampo(n1, n2){
    if(n1.value.length != 0 && n2.value.length != 0){
        return true;
    }else{
        alert("Ingrese valores");
        return false;
    }
}