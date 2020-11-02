// let str = 'Heeeello WORLD WORLD WORLD WORLD WORLD';
//
// let indexOf = str.indexOf('WORLD');
// let indexOfLast = str.lastIndexOf('e');
//
// let charAt = str.charAt(7);
//
// let concat = str.concat(' JS');
//
// let msg = `Hello {{userName}} welocme to platform. We'll send approive code to email {{userMail}}`
//
// let goodMsg = msg.replace('{{userName}}', 'CHATIK');
//
// goodMsg = goodMsg.replace('{{userMail}}', 'Mail@mail,cim')
//
// console.log(msg);
//
//
// let s = str.slice(9, 15);
// console.log(s);
//
// let arr = ['Victor', 'Alex', 'Dima', 'Alina'];
//
// // let s1 = arr.join(' say hello to ');
// let s1 = arr.join();
// console.log(s1);
//
//
// let nameS = 'Viktor Viktorovich';
//
// let strings = nameS.split(';');
// console.log(strings);
//
//
// const mail = '       MonicaBeluchi@gmail.com     ';
// const mail2 = 'monicabeluchi@gmail.com';
//
// // console.log(mail.toLowerCase());
// // console.log(mail.toUpperCase());
// //
// console.log(mail);
// console.log(mail.trim());
// console.log(mail.trim().toLowerCase() === mail2.toLowerCase());
// // console.log(mail === mail2);
//
// //
// // let b = mail.includes('@gmail');
// // let isAlexPresent = arr.includes('Alex');
// //
// // console.log(b);
// // console.log(isAlexPresent);

// // FUNCTION
//
// function goEat(eat = 'Meat', when = [1, 2]) {
//   console.log('Go eat is running now ' + eat + ' ' + when);
// }
//
// goEat('Apple', 'morning');
// goEat('Peach');
// goEat('Grape', 'always');
// goEat(undefined, 'HELLO');
// goEat(null, 'HELLO');
// goEat('', 'HELLO');

// Expr / Declar
//
// declr();
//
// function declr() {
//   console.log(1);
// }
//
//
// let expr = function() {
//   console.log(2);
// }
//
// expr();
//

// // Arguments
// function args(one, two) {
//   // for (const argument of arguments) {
//   //   console.log(argument);
//   // }
//   // console.log(arguments[2]);
//   console.log(arguments);
// }
//
// args([1,2,4], 2, 'Three', 'f')

//Return
//
// function sumator(one, two) {
//   console.log('Calculation started');
//   return one + two;
//   console.log('Calculation finished');
// }
//
// let sumResult = sumator(10, 5);
//
// console.log(sumResult);
//
//
// function divider(sum, divide) {
//   console.log(sum / divide);
// }
//
// divider(sumResult, 2);

// //Arrow
// let sumator = (one, two) => one + two;
// let sumator2 = one => one + 9999;
//
// let sum = sumator(20, 5);
// let sum2 = sumator2(10);
// console.log(sum2);

// //LexicalEnvironment
//
// console.log(y);
//
// {
//   let x = 1
//   const z = 2;
//   var y = 6;
// }


// BONUS
// function isAdult(age) {
//   if (age > 18) {
//     return 'Welcome';
//   }
//
//   return 'Go home';
// }


function isAdult(age) {
  // if (age > 18) {
  //   console.log('Welcome');
  // } else {
  //   console.log('Go home');
  // }


}

// let age = 7;
//
// //             true                     false
// age > 18 ? console.log('Welcome') : console.log('Go home');
//
//
// isAdult(10);

// // VERY BAD !!!!!
//
// let age = 7;
// let message = '';
//
// if (age > 10) {
//   message = 'GOOD'
// } else {
//   message = 'BAD'
// }

// // BETTER
// let age = 7;
// let message = 'BAD';
//
// if (age > 10) {
//   message = 'GOOD'
// }

// // NOT BAD !
// let age = 7;
// let message = age > 18 ? 'GOOD' : 'BAD';
//
// console.log(message);