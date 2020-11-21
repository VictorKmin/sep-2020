// 00:00 Promise.all Promise.race
// 00:30 (20:42) async await
// 00:43 (20:59) fetch
// 00:57 (21:14) Call Apply Bind
// 01:19 (21:36) Closures
// 01:53 (22:10) Map Set
// // // //
// // // // function orderTour(money) {
// // // //   return new Promise((resolve, reject) => {
// // // //     console.log('Дякую, що звернулися до нас');
// // // //     console.log('Tour in progres ......');
// // // //
// // // //     setTimeout(() => {
// // // //       console.log('DONE');
// // // //
// // // //       if (money > 500) {
// // // //         resolve('Єгипет');
// // // //       } else {
// // // //         reject('вам треба більше грошей');
// // // //       }
// // // //     }, 2000);
// // // //   })
// // // // }
// // // //
// // // //
// // // // function prepareToTour() {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       console.log('Я забраввся!')
// // // //       reject('Полетіли НАРЕШТІ !!!!');
// // // //     }, 1000)
// // // //   })
// // // // }
// // // //
// // // //
// // // // // orderTour(878)
// // // // // .then(value => {
// // // // //   console.log(value);
// // // // //
// // // // //   return prepareToTour()
// // // // // })
// // // // // .then(value =>  {
// // // // //   console.log(value);
// // // // // });
// // // //
// // // //
// // // // function promise1() {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       resolve(17)
// // // //     }, 2000)
// // // //   })
// // // // }
// // // //
// // // // function promise2() {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       reject('TEST')
// // // //     }, 2000)
// // // //   })
// // // // }
// // // //
// // // // //
// // // // // Promise.all([promise1(), promise2().catch(() => {}), promise1(), promise1()])
// // // // //   .then(value => {
// // // // //     console.log(value);
// // // // //   })
// // // // //   .catch(e => {
// // // // //     console.log(e);
// // // // //   });
// // // //
// // // //
// // // // // let promise = Promise.allSettled([promise1(), promise2(), promise1(), promise1()]);
// // // //
// // // // // promise.then(value => {
// // // // //   value.forEach(({status, value, reason}) => {
// // // // //     if (status === 'fulfilled') {
// // // // //       console.log(value)
// // // // //     } else {
// // // // //       console.log('_____________________________')
// // // // //       console.log(reason)
// // // // //       console.log('_____________________________')
// // // // //     }
// // // // //   })
// // // // // })
// // // // //
// // // // //
// // // // // let promise = Promise.race([promise1(), promise2()]);
// // // // //
// // // // // promise.then(value => {
// // // // //   console.log(value);
// // // // // })
// // // //
// // // //
// // // // async function tyu() {
// // // //   try {
// // // //     const tour = await orderTour(666);
// // // //     console.log(tour, '1');
// // // //
// // // //     const prepare = await prepareToTour();
// // // //     console.log(prepare, '2');
// // // //
// // // //     const one = await promise1()
// // // //     console.log(one, '3');
// // // //
// // // //     const two = await promise2()
// // // //     console.log(two, 4);
// // // //   } catch (e) {
// // // //     console.log('*************************');
// // // //     console.log(e);
// // // //     console.log('*************************');
// // // //   }
// // // //
// // // // }
// // // //
// // // // tyu();
// // // //
// // // //
// // // //
// // // //
// // // // fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
// // // //   .then(privatePesponse => {
// // // //     return privatePesponse.json();
// // // //   })
// // // // .then(kusr => {
// // // //   kusr.forEach(({ccy, base_ccy, buy, sale}) => {
// // // //     document.write(
// // // //       `${ccy}:${base_ccy}. SALE: ${sale}; BUY: ${buy}
// // // //       <br>`
// // // //     )
// // // //   })
// // // // })
// // // // .catch(er => {
// // // //   console.log(er);
// // // // })
// // //
// // //
// // // // carrying
// // //
// // // let user = {
// // //   name: 'Karina',
// // //   position: 'Jun',
// // //   payment: 99999999999,
// // //   age: 15
// // // }
// // //
// // // let dimas = {
// // //   name: 'Dimas',
// // //   wife: false,
// // //   payment: 2000,
// // //   car: false
// // // }
// // //
// // // function changePayment(newPayment, newPosition) {
// // //   // this.payment += 3000;
// // //   this.payment = newPayment;
// // //   this.position = newPosition;
// // //   console.log(this);
// // //   return 22;
// // // }
// // //
// // // // changePayment.apply(user, [5555, 'Midle']);
// // // // changePayment.call(dimas, 4000, 'LID');
// // //
// // // let changePayment1 = changePayment.bind(user, 3000, 'Trayni');
// // // //
// // // let changePayment2 = changePayment1();
// // //
// // // console.log(changePayment2);
// // // changePayment1()
// // // changePayment1()
// // // // changePayment1()
// // // // changePayment1()
// // //
// // //
// //
// //
// //
// // function user() {
// //   let _login = 'admin'
// //   let _password = '12345'
// //   let _isLogged = false;
// //
// //   function loginUser(login, password) {
// //     if (login === _login && password === _password) {
// //       console.log('WELOCME');
// //       _isLogged = true
// //     } else {
// //       console.log('Wrong email or password')
// //     }
// //   }
// //
// //   function changeLogin(newLogin) {
// //     if (_isLogged) {
// //       _login = newLogin
// //     } else {
// //       console.log('Permission denied')
// //     }
// //   }
// //
// //   function logout() {
// //     if (_isLogged) {
// //       _isLogged = false
// //     } else {
// //       console.log('Permission denied')
// //     }
// //   }
// //
// //   return {
// //     logFunc: loginUser,
// //     changeLogin,
// //     logout
// //   }
// // }
// //
// // let dima = user();
// // let admin = user();
// //
// // dima.logFunc('admin', '12345');
// //
// // dima.changeLogin('VASKA');
// //
// // dima.logout();
// //
// // dima.logFunc('admin', '12345');
// //
// // dima.logFunc('VASKA', '12345')
// //
// // // dima.logout()
// //
// //
// //
// // function counter() {
// //   let z = 0;
// //
// //   function plusOne() {
// //     z++
// //     console.log(z);
// //   }
// //
// //   return {
// //     plusOne
// //   }
// // }
// //
// // let f = counter();
// //
// // f.plusOne();
// // f.plusOne();
// // f.plusOne();
// // f.plusOne();
// // f.plusOne();
// // f.plusOne();
// // f.plusOne();
//
//
// let mapa = new Map();
//
// let vitalik = {name: 'Vitalik'}
//
// mapa.set(vitalik, [1, 24, 5]);
// mapa.set({name: 'Vitalik'}, 'TEST');
//
// console.log(mapa);
//
//
// let newVar = mapa.get(vitalik);
//
// let b = mapa.has(vitalik);
//
// console.log(b);
//
// // mapa.delete(vitalik)
//
// console.log(newVar);
// console.log(mapa);


let set = new Set();

set.add(2)
set.add(2)
set.add(2)
set.add(333);
set.add(2)
set.add(2)

let v = {name: 'Vitalin'};

let arr = [2,3,4,56]

set.add(arr);
set.add(arr);
set.add(arr);
set.add(arr);
set.add(v);
set.add(v);
set.add(v);
set.add({name: 'Vitalin'});
set.add({name: 'Vitalin'});
set.add({name: 'Vitalin'});
set.add({name: 'Vitalin'});

console.log(set.has(2));

console.log(set);


let from = Array.from(set);

let a = [...set]

console.log(from);
console.log(a);
