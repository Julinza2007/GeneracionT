let frutasYVerduras =
[
    { fruta: "banana" },
    { verdura: "apio" },
    { fruta: "manzana" },
    { fruta: "frutilla" },
    { verdura: "zanahoria" },
    { fruta: "kiwi" },
    { fruta: "sandia" },
    { fruta: "melon" },
    { verdura: "repollo" },
    { fruta: "mango" }
];

const filtrarFrutas = (array) => {
    const frutas = [];
    for(let i of array){
        if(i.fruta){
            frutas.push(i.fruta);
        }
    }
    return frutas;
}

console.log("Frutas: ", filtrarFrutas(frutasYVerduras));

