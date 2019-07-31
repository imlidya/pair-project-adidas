const express = require('express')
const app = express()
const port = 3333
const routes = require('./routes/productRoutes')
const client = require('./routes/register')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))
app.use('/product', routes)
app.use('/client', client)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))