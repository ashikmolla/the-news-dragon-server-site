const express = require('express')
const app = express();
const cors=require('cors')
const port = 5000;

const categories =require('./data/categories.json')


app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello The News Dragon Server Site')
})
app.get('/categories', (req, res) => {
    res.send(categories);
})








app.listen(port, ()=>{
console.log("the News Site Runn", {port})
})