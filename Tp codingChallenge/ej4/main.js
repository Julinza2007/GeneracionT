let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

const handleSubmit = (e) =>{
    e.preventDefault();
    let gaseosaConsulta = e.target.gaseosas.value;
    let stock = dispenserGaseosas(unidades, gaseosas);
    consultarStock(stock, gaseosaConsulta);    
}

const dispenserGaseosas = (unidades, gaseosas) =>{
    let stock = {unidades, gaseosas};
    return stock;
}

const consultarStock = (stock, gaseosaConsulta) => {
    for (let i = 0; i < stock.gaseosas.length; i++) {
        if (stock.gaseosas[i] == gaseosaConsulta) {
            alert(`Hay ${stock.unidades[i]} unidad/es de ${gaseosaConsulta}`);
            return 0;
        }
    }
    alert(`No tenemos ${gaseosaConsulta} en stock`);
};