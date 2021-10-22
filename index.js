const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())
const port = 3000;


app.get('/', (req, res) => {
    res.send('hello yo from nodemon')
});


const users = [
    { id: 0, name: 'Rahim', email: 'khan@gmail.com' },
    { id: 1, name: 'korim', email: 'khan1@gmail.com' },
    { id: 2, name: 'kuddus', email: 'khan2@gmail.com' },
    { id: 3, name: 'kaku', email: 'khan3@gmail.com' },
    { id: 4, name: 'khan', email: 'khan4@gmail.com' },
    { id: 5, name: 'kalim', email: 'khan5@gmail.com' },
    { id: 6, name: 'kodom', email: 'khan5@gmail.com' },
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

// app.method 

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    res.json(newUser)
})

// dynamic api 

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})
app.listen(port, () => {
    console.log('listen', port)
})