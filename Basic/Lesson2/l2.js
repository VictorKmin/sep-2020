// let str = 'dassdasd';
// let n = -6;
// let b = true;
//
// let und = undefined;
// let wife = null;
//
// let obj = {};
// let symb = Symbol('s');
//
// let bN = BigInt(982314804824283);
//
//
//
// const me = {
//   name: 'Victor',
//   age: 24,
//   password: '12345',
//   job: {
//     company: {
//       name: 'Inoxoft',
//       street: 'H.Upa 73'
//     },
//     title: 'Middle+ Dev'
//   },
//   phone: 'Samsung'
// }
//
// // console.log(me);
// // console.log(me.job.company.name);
//
// me.car = 'Lacetti';
// me.bike = 'Fazer';
// me.age = 25;
//
// me.job.payment = 99999999;
//
// delete me.job.title;
// delete me.password
//
// console.log(me);
//
//
// const kari = {
//   name: 'karina',
//   age: 16
// }
//
//
// // const group = ['Alexandr', 'Dima', 'Anrii', 'Anna'];
// // const arrMe = ['Vcitro', 24, false, true, 'Fazer', 'Inoxoft', 5474575465403, 6767];
//
// const deletedusers = [];
//
// let users = [me, kari, {model: 3}, true, 'Tesla', [2, 5, ['Hello', 'World']]];
//
// // console.log(users);
// // console.log(users[1].age);
// // console.log(users[5][2][0]);
//
// // group[4] = 'Max';
// // console.log(group[666]);
//
// group.push('Anton');
// group.unshift('Oleg');
//
// let deletedUser = group.pop();
// alert(deletedUser + ' is deleted')
// deletedusers.push(deletedUser)
//
// group.pop()
// deletedUser = group.shift();
// deletedusers.push(deletedUser)
//
// deletedUser = group.shift();
// deletedusers.push(deletedUser)
//
//
//
// alert(deletedUser + ' is deleted')
//
// console.log(group);
// console.log(deletedusers);
// // console.log(ant);
// // console.log(oleg);


const group = ['Alexandr', 'Dima','Anrii', 'Anna', 'Oleksii',];

// console.log(group[0])
// console.log(group[1])  => BAD
// console.log(group[2])
// console.log(group[3])


console.log('*************');
console.log(group.length);
console.log(group);
console.log('*************');


// i = i + 1
// i += 1
// i++

// for (let i = 0; i < group.length; i++) {
//   console.log(group[i])
//   console.log(i);
//   console.log('__________________');
// }

let i = 0;

while (i < group.length) {
  console.log(group[i]);
  i+=2
}




// Какие значения выведет в окно консоли следующий фрагмент
// кода если его поместить в console.log? parseInt("3.14")
// parseInt("-7.875") parseInt("435") parseInt("Вася")