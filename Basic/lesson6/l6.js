// let arr = [1, 12, 3, 5, 8, 19, -20, 9, 77, 9];
// // // // //
// // // // // let max = arr[0];
// // // // // let min = arr[0];
// // // // //
// // // // // for (let i = 1; i < arr.length; i++) {
// // // // //   if (arr[i] < min) {
// // // // //     min = arr[i]
// // // // //   }
// // // // //
// // // // //   if (arr[i] > max) {
// // // // //     max = arr[i]
// // // // //   }
// // // // // }
// // // // //
// // // // //
// // // // // console.log(max);
// // // // // console.log(min);
// // // //
// // // // // let max;
// // // // // for (let i = 0; i < arr.length; i++) {
// // // // //   max = Math.max(arr[i]);
// // // // // }
// // // // // console.log(max);
// // // //
// // // //
// // // // // console.log(Math.min(1, 4, 5, 6, 6, 7));
// // // //
// // // //
// // // // let random = Math.random() * (20 - 10) + 10
// // // // console.log(random);
// // // //
// // // // let fixed = random.toFixed(0);
// // // //
// // // // console.log(Math.ceil(random), '  - CEIL');
// // // // console.log(Math.floor(random), '  - FLOOR');
// // // // console.log(Math.round(random), '  - ROUND');
// // // //
// // // // console.log(fixed);
// // // //
// // // //
// // // // let number = Math.cos(Math.PI);
// // // //
// // // // console.log(number);
// // //
// // //
// // // let obj = {
// // //   name: 'Victor',
// // //   laptop: {
// // //     producer: 'Dell',
// // //     model: 'Precision',
// // //     RAM: {
// // //       memory: 0
// // //     }
// // //   }
// // // }
// // //
// // // // console.log(obj.laptop.RAM.memory);
// // //
// // // // let mem = obj && obj.laptop && obj.laptop.RAM && obj.laptop.RAM.memory
// // // //
// // // // console.log(mem);
// // // //
// // // // if (!mem) {
// // // //   console.log('NO RAM')
// // // // }
// // // //
// // // // console.log(mem);
// // //
// // // // console.log(0 || 2);
// // //
// // // //
// // // // console.log(obj.laptop.RAM.memory || 4);
// // // // console.log(obj.laptop.RAM.memory ?? 4);
// // //
// // //
// // // console.log(
// // //   obj && obj.girl && obj.girl.name || false
// // // )
// // //
// // //
// // //
// // console.time('xxx');
// // let skill = 'JS';
// //
// //
// // console.log('I know ' + skill + ' and you dont')
// // console.log(`I know ${skill} and you dont`);
// //
// // console.log('Hello wordl %s, %s', skill, 8);
// //
// // // for (let i = 0; i < 10; i++) {
// // //   console.log(i);
// // //   for (let j = 0; j < 10; j++) {
// // //     console.log(j);
// // //   }
// // // }
// //
// // console.error('ER');
// //
// // console.timeEnd('xxx');
// //
// //
// //
// //
//
//
// // function recursator2000(arr, iterationIndex) {
// //   if (iterationIndex >= arr.length) {
// //     return;
// //   }
// //
// //   console.log(arr[iterationIndex]);
// //
// //   recursator2000(arr, ++iterationIndex);
// // }
// //
// // recursator2000([1,3,4,2], 0)
// //
//
//
// // let workingHours = {
// //   "Friday": {
// //     "from": 10,
// //     "isOpen": true,
// //     "to": 19
// //   },
// //   "Monday": {
// //     "from": 10,
// //     "isOpen": true,
// //     "to": 19
// //   },
// //   "Saturday": {
// //     "from": 10,
// //     "isOpen": true,
// //     "to": 19
// //   },
// //   "Sunday": {
// //     "from": 10,
// //     "isOpen": true,
// //     "to": 19
// //   },
// //   "Thursday": {
// //     "from": 10,
// //     "isOpen": true,
// //     "to": 19
// //   },
// //   "Tuesday": {
// //     "from": 10,
// //     "isOpen": true,
// //     "to": 19
// //   },
// //   "Wednesday": {
// //     "from": 10,
// //     "isOpen": true,
// //     "to": 19
// //   }
// // }
// //
// //
// // function funNextWorkingDay(day, hour) {
// //   let currentDay = workingHours[day];
// //
// //   if (!currentDay || !currentDay.isOpen) {
// //     console.log('NO DAY');
// //     return;
// //   }
// //
// //   if (currentDay.from > hour && currentDay.to > hour){
// //     console.log('closed');
// //     return;
// //   }
// //
// //   // Method to find next day
// //   funNextWorkingDay('Sunday', hour);
// // }
// //
// // funNextWorkingDay('Friday', 9)
//
//
// // function fiboc(currentNumber, previousNumber) {
// //   if (currentNumber > 987) {
// //     return;
// //   }
// //
// //   if (!previousNumber) {
// //     console.log(previousNumber);
// //   }
// //
// //   let newCurrent = previousNumber + currentNumber
// //   console.log(newCurrent);
// //
// //   console.log('______________________');
// //
// //   fiboc(newCurrent, currentNumber);
// // }
// //
// // fiboc(1, 0);
//
//
// // for (let i = 0; i < arr.length; i++) {
// //   if (i % 2) {
// //     console.log('ODD');
// //     // continue;
// //     break;
// //   }
// //   console.log(i);
// // }
//
//
// let fQ = [1, 1, 2, 2, 3, 2, 2, 1, 1, 4];
// let freq = {};
//
// for (const number of fQ) {
//   if (freq[number]) {
//     freq[number]++
//   } else {
//     freq[number] = 1;
//   }
//   // freq[number] ? freq[number]++ : freq[number] = 1;
// }
//
// let keys = Object.keys(freq);
//
// console.log(keys);
//
// for (const key of keys) {
//   if (freq[key] > 1) {
//     delete freq[key]
//   }
// }
//
// console.log(freq);


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


console.time('Весілля')

function Cinderella(name, age, size) {
  this.name = name;
  this.age = age;
  this.size = size;
}

let ira = new Cinderella('Irka', 20, 35);
let karina = new Cinderella('Karina', 15, 34);
let ivanka = new Cinderella('Vanya', 21, 36);
let tanya = new Cinderella('Tanka', 22, 37);
let julia = new Cinderella('Julia', 19, 35);

let girls = [ira, karina, ivanka, tanya, julia];


function Prince(name, age, shoose) {
  this.shoose = shoose;
  this.name = name;
  this.age = age;

  this.findMyPrincess = (babies) => {
    for (const baby of babies) {
      if (baby.size === this.shoose) {
        console.log(`${this.name} and ${baby.name} гойра весіллє`);
        break;
      }
    }
  }
}

let dimasik = new Prince('Dimas', 25, 35);

dimasik.findMyPrincess(girls)


console.timeEnd('Весілля');
