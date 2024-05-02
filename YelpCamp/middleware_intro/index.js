const express = require('express');
const app = express();
const morgan = require('morgan');

//mongan('tiny');

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof!')
})

app.use((req, res, next) => {
    console.log(req.query);
    next();
})

app.use((req, res, next) => {
    req.method = 'GET';
    console.log(req.method, req.path);
})

app.use((req, res, next) => {
    res.status(404).send('NOT FOUND')
})

const verifyPassword = ((req, res, next) => {
    const {password} = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('Sorry you need a password!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: Sometimes I wear headphones in public so I don\'t have to talk to anyone')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})