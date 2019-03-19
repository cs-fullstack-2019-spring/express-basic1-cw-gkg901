const express = require('express');
const app = express();
app.use(express.static('public'));


//EX 1...ROOT ENDPOINT (OVERWRITTEN BY INDEX.HTML)
//
app.get('/',(req,res) => {
    res.send('Gerren created a server here!')
});

//EX2 ROOT POST REQUEST ENDPOINT
app.post('/',(req,res) => {
    res.send('Gerren got a post request!!!!')
});

//EX3 ROUTE WITH PICTURE
app.get('/picture.jpg',(req,res) => {
    res.send('Gerren created a server here!')
});

//EX4 PUBLIC HTML FILE
app.get('/ex4.html',(req,res) => {
    res.send('Gerren created a server here!')
});




app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});