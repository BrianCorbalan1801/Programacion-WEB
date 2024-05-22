const valores = {
  a: true,
  b: 94,
  c: false,
  d: true,
  e: 1,
};

function Booleanos(objeto) {
  const arrays = [];
  for (const property in objeto) {
    if (objeto[property] === true || objeto[property] === false) {
      //console.log(`${property}: ${objeto[property]}`);
      arrays.push(property);
    }
  }
  return arrays;
}

console.log(Booleanos(valores));
