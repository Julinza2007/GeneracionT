let h1 = document.createElement('h1');
h1.textContent = 'Casi todo está hecho en Javascript ASJDISJADJ (ayuda)';
h1.id = 'titulo';
document.body.append(h1);

let form = document.createElement('form');
form.onsubmit = handleSubmit;

document.body.append(form);

let input = document.createElement('input');
input.id = 'input';
input.placeholder='Cantidad de panchos';
form.append(input);

let button = document.createElement('input');
button.id = 'button';
button.type = 'submit';
button.value = 'Pedir';
form.append(button);

let container = document.createElement("div");
document.body.append(container);
container.classList.add('container');

function handleSubmit (e){
    e.preventDefault();
    let cantPanchos = input.value;
    while(cantPanchos > 100){
        alert('No se pueden hacer más de 100 panchos (no alcanza para tanto presupuesto)');
        cantPanchos = 0;
    }
    pedirPanchos(cantPanchos);
}

function pedirPanchos(cantPanchos){
    container.innerHTML = '';

    for(let i=0; i < cantPanchos; i++){
        let plato = document.createElement('div');
        let pancho = document.createElement('div');
        let panSuperior = document.createElement('div');
        let panInferior = document.createElement('div');
        let salchicha = document.createElement('div');
    
        container.append(plato);
        plato.append(pancho);
        pancho.append(panSuperior);
        pancho.append(salchicha);
        pancho.append(panInferior);
    
        plato.classList.add('plato');
        pancho.classList.add('pancho');
        panSuperior.classList.add('pan');
        panSuperior.classList.add('panSuperior');
        panInferior.classList.add('pan');
        panInferior.classList.add('panInferior');
        salchicha.classList.add('salchicha');
    }
}

