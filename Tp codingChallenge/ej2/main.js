let p = document.createElement("p");
document.body.append(p);
const handleSubmit = (e) =>{
    e.preventDefault();
    let string = e.target.string.value;
    let num1 = +e.target.num1.value;
    let num2 = +e.target.num2.value;
    biggestOne(string, num1, num2);
}

const biggestOne = (string, num1, num2) =>{
        if(num1 > num2){
            p.textContent = `El número mayor es ${num1}`;
        }
        else if(num2 > num1){
            p.textContent = `El número mayor es ${num2}`;
        }
        else if(num1 == num2){
            p.textContent = `${string[0]}, ${string[string.length - 1]}`;
        }
    }