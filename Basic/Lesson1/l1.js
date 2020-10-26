// let name = `Victor`;
// let age = 14;
// let hasWife = false;
//
// // alert(name);
// // console.log(age);
// // document.write(hasWife);
// //
// // let isAdult = confirm('Are u 18?');
// // document.write(isAdult);
// // document.write('<br>');
// //
// // let userName = prompt('What is your name');
// // document.write(userName);
// // console.log(userName);
// //
// //
// // console.log((age + 0.5) * 2);
// // console.log(age - 2);
// // console.log(age * 3);
// // console.log(age / 5);
//
// // console.log(11 % 2);
//
//
// // > < <= >= != == !== ===
//
// console.log(2 > 5);
// console.log(1 < 3);
// console.log(3 <= 3);
// console.log(5 >= 33);
// console.log('++++++++++++++++++++++');
// // console.log(5 != 33);
// // console.log(5 == 33);
// //
// // console.log(5 !== 33);
// // console.log(5 === 33);
//
// console.log(2 === '2', ' СТРОГА')
// console.log(2 == '2', ' НЕ СТРОГА')

// if (age >= 18) {
//   document.write('<h1> WELOCME !!</h1>');
// } else {
//   document.write('<h1> Find a girlfriend! </h1>')
// }


let age = prompt('How old r u?');
let login = prompt('Enter login');

// if (age >= 18) {
//   document.write('<h1> WELOCME !!</h1>');
// } else {
//   if (login === 'admin') {
//     document.write('<h1> WELOCME !!</h1>');
//   } else {
//     document.write('<h1> Find a girlfriend! </h1>');
//   }
// }

// if (age >= 18) {
//   document.write('<h1> WELOCME !!</h1>');
// } else if (login === 'admin') {
//   document.write('<h1> WELOCME !!</h1>');
// } else {
//   document.write('<h1> Find a girlfriend! </h1>');
// }


// || => Або
// && => І

// let isSiteAdmin = (login === 'admin' && password === '12345')
// // if (age >= 18 || isSiteAdmin) {   => GOOD
// // if (age >= 18 || (login === 'admin' && password === '12345')) { => BAD
//
//
// if (age >= 18 || (login === 'admin' && password === '12345')) {
//   document.write('<h1> WELOCME !!</h1>');
// } else {
//   document.write('<h1> Find a girlfriend! </h1>');
// }


switch (login) {
  case 'admin':
    alert('Вітаю босс');
    break;
  case 'karina':
    document.write('Hello baby )))');
    break;
  case 'ivan':
    console.log('Дороу дядьку');
    break;
  default:
    alert('Я тебе не знаю (((');
}
