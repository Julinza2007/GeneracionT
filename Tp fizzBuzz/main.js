let p = document.createElement("p");
document.body.append(p);
function handleSubmit(e){
    e.preventDefault();
    p.textContent = "";
    let string1 = e.target.string1.value;
    let string2 = e.target.string2.value;
    let fizz = +e.target.fizz.value;
    let buzz = +e.target.buzz.value;
    let limite = +e.target.limite.value;

    if(limite >= 0 && limite <= 100){
        for(i=1; i <= limite; i++){
            if(i % fizz == 0 && i % buzz == 0){
                p.textContent += `, ${string1 + string2}`;
            }
            else if(i % fizz == 0){
                p.textContent += `, ${string1}`;
            }
            else if(i % buzz == 0){
                p.textContent += `, ${string2}`;
            }
            else{
                if(i == 1){
                    p.textContent += i;
                }
                else{
                    p.textContent += `, ${i}`;
                }
            }
        }

    }

}