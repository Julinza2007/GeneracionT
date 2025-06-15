let tarjeta = document.querySelector(".tarjeta");
const escalar = localStorage.getItem("escalar") == "true";
const esferaDisponible = localStorage.getItem("esferaDisponible") == "true";
if(escalar){     
    let kamisama = document.getElementById('kamisama');
    kamisama.style.display = 'block';
    tarjeta.innerHTML = '';
    tarjeta.innerHTML = `<h2>Usaste el báculo sagrado y subiste 200 métros hacia arriba. Finalmente llegas a la cima. Te encuentras en el Palacio de Kamisama!</h2>`
    let nav = document.createElement('nav');
    nav.classList.add('opciones');
    let a = document.createElement('a');
    a.classList.add('volver');
    a.href = './end/end.html';
    if(esferaDisponible){
        a.textContent = 'Pedir deseo';
    }
    else{
        a.textContent = 'Preguntar donde está la última esfera del dragón';
    }
    nav.appendChild(a);
    tarjeta.appendChild(nav);
}