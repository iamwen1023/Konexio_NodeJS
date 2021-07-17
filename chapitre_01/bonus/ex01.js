const express = require('express')
const fetch = require("node-fetch");

const app = express()
const port = 8000

const countriesNames = [];
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(res => res.map(element => countriesNames.push(element.name)))
.then(() => console.log(countriesNames.join(",")))
.catch(error => console.error(error))

app.get('/rest/v2/all', (req, res) => {
    res.json(countriesNames)
})
  
app.get('*', (req, res) => {
    res.send('404 - Error')
})
app.listen(port, () => {
    console.info('Server started on port : ' + port)
})