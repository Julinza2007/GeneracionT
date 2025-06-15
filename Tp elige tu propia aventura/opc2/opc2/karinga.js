const esferaDisponible = localStorage.getItem("esferaDisponible") == "true";

if(esferaDisponible){
    let img = document.querySelector("img");
    img.src = "./esferaCuatroEstrellas.png";

    let h2 = document.querySelector("h2");
    h2.textContent = "Upa te ha entregado la esfera del dragón de cuatro estrellas!!";

    document.querySelector("nav").remove();
    let tarjeta = document.querySelector(".tarjeta");

    let volver = document.createElement("a");
    volver.classList.add("volver");
    volver.href = "../../main.html";
    volver.textContent = "Volver";
    tarjeta.append(volver);    
}




