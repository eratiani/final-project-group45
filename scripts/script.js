"use strict";
// function construct(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   console.log(`${this.name}`);
//   return `u are ${this.name} ${this.surname}`;
// }
// function Person(name, surname, height) {
//   console.log(this);
//   construct.call(this, name, surname);
//   this.height = height;
//   console.log(this.height);
// }
// const giorgi = new Person("giorgi", "ratiani", 42);
// console.log(giorgi.height);

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// }
// class Player extends Person {
//   constructor(name, surname, height) {
//     super(name, surname);
//     this.height = height;
//   }
// }
// const gvanca = new Player("gvantsa", "buadze", 43);
// try {
//   const x = 3;
//   x = 4;
// } catch (error) {
//   console.log(error);
// }
// console.log(gvanca, new Person("gvantsa", "buadze"));
// const prom = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening 🔮");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });
// prom.then()
// function periodOutput(period) {
//   let startTime = Date.now();
//   console.log(startTime);
//   function output() {
//     let currentTime = Date.now();
//     let elapsedTime = currentTime - startTime;
//     console.log(elapsedTime);
//     setTimeout(output, period);
//   }

//   setTimeout(output, period);
// }
// periodOutput(1000);
// function extendedPeriodOutput(period) {
//   let startTime = Date.now();

//   function output() {
//     let currentTime = Date.now();
//     let elapsedTime = currentTime - startTime;
//     console.log(elapsedTime);
//     period += period;
//     setTimeout(output, period);
//   }

//   setTimeout(output, period);
// }
// extendedPeriodOutput(1200);
