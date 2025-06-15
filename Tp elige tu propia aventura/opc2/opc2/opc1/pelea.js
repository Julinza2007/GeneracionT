const entrenado = localStorage.getItem("entrenamiento") == "true";

if(entrenado){
    localStorage.setItem("esferaDisponible", "true");

    let h1 = document.querySelector("h1");
    h1.textContent = "Victoria!!";
    h1.style.color = "green";
    
    let img = document.querySelector("img");
    img.src = "./taoPaiPaiVencido.jpg";

    let h2 = document.querySelector("h2");
    h2.textContent = "Tao Pai Pai resistió bastante aunque gracias a tu esfuerzo en el entrenamiento, lograste derrotarlo y conseguir la victoria.";

    document.querySelector("h3").remove();

    let a = document.querySelector(".volver");
    a.removeAttribute("onclick");    
    a.textContent = "Volver a la tribu Karinga."
    a.href = "../karinga.html";
}