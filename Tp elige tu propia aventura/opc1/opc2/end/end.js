const esferaDisponible = localStorage.getItem("esferaDisponible") == "true";
if(esferaDisponible){
    document.querySelector('h1').remove();
    document.querySelector('a').remove();
    document.querySelector('h3').remove();

    let img = document.querySelector('img');
    img.src = './SynShenLong.png';
    
    
    let h2 = document.querySelector('h2');
    h2.textContent = 'Saludos, me la has complicado bastante terrícola bastardo... Pero te exterminaré y tomaré lo que es mío.';
        
    let tarjeta = document.querySelector('.tarjeta');
    
    let nav = document.createElement('nav');
    nav.classList.add('opciones');

    let a = document.createElement('a');
    a.textContent = 'Pelear con el dragón maligno.';
    a.href = './final.html';

    tarjeta.append(nav);
    nav.append(a);
}