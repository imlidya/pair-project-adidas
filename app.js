const express = require('express')
const app = express()
const port = 3333
// const routes = require('./routes/productRoutes')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs')

// app.get('/', (req, res) => res.render('home'))
app.use('/', require('./routes/productRoutes'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))