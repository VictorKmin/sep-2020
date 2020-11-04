// // let user = {
// //   name: 'Adnrii',
// //   exps: 5,
// //   payment: 15000,
// //   car: 'Logan'
// // }
// //
// // let user5 = {
// //   name: 'Vova',
// //   exps: 3,
// //   payment: 10000,
// //   car: 'Lanos',
// //   talk: function () {
// //     console.log('Віз я якось дівчину з пянки .....')
// //   }
// // }
// // user5.talk();
//
// function Mazda(color, power, model = 'XX') {
//   this.calor = color;
//   this.carPower = power;
//   this.carModel = model;
//   this.owner = null;
//   this.interior = 'Black'
//
//   this.ride = function () {
//     console.log('I am driving in ' + this.calor + ' car')
//   }
//
//   this.logThis = () => {
//     console.log(this)
//   }
// }
//
// let m6 = new Mazda('Red', 100, '6');
// let m7 = new Mazda('Green', 120, '7');
//
// // console.log(m7);
// // //
// // //
// // // m6.ride();
// // m6.logThis()
// //
// // m7.logThis()
// //
// // console.log(m6);
// // m6.carPower = 200;
// // m6.TUNING = 'TRUE'
//
// m6.logThis();
//
//
// // class Mazda2{
// //   constructor(color, power, model = 'XX') {
// //     this.calor = color;
// //     this.carPower = power;
// //     this.carModel = model;
// //     this.owner = null;
// //     this.interior = 'Black'
// //   }
// // }
//
//
// // class House {
// //   constructor(isPrivate, square, roomsCount) {
// //     this.isPrivate = isPrivate
// //     this.square = square
// //     this.roomsCount = roomsCount
// //     this.buildProgress = 0;
// //   }
// //
// //   build(percent = 0) {
// //
// //     if (this.buildProgress > 100) {
// //       console.log('Its Done. I am Happy !')
// //     }
// //
// //     if (this.buildProgress < 100) {
// //       this.buildProgress += percent; // 90 + 30 = 120
// //       console.log('Loading ...' + this.buildProgress + '%')
// //     }
// //
// //     if (this.isPrivate) {
// //       console.log('Iys MY house. Cool');
// //     }
// //   }
// // }
// //
// // let avalon = new House(false, 55, 2);
// // console.log(avalon);
// //
// // avalon.build(10);
// // console.log(avalon);
// //
// // avalon.build(5);
// // console.log(avalon);
// //
// // avalon.build(1);
// // console.log(avalon);
// //
// // avalon.build(40);
// // console.log(avalon);
// //
// // avalon.build(-6);
// // console.log(avalon);
// //
// // avalon.build();
// // console.log(avalon);
// //
// // avalon.build();
// // console.log(avalon);
//
//


class Human {
  constructor(width, height, color, name = 'No name') {
    this.width = width;
    this.height = height;
    this.color = color;
    this.name = name;
    this.greeting()
  }

  greeting() {
    console.log(this.name + ' say hello to u')
  }
}

class Developer extends Human {
  constructor(width, height, color, name, skill) {
    super(width, height, color, name);
    this.skill = skill;
  }

  greeting() {
    console.log('Give me more coffee');
  }

  coddin() {
    console.log('I know ' + this.skill + ' and you dont')
  }
}

class TeamLead extends Developer {
  constructor(width, height, color, name, skill) {
    super(width, height, color, name, skill);
    this.punishDeveloper();
  }

  punishDeveloper() {
    console.log('I am going to kill you !!! Deadline is yesterday');
  }
}


let x = new TeamLead(22, 33, 4, 5, 9)

x.punishDeveloper();

let student = new Human(60, 170, 'Green', 'Anton');

student.punishDeveloper();


// let goodStudent = new Developer(120, 170, 'yellow', 'Anton DEv', 'JS')
//
// let perfectSrudent = new TeamLead(90, 180, 'Pink', 'Atom LID', ['JS', 'Java', 'C++'])
//
// // student.greeting();
// // console.log(student);
// //
// // goodStudent.greeting();
// // console.log(goodStudent);
// //
// // goodStudent.coddin();
// //
// // perfectSrudent.coddin();
// // perfectSrudent.greeting();
// // perfectSrudent.punishDeveloper();
// //
// // // student.coddin()


let car = {
  model: 'X',
  price: 33333,
  name: 'Kisa',
  issues: {
    engine: 'No oil',
    wheels: false
  }
}

let girl = {
  name: 'Karina',
  age: 15,
  skill: 'Coding'
}


// let assign = Object.assign({}, car, girl, {name: 'Ivan'});
let assign = Object.assign({}, car);

assign.name = 'Mushka'
assign.issues.wheels = 'ALL RIGHT'

console.log(assign);

console.log(car);
