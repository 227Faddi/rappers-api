const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

app.use(cors())
const { rappers } = require('./rappersData')

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/index.html")
})

app.get('/api/:rapperName', (req, res) =>{
  const rapperName = req.params.rapperName.toLowerCase().replace(/\s/g, "")
  console.log(rapperName)
  res.json(rappers[rapperName])
})

app.get('/api', (req, res) =>{
  res.json(rappers)
})

app.listen(PORT, () =>{
  console.log(`The server is running on port ${PORT}`)
})