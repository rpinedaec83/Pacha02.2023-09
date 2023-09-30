let nro= prompt("escribe un numero: ");
let caden=nro.length
let parte=caden.slice(nro,nro);
if(parte=="4"){
    console.log("El numero : "+nro+" termina en 4");
}
else {
    console.log("El numero : "+nro+" no termina en 4");
}
