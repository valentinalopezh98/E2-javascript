const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

function mostrarImpares(pizzas){
  let pizzasImpar = pizzas.filter((pizza)=>{
    return pizza.id % 2 != 0;
  });

  console.log("Pizzas con id impar: \n");
  pizzasImpar.forEach(pizza => {
    console.log(`${pizza.nombre}, id= ${pizza.id}`);
  });
}

function menosDe600(pizzas){
  let res = pizzas.filter((pizza)=>{
    return pizza.precio < 600;
  });
  if (res.length == 0){
    console.log("No existen pizzas que salgan menos de $600");
  } else {
    console.log("Si, existen pizzas que salen menos de $600: ");
    res.forEach(pizza=>{
      console.log(`${pizza.nombre}: $${pizza.precio}`);
    });
  }
}

//a - id impar
mostrarImpares(pizzas);
//b - ¿Hay alguna pizza que valga menos de $600?
menosDe600(pizzas);
//c - El nombre de cada pizza con su respectivo precio.
console.log('Precios: ');
pizzas.forEach(pizza=>{
  console.log(`La ${pizza.nombre} tiene un valor de $${pizza.precio}`);
});
//d - Todos los ingredientes de cada pizza
console.log('Ingredientes de cada pizza: ');
pizzas.forEach(pizza=>{
  console.log(`Ingredientes de la ${pizza.nombre}: `);
  pizza.ingredientes.forEach(ingrediente=>{
    console.log(`- ${ingrediente}`);  
  });
});
