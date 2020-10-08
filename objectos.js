var persona = {
    nombre: "Edison",
    apellido: "Giraldo",
    edad: 25,
    peso: 37
};
console.log(persona.apellido);
var array = ['uno', 'dos', 'tres'];
console.log(array);
var listado = [
    {
        nombre: 'edison',
        apellido: 'Giraldo'
    },
    {
        nombre: 'Alberto',
        apellido: 'Restrepo'
    }
];
for (var i = 0; i < array.length; i++) {
    console.log(listado[i]);
}
for (var _i = 0, listado_1 = listado; _i < listado_1.length; _i++) {
    var item = listado_1[_i];
    console.log(item);
}
for (var item in listado) {
    console.log(item);
}
