window.addEventListener('load', () => {

    const power = (base, exponent) => {

      try {
        const baseNum = Number(base);
        const exponentNum = Number(exponent);
  
        if (isNaN(baseNum) && isNaN(exponentNum)) {
          throw new Error(`Entrambi i numeri inseriti: ${base}, ${exponent} non sono numeri!`);
        } else if (isNaN(baseNum)) {
          throw new Error(`${base} non è un numero!`);
        } else if (isNaN(exponentNum)) {
          throw new Error(`${exponent} non è un numero!`);
        }
  
        const result = baseNum ** exponentNum;
        console.log(`Il risultato di ${baseNum} elevato alla ${exponentNum} è: ${result}`);
        return result;

      } catch (error) {
        console.error(`Errore: ${error.message}`);
        return null;

      } finally {
        console.log("Operazione completata!");
      }

    };
  
    // power(5, 'ciao');
  
  });
  