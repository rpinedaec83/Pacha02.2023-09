//10
function objetoAMatriz(objeto) 
{
    return Object.entries(objeto);
}
  
  // Ejemplo de uso:
  const miObjeto = { a: 1, b: 2 };
  const matrizResultado = objetoAMatriz(miObjeto);
  console.log(matrizResultado);
  