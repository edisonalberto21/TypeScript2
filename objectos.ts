var persona = {

    nombre : "Edison",
    apellido: "Giraldo",
    edad: 25,
    peso: 37
}

console.log(persona.apellido)

var array:Array<string> = ['uno','dos','tres']

console.log(array);

interface Usuario {
    nombre: string;
    apellido: string
}

var listado:Array<Usuario> = [
    {
        nombre:'edison',
        apellido:'Giraldo'
    },
    {
        nombre:'Alberto',
        apellido:'Restrepo'
    }
]

for(var i= 0;i<array.length;i++){
    console.log(listado[i])
}

for(let item of listado){
    console.log(item)
}

for(let item in listado){
    console.log(item)
}array


class Alumno {
    nombre:string;

    mostrar(){
        console.log("Hola,", this.nombre)
    }
}

var alumno:Alumno = new Alumno();

alumno.mostrar()