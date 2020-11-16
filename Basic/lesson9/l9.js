// // // // localStorage.setItem('userName', 'Hatiko');
// // // localStorage.setItem('car', false)
// // // localStorage.setItem('car7', 2222)
// // // // localStorage.removeItem('user');
// // //
// // // let item = localStorage.getItem('car');
// // // let item7 = localStorage.getItem('car7');
// // //
// // // // localStorage.clear();
// // //
// // // console.log(typeof item);
// // // console.log(typeof item7);
// //
// //
// // let user = {
// //   name: 'Ivan',
// //   girl: true
// // }
// //
// // localStorage.setItem('ivanko', JSON.stringify(user));
// //
// // localStorage.setItem('arr', JSON.stringify([1, 2, 'TEST', 'Minecraft']));
// //
// // let item = localStorage.getItem('arr');
// // localStorage.setItem('bInt', NaN);
// //
// // console.log(item);
// //
// //
// // console.log(navigator);
// //
// // let element = document.getElementById('vid');
// //
// // navigator
// //   .geolocation
// //   .getCurrentPosition(({coords}) => {
// //     console.log(coords.latitude);
// //     console.log(coords.longitude);
// //   });
// //
// //
// // navigator
// //   .mediaDevices
// //   .getUserMedia({video: true})
// //   .then(video => {
// //     console.log(video);
// //
// //     element.srcObject = video;
// //
// //     element.play();
// //   });
// //
// //
// // console.log(history);
// //
// //
// // history.forward();
// //
// // console.log(history.state);
//
// let age = 15;
//
// let obj = {
//   name: "Viktor",
//   age: 24,
//   job: {
//     company: 'Inoxoft',
//     title: 'Middle'
//   },
//   houses: ['Villa Ispaniolla', 'Penthouse', 'Castle']
// };
//
// //
// // let age = obj.age;
// // let name = obj.name;
// // let title = obj.job.title;
//
//
// let {name, houses, ...other} = obj;
//
// console.log(other);
//
// //
// // console.log(age);
// // console.log(oName);
// // console.log(name);
// // console.log(title);
//
//
// let arr = ['Kolya', 'Ira', 'VOva', [1, 5, 67,], {name: 'Karina'}];
//
// let [k, ...i, o] = arr;
//
// console.log(k);
// console.log(i);
// console.log(users);
//
// // let [k, i, v, [, z], {name: kName}] = arr;
// //
// // console.log(kName);
//
//
// let arr1 = [1, 24, 56]
// let arr2 = ['HHH', 'ZZZ', 'NNN'];
//
//
// let nArr = [2, 5, ...arr2, 7, 8]
//
// console.log(nArr);
//
//
//
// let obj = {
//   name: 'Dimas',
//   age: 88
// }
//
// let car = {
//   model: 2101,
//   price: 2222
// }
//
//
// let dedWithCar = {...obj, ...arr1};
//
// console.log(dedWithCar);


// setTimeout(() => {
//   console.log(1)
// }, 1000)
//
// setTimeout(() => {
//   console.log(2)
// }, 500)
//
// setTimeout(() => {
//   console.log(3)
// }, 2000)


let time = 500;

setInterval(() => {
  time = time - 1;
  console.clear();
  console.log(time);
}, 1000)


button.onclick = () => {
  badArr.forEach(element => {
    if (text.value === element) {
      alert('не матюкайся');
    }
  });
}
// // Є питання!! як зробити ловеркейс