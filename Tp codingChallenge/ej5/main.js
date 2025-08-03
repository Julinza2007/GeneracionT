const agregarAnioNacimiento = (personas) => {
    const anioActual = new Date().getFullYear();
    for (let persona of personas) {
        persona.anioNacimiento = anioActual - persona.edad;
    }
    return personas;
};

let personas = [
    { nombre: "Juan", edad: 19 },
    { nombre: "Mario", edad: 22 }
];

console.log(agregarAnioNacimiento(personas));