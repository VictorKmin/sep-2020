// const numbers = [2, 5, 1, 11, 28, 3, 88, 91, 975, 11778];
// let names = ['Irka', 'Karina', 'Tanka', 'Julia', 'Anna', 'Angelika'];
//
// let arr = [[1, 3, [8], 77], 12, [8, 9], [[[[7, [6, [2, [5, [9, [10, [11, [11, [12]], [12]]]]]]], 9, 1]], 'hello', [5, [6, [7, [8]]]]]], 2];
//
// let users = [
//   {name: 'Dima', age: 10},
//   {name: 'Nastya', age: 22},
//   {name: 'Volodya', age: 19},
//   {name: 'Yarko', age: 39},
//   {name: 'Yevhen', age: 14},
//   {name: 'Taras', age: 44}
// ];
//
// //
// // let sortN = names.sort((a, b) => {
// //   if (a > b) {
// //     return -1;
// //   }
// //
// //   return 1;
// // });
// //
// // console.log(sortN);
// //
// // let sortU = users.sort((a, b) => {
// //   return a.age - b.age
// // });
// //
// // console.log(sortU);
// //
// // // // let sort = numbers.sort();
// // // let sort = numbers.sort((a, b) => {
// // //   console.log(a);
// // //   console.log(b);
// // //   console.log('___________');
// // //   return b - a; // -1
// // // });
// // //
// // // console.log(sort);
// //
// //
// // numbers.filter((value, index, array) => {
// //     console.log(value);
// //     console.log(index);
// //     console.log(array);
// //     console.log('______________________');
// // })
// //
// // let filter = numbers.filter(value => value < 50);
// //
// // let filter1 = users.filter(user => user.name.length > 5);
// //
// // console.log(filter1);
// //
// //
// // numbers.forEach((value, index) => {
// //     if (index % 2) {
// //         return;
// //     }
// //
// //     console.log(value, index);
// // })
// //
// // let map = users.map((value, index) => {
// //     value.age = value.age * index;
// //
// //     return value;
// // });
// //
// // let map = users.map((value, index) => {
// //     if (!(index % 2)) {
// //         value.age = value.age * index;
// //     }
// //
// //     return value;
// // });
// //
// // console.log(map);
// // console.log(users);
// //
// // let girl = names.find(value => value.startsWith('A'));
// //
// // let userWithA = users.find(user => user.name.includes('a'));
// //
// // console.log(userWithA);
// //
// //
// // let girl = names.findIndex(value => value.startsWith('A'));
// //
// // let userWithA = users.findIndex(user => user.name.includes('a'));
// //
// //
// // console.log(girl);
// // console.log(userWithA);
// //
// // numbers.reverse();
// //
// // console.log(numbers);
// //
// //
// // let some = numbers.some(value => value > 50);
// // let every = numbers.every(value => value > 50);
// //
// // console.log(some);
// // console.log(every);
// //
// //
// // let flat = arr.flat(12);
// //
// // console.log(flat);
// //
// //
// // let number = numbers.reduce((acc, value) => {
// //   console.log(acc);
// //   console.log(value);
// //
// //   console.log('_______________________');
// //   return acc + value
// // });
// //
// // console.log(number);
// //
// // let reduce = users.reduce((acc, value) => {
// //   console.log(acc, 'ACC');
// //   console.log(value, 'VALUE');
// //   console.log('______________________');
// //   return acc + value.age
// // }, 0);
// //
// // console.log(reduce);
// //
// //
// // let oldUsers = users.filter(value => value.age > 18);
// //
// // oldUsers.map(user => {
// //   user.car = true;
// //
// //   return user;
// // });
// //
// // console.log(oldUsers);
// //
// //
// // let oldUsers = users.reduce((acc, vale) => {
// //   if (vale.age > 18) {
// //     vale.car = true;
// //     acc.push(vale);
// //   }
// //
// //   return acc;
// // }, []);
// //
// // console.log(oldUsers);
// //
// // console.log(users);
//
//
// let strings = names.splice(-2, 0, 'Olga', 'Yana');
// console.log(strings);
//
// console.log(names);

//
// function Animal(name, color) {
//   this.name = name;
//   this.color = color;
//
//   // this.run = function () {
//   //     console.log('run');
//   // }
// }
//
// Animal.prototype.run = function () {
//   console.log('run');
// }
//
// function Hamster(name, color, house) {
//   this.name = name;
//   this.color = color;
//   this.house = house;
// }
//
// // Hamster.prototype = Animal.prototype;
// // Hamster.prototype.__proto__ = Animal.prototype;
// Hamster.prototype = Object.create(Animal.prototype);
//
// Hamster.prototype.run = function () {
//   console.log(2222);
// }
//
// let xx = new Animal('xx', 'white')
// let busya = new Hamster('Busya', 'white')
//
// xx.run()
// busya.run()


function Hamster(name) {
  this.name = name;
  // this.stomach = [];
}

Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (eat) {
  this.stomach.push(eat);
}


let ernest = new Hamster('Ernest');
let morkva = new Hamster('Morkva');

morkva.findFood('Yabko');
morkva.findFood('Grushka');

console.log(ernest.stomach);
console.log(morkva.stomach);
