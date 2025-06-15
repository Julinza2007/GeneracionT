const entrenado = localStorage.getItem("entrenamiento") == "true";
const esferaDisponible = localStorage.getItem("esferaDisponible") == "true";

let opcion3 = document.createElement("a");
opcion3.innerHTML = `<span class='opcion'>Opcion 3.</span> Ir a entrenar.`;
opcion3.href = "opc3/entrenar.html";

let opcion2 = document.createElement("a");
opcion2.innerHTML = `<span class='opcion'>Opcion 2.</span> Buscar esfera de cuatro estrellas.`;
opcion2.href = "opc2/opc2.html";

let nav = document.querySelector("nav");


if(esferaDisponible){
    opcion2.remove();
}
else{
    nav.appendChild(opcion2);
}

if (entrenado) {
    opcion3.remove();
}
else{
    nav.appendChild(opcion3);
}
