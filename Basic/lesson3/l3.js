// let user = {
//   name: 'Dima',
//   age: 23,
//   car: false,
//   girl: undefined,
//   payment: NaN,
//   // gir2l: BigInt(5678909756789097898),
//   son: {
//     name: 'Ivan',
//     age: undefined
//   }
// }
// // //
// // // let strings = Object.keys(user);
// // // let values = Object.values(user);
// // // let entries = Object.entries(user);
// // // console.log(strings);
// // // console.log(values);
// // // console.log(entries);
// // //
// // //
// // // let arr = [12, 34, 5, 6, false]
// // //
// // //
// // // // for (let value of user) {
// // // //   console.log(value);
// // // //   // console.log(arr[i]);
// // // // }
// // //
// // // for (let value in user) {
// // //   console.log(value);
// // //   console.log(user[value]);
// // //   // console.log(user['value']); // user.value
// // //   // console.log(user['name']); // user['name'] === user.name
// // //   console.log('________');
// // // }
// //
// // let a = 'Hello';
// //
// // let b = a;
// //
// // a = 'WORK'
// //
// // console.log(b);
// // console.log(a);
// //
// //
// // const clone = user;
// //
// // user.name = 'Varun';
// // user.age = 99;
// // user.pass = 99;
// // clone.car = true;
// //
// // // console.log(clone);
// // // console.log(user);
// //
// //
// // // JSON - JavaScript Object Notation
// //
// // let s = JSON.stringify(user);
// //
// // let clonedUser = JSON.parse(s);
// //
// // // console.log(s);
// // // console.log(clonedUser);
// //
// // clonedUser.name = 'Kyrylo';
// //
// // console.log(user);
// // console.log(clonedUser);
// // console.log(clonedUser.name);
// //
// //
//
//
// // DOM
//
// document.write('<hr>')
//
// let element = document.getElementById('divka');
// let xxx = document.getElementsByClassName('xxx');
// let name = document.getElementsByTagName('br');
// // console.log(element);
//
// element.style.backgroundColor = '#165ba2';
// // element.style.width = '100px'
//
// // element.innerText = 'Вітаю на платформі ' + user.name;
// //
// // let avatar = document.createElement('div');
// // avatar.style.backgroundColor = 'pink';
// // avatar.style.width = '50px';
// // avatar.style.height = '50px';
// //
// // element.appendChild(avatar);
//
// // element.innerHTML = '<br> <hr> HELLO'
// // element.innerText = '<hr> HELLO'
//
//
// // for (const xxxEl of xxx) {
// //   console.log(xxxEl);
// //   xxxEl.style.fontSize = '115px'
// // }
//
// for (let i = 0; i < xxx.length; i += 2) {
//   xxx[i].style.fontSize = '115px'
//   xxx[i].style.color = 'blue';
// }
//


const students = [
  {name: 'Stanislav', age: 10},
  {name: 'Mykhailo', age: 20},
  {name: 'Yaroslav', age: 17},
  {name: 'Ira', age: 15},
];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const studentDiv = document.createElement('div');
  // studentDiv.style.backgroundColor = 'green';
  // studentDiv.style.margin = '20px';

  studentDiv.classList.add('student');
  studentDiv.classList.add('perfect');
  console.log(studentDiv.classList);

  studentDiv.innerText = 'Hello my name is ' + student.name + ' and I am ' + student.age + ' year old';

  document.body.appendChild(studentDiv);
}

// let n = '9.787878';
//
// // n = parseFloat(n)
//
// console.log(n);
// console.log(+n);

console.log(!!'')
console.log(!!0)
console.log(!!undefined)
console.log(!!null)
console.log(!!NaN)


console.log(!!'fsdfs')
console.log(!!1)
console.log(!!-1)
console.log(!!0.000001)
console.log(!!{})
console.log(!![])


// iter
// itar
// itin
