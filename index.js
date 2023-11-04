const express = require('express')
const app = express();
const cors = require('cors')
const port = 5000;

const categories = require('./data/categories.json')
const news = require('./data/news.json')


app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello The News Dragon Server Site')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})



/// news all aitem show

app.get('/news', (req, res) => {
    res.send(news)
})
// news spacipick Id data lode 
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedId = news.find(n => n._id === id)
    res.send(selectedId)
})

// categories wais data lode (categories theke id silect korbo then oi id onosare categories_id data show korbo)
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)
    }

})









app.listen(port, () => {
    console.log("the News Site Runn", { port })
})