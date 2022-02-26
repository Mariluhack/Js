const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];
  

  ejercicio1.forEach((n) => {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0 && n != i) {
        break;
      } else if (n % i === 0) {
        console.log(n);
      }
    }
  });

  const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  
  ejercicio2.forEach((persona) => {
    if (persona.edad >= 18 && persona.esFamiliar) {
      console.log(`${persona.nombre}, puede pasar`);
    }
  });

  
  let fib1=1, fib2=1, fib3;

  for( let i=1; i<=50; i++){
    console.log(fib1);
    fib3=fib1+fib2;
    fib1=fib2;
    fib2=fib3;
  }

  