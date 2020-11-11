// // // let redId = document.querySelectorAll('#red .myClass');
// // //
// // // console.log(redId);
// // //
// // // let childNodes = document.body.childNodes;
// // //
// // // console.log(childNodes);
// //
// // let green = document.getElementById('green');
// //
// // green.setAttribute('chatIsTheBest', 'rtyuiop')
// //
// // // let b = green.hasAttribute('chat');
// // let b = green.attributes
// //
// // console.log(b);
//
// let form = document.forms.form;
//
// let someText = form.someText;
// let check1 = form.check1;
// let rad = form.rad;
//
// console.log(someText.value);
// console.log(check1);
// console.log(rad);

let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let form = document.forms.myForm2;
//
// // red.onclick = () => {
// //   if (red.style.backgroundColor === 'red') {
// //     red.style.backgroundColor = 'black';
// //     return
// //   }
// //
// //   red.style.backgroundColor = 'red'
// // }
// //
// // red.onclick = () => {
// //   document.forms.myForm2.someText.value = 'WHO CLICK ON THIS DIV!!?!?!?!?!?!?!?'
// // }
// //
// //
// // document.forms.myForm2.someText.oninput = () => {
// //   let txt = document.forms.myForm2.someText.value;
// //
// //   green.innerText = txt
// // }
// //
// //
// // red.onmouseover = () => {
// //   console.log('MOUSE OVER');
// // }
// //
// // red.onclick = () => {
// //   console.log('LEAVE')
// // }
// //
// // green.onmousemove = (ev) => {
// //   // console.log(ev);
// //   const red = ev.clientX
// //   const greenColor = ev.clientY
// //   const blue = (red + greenColor) / 2
// //
// //   green.style.backgroundColor = `rgb(${red}, ${greenColor}, ${blue})`;
// // }
// //
// //
// // blue.oncopy = () => {
// //   alert('ВЧИСЯ САМ !!!!!');
// //   return 'НІТ';
// // }
// //
// //
// // form.submit.addEventListener('click', ev => {
// //   ev.preventDefault();
// // })
//
// red.addEventListener('click', (ev) => {
//   console.log('red');
//   ev.stopPropagation()
// })
//
// green.addEventListener('click', (ev) => {
//   console.log('green');
//   ev.stopPropagation();
// })
//
// blue.addEventListener('click', (ev) => {
//   ev.stopPropagation()
//   console.log('blue');
// })

let users = [
    {name: 'Sasha', age: 22},
    {name: 'Yevhen', age: 18},
    {name: 'Taras', age: 28},
    {name: 'Alex', age: 25},
    {name: 'Kolya', age: 20},
];


function draw() {
  users.forEach(user => {
    const div = document.createElement('div');
    div.innerText = `name: ${user.name}; age: ${user.age}`;
    div.style.backgroundColor = 'pink';
    div.style.margin = '30px';

    const btn = document.createElement('button');
    btn.innerText = 'REMOVE!';

    btn.onclick = (ev) => {
      console.log(ev.target.parentElement);
      ev.target.parentElement.style.display = 'none'
      console.log('REMOVE');
    }

    div.appendChild(btn);

    document.body.appendChild(div);
  })
}

draw();
