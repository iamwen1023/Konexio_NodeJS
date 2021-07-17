const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.listen(8000)

const routes = require('./controllers/users')
app.use('/', routes)
const cors = require('cors');
app.use(cors());
