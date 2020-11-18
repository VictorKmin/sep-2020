// // setTimeout(() => {
// //   console.log(1)
// // }, 1000)
// //
// // setTimeout(() => {
// //   console.log(2)
// // }, 500)
// //
// // setTimeout(() => {
// //   console.log(3)
// // }, 2000)
// //
// // console.log(222);
//
//
// let elementById = document.getElementById('btn');
//
// elementById.onclick = () => {
//   console.log('CLC');
// }
//
// let i = 0
// while (i < 999999999) {
//   i++
// }
//
//
//
// function withCB(cb) {
//   console.log(cb);
//   cb();
// }
//
// withCB(() => {
//   console.log(33);
// });
//
//


// let money = 0;
//
// setTimeout(() => {
//   money = 999;
// }, 0);
//
// function clearHouse(cb) {
//   console.log(22);
//   setTimeout(() => {
//     money = 999;
//     cb()
//   }, 2000);
// }
//
// clearHouse(() => {
//   console.log(money);
// })
//
//
// function orderTour(taskWhenReady) {
//   console.log('Дякую, що звернулися до нас');
//   console.log('Tour in progres ......');
//
//   setTimeout(() => {
//     console.log('DONE');
//     taskWhenReady();
//   }, 2000);
// }
//
//
// orderTour(() => {
//   console.log('УРА. Лутимо на моря');
// });


// function orderTour(money, taskWhenReady) {
//   console.log('Дякую, що звернулися до нас');
//   console.log('Tour in progres ......');
//
//   setTimeout(() => {
//     console.log('DONE');
//
//     if (money < 500) {
//       taskWhenReady('вам треба більше грошей', null);
//       return;
//     }
//     taskWhenReady(null, 'Єгипет');
//   }, 2000);
// }
//
//
// function prepareToTour(cb) {
//   setTimeout(() => {
//     console.log('Я забраввся!')
//     cb(null, 'Полетіли НАРЕШТІ !!!!');
//   }, 1000)
// }
//
// function doPhoto(cb) {
//   cb(null, 'ЩОЛК ЩОЛК')
// }
//
//
// orderTour(600, (err, tour) => {
//   if (err) {
//     console.log('Мала, треба їсти макарони');
//     console.log('В агенстві сказали що', err);
//     return;
//   }
//
//   console.log(`УРА. Лутимо в ${tour}`);
//
//   prepareToTour((err, data) => {
//     if (err) {
//       console.log('Бліне. Нема купальника (((');
//       return;
//     }
//
//     console.log(data);
//     doPhoto((err, data) => {
//       if (err) {
//         return
//       }
//       console.log(data);
//     })
//   })
// });
//
//
// orderTour(1000, (err, tour) => {
//   if (err || tour === 'Єгипет') {
//     console.log('Фу. Згнову Жгипет пропонують. АЦТОЙ');
//     return;
//   }
//   console.log('Єє бой. Берчдчиів !!!')
// });
//


function orderTour(money) {
  return new Promise((resolve, reject) => {
    console.log('Дякую, що звернулися до нас');
    console.log('Tour in progres ......');

    setTimeout(() => {
      console.log('DONE');

      if (money > 500) {
        resolve('Єгипет');
      } else {
        reject('вам треба більше грошей');
      }
    }, 2000);
  })
}


function prepareToTour() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Я забраввся!')
      resolve('Полетіли НАРЕШТІ !!!!');
    }, 1000)
  })
}


orderTour(66546456456)
  .then((tour) => {
    console.log(`УРА. Лутимо в ${tour}`);

    return prepareToTour();
  })
  .then(tourData => {
    console.log(tourData);
  })
  .catch(err => {
    console.log('___________________')
    console.log(err)
    console.log('___________________')
  })
  .finally(() => {
    console.log('FINAL');
  })