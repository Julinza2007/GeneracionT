let p = document.createElement('p');
document.body.append(p);
let form = document.querySelector('form');
const handleSubmit = (e) => {
    e.preventDefault();
    let genero = e.target.genero.value;
    let edad = +e.target.edad.value;
    calcularJubilacion(genero, edad);
    form.reset();
}

const calcularJubilacion = (genero, edad) =>{
    if(edad > 0 && genero != ""){
        p.style.color = 'white';
        if(genero == 'Mujer'){
            if(edad >= 60){
                p.textContent = 'Usted ya puede jubilarse.'
            }
            else{
                p.textContent = `Usted no puede jubilarse aún. Le faltan ${60 - edad} años.`;
            }
        }
        else if(genero == 'Hombre'){
            if(edad >= 65){
                p.textContent = 'Usted ya puede jubilarse.'
            }
            else{
                p.textContent = `Usted no puede jubilarse aún. Le faltan ${65 - edad} años.`;
            }
        }
    }
    else{
        p.textContent = 'Error en el ingreso de datos.';
        p.style.color = 'red';
    }
}