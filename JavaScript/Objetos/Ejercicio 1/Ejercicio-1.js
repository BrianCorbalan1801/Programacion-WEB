//Ejercicio:

//Tenemos una función que recibe dos parámetros. name y subs. Hace que la función devuelva un objeto con la siguiente información:
//name con el valor del parámetro name
//subscribers con el valor del parámetro subs
//hash, con el valor de la longitud del string name multiplicado por el parámetro subs
//Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
//¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.

function createObject(name, subs) {
  const canal = {
    name: name,
    subscribers: subs,
    hash: name.length * subs,
    getStatus: () => {
      return `El canal de ${name} tiene ${subs} suscriptores.`;
    },
  };
  return canal;
}

const nuevoCanal = createObject("BrianCARP2018", 912);
console.log(nuevoCanal.getStatus());
