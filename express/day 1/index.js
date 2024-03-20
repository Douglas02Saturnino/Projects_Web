const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request!');
//     res.send('<h1>This is my webpage!</h1>');
// });

app.get('/', (req, res) => {
    res.send('This is the home page!');    
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched!');
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get('/cats', (req, res) => {
    res.send('MEOW!');    
});

app.post('/cats', (req, res) => {
    res.send('This is a POST request!');    
});

app.get('/dogs', (req, res) => {
    res.send('WOOF!');    
});

app.get('*', (req, res) => {
    res.send('Sorry, I don\'t know that path!');    
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});