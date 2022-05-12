const express = require('express')

const app = express()

app.get('/api/random', (req, res) => {
  const r = Math.floor(Math.random() * 10) + 1
  res.send({ data: { number: r }})
})

app.listen(3001, () => {
  'Server started!'
})