// const x = require('./dir/file');
//
// x.createUser('Victor', 25);
//
//
// console.log('*************************')
// console.log(__dirname +'/xxx.mp4')
// console.log(__filename)
// console.log('*************************');
//
// process.env.key = 'SECRET';
// console.log(process.env.key);

const fs = require('fs');

const filePath = __dirname + '/dir/king.txt'
const dirName = __dirname + '/dir'


// fs.writeFile(filePath, 'HELLO SEP-2021', err => {
//     if (err) {
//         console.log('_______________________________________');
//         console.log(err);
//         console.log('_______________________________________');
//     }
// });

// fs.appendFile(filePath, 'HELLO \n', err => {
//     if (err) {
//         console.log('_______________________________________');
//         console.log(err);
//         console.log('_______________________________________');
//     }
// })

// fs.mkdir(`${__dirname}/netlix/films/chumba-umba`, { recursive: true } , err => {
//     if (err) {
//         console.log('_______________________________________');
//         console.log(err);
//         console.log('_______________________________________');
//     }
// })

// fs.readFile(filePath, (err, data) => {
//     console.log(data.toString());
// })

// fs.rmdir(`${__dirname}/netlix/films`, { recursive: true } , err => {
//     if (err) {
//         console.log('_______________________________________');
//         console.log(err);
//         console.log('_______________________________________');
//     }
// })

// fs.readdir(dirName, (err, files) => {
//     if (err) {
//         console.log('_______________________________________');
//         console.log(err);
//         console.log('_______________________________________');
//
//         return;
//     }
//
//     files.forEach(fileName => {
//         fs.stat(dirName + `/${fileName}`, (err1, stats) => {
//             console.log('==================================');
//             console.log(stats.isDirectory());
//             console.log('==================================');
//         })
//     })
// });

// fs.unlink(filePath, err => {
//     if (err) {
//         console.log('_______________________________________');
//         console.log(err);
//         console.log('_______________________________________');
//     }
// })

// fs.rename(`${__dirname}/netlix/king.mp4`, `${__dirname}/dir/king.txt`, err => {
//     if (err) {
//         console.log('_______________________________________');
//         console.log(err);
//         console.log('_______________________________________');
//     }
// });


const path = require('path');
//
// let s = path.join(__dirname, 'dir', '///////////////////file.txt');
// console.log(s);
//
// const wrongPath = __dirname + '/dir////////////////////file.txt'
//
// let normalizedPath = path.normalize(wrongPath);
//
// console.log(normalizedPath);


// const readStream = fs.createReadStream(filePath);
// // const writeStream = fs.createWriteStream(filePath);
//
// readStream.on('data', chunk => {
//     console.log(chunk);
//     console.log('___________________________________________________');
// })
//
// readStream.on("end", () => {
//     console.log('Казіно три топора')
// })
//
// // for (let i = 0; i < 100000; i++) {
// //     writeStream.write('HELLLO WROLD')
// // }


const readStream = fs.createReadStream(path.join(__dirname, 'dir', 'king.txt'));
const writeStream = fs.createWriteStream(path.join(__dirname, 'dir', 'data.txt'));

// readStream.on("data", chunk => {
//     writeStream.write(chunk)
// });

readStream.pipe(writeStream);
