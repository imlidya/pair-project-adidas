const express = require('express')
const app = express()
const port = 3333
const session = require('express-session')
// const routes = require('./routes/productRoutes')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs')
// app.locals.hel

app.use('/', require('./routes/productRoutes'))
app.use('/user', require('./routes/userRoutes'))
app.use(session({
  secret: 'terces',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1e9
  }
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
