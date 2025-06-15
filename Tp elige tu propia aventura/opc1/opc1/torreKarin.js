const escalar = localStorage.getItem("escalar") == "true";
if(escalar){   
    let a = document.getElementById('opcionRemplazo');
    a.href= '../opc2/seguirEscalando.html';
    a.innerHTML = `<span class='opcion'>Opcion 1.</span> Seguir escalando.`;
}