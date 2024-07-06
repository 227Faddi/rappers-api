const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors())
const { rappers } = require('./rappersData')

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/index.html")
})

app.get('/api/rappers/:rapperName', (req, res) =>{
  const rapperName = req.params.rapperName.toLowerCase().replace(/\s/g, "")
  if(rappers[rapperName]){
    res.json(rappers[rapperName])
  } else{
    res.json(rappers['notFound'])
  }
})

app.get('/api/rappers', (req, res) =>{
  res.json(rappers)
})

app.listen(PORT, () =>{
  console.log(`The server is running on port ${PORT}`)
})