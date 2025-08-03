let p = document.createElement('p');
document.body.append(p);
const handleSubmit = (e) => {
    e.preventDefault();
    p.textContent = '';
    let nota = +e.target.nota.value;
    
    if(nota >= 0 && nota <= 2){
        p.textContent= 'Muy mal';
    }
    else if(nota > 2 && nota < 5){
        p.textContent= 'Mal';
    }
    else if(nota == 5){
        p.textContent= 'Tan cerca pero tan lejos';
    }
    else if(nota >= 6 && nota <= 8){
        p.textContent= 'Bien!';
    }
    else if(nota >= 9 && nota <= 10){
        p.textContent= 'Muy bien!!';
    }
    else if(nota < 0 || nota > 10){
        p.textContent= 'Error, Introduzca una nota entre 0 y 10!!';
    }

}