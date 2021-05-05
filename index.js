//Imports
const express = require('express');
const app = express(); //instance of the app

//Home route
app.get('/', (req, res) => {
    //access a database if needed
    //make some logic based off what is inside of request
    //access an API and return some data
    //send a response at the end
    res.send('Hello World!');
});

app.get('/sei', (req, res) => {
    res.send('SEI 412');
});

// app.listen(8000, () => {
//     console.log('Server is listening on PORT 8000');
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}🔋`);
})