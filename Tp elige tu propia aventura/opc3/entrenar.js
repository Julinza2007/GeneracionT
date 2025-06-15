let cont = 0;
const btn = document.getElementById("btnEntrenamiento");
const gif = document.getElementById("gif");

let contTexto = document.createElement("p");
contTexto.id = "contador";
contTexto.style.textAlign = "center";
contTexto.style.fontSize = "1.5rem";
contTexto.textContent = `Flexiones: ${cont}`;
document.body.insertBefore(contTexto, btn);

function posicionarBoton() {
    let top = Math.random() * 80 + 10;
    let left = Math.random() * 80 + 10;
    btn.style.position = "absolute";
    btn.style.top = `${top}%`;
    btn.style.left = `${left}%`;
}

function reproducirGifYResetear() {
    gif.src = "./entrenamiento.gif";
    gif.style.display = "block";

    setTimeout(() => {
        gif.src = "./entrenamientoInicial.png";
        gif.style.display = "block";
        btn.style.display = "block";
        posicionarBoton();
    }, 1800);
}

function handleClick() {
    if (cont == 0) {
        btn.textContent = "Realizar flexión";
    }

    cont++;
    btn.style.display = "none";
    contTexto.textContent = `Flexiones: ${cont}`;
    reproducirGifYResetear();

    if (cont == 5) {
        setTimeout(() => {
            let mensaje = document.createElement("h2");
            mensaje.textContent = "Entrenamiento terminado!!";
            mensaje.style.textAlign = "center";
            document.body.append(mensaje);

            let container = document.createElement("div");
            container.classList.add("container");
            document.body.append(container);
            let btnVolver = document.createElement("a");
            btnVolver.href = "../main.html";
            btnVolver.textContent = "Volver";
            btnVolver.classList.add("volver");
            btnVolver.style.display = "inline-block";
            btnVolver.style.margin = "0 auto";
            container.append(btnVolver);

            localStorage.setItem("entrenamiento", "true");
            btn.remove();
        }, 1800);
    }
}
