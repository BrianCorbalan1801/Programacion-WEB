const persona = {
  //clave y valor
  name: "Brian",
  lastName: "Corbalan",
  isWorking: false,
  age: 17,
  dog: ["Toby"],
  walk: () => {
    return "Hola, estoy caminando";
  },
};

console.log(persona.age);
console.log(persona["name"]);

persona.family = ["Mama", "Hermana"];
delete persona.dog;

console.log(persona);
