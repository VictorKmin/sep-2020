const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));

let users = [
    {name: 'Max', gender: 'male'},
    {name: 'Vlad', gender: 'male'},
    {name: 'Karina', gender: 'female'},
    {name: 'Olga', gender: 'female'},
    {name: 'Vitaliy', gender: 'male'}
];

app.get('/hello', (req, res) => {
    // // res.send('WORLD');
    // res.write('WORLD');
    // res.end();
});


app.get('/login', (req, res) => {
    res.render('login', { xxx: true, name: 'Andrey' });
});


app.post('/login', (req, res) => {
    users.push(req.body);

    console.log(req.body);

    // res.json('User registered');

    res.redirect('/users');
});

app.get('/users', (req, res) => {
   const { gender } = req.query;

    console.log('________________________');
    console.log(req.query);
    console.log('________________________');
    let usersToShow = JSON.parse(JSON.stringify(users));

    if (gender) {
        usersToShow = users.filter(value => value.gender === gender);
    }

    res.render('users', {users: usersToShow})
});

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;

    console.log(req.params);

    res.json(users[userId]);
});

// app.get('/users', (req, res) => {
//     res.json([
//         {name: "Dima"},
//         {name: "Viktor"},
//         {name: "Karina"}
//     ])
// });


app.listen(5000, () => {
    console.log('App listen 5000');
})


// =========== NOT GOOD ===========
// /users/single
// /users/register
// PUT /users/upadateUser
// DELETE /users/deleteOneUSer/:userId
// =========== NOT GOOD ===========


// GET /users
// POST /users
// GET /users/:userID
// PUT /users/:userID
// DELETE /users/:usersID

