/*Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido 
y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”*/


function arrow(nombre, apellido, edad) {

    console.log("Hola mi nombre es "+nombre+" "+apellido+" y mi edad "+edad )
    return {
        nombre, 
        apellido,
        edad
    };
}
console.log(arrow(sebastián,yabiku,33))

