//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function esNumeroPerfecto(n) {
    let sum = 0;
  
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
  
    return sum === n;
  }
  
  console.log(esNumeroPerfecto(28));
  